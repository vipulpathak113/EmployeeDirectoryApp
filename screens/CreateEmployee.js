import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Modal } from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';

export default function CreateEmployee() {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Salary, setSalary] = useState("");
  const [Picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);


  const pickFromGallery= async ()=>{
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
    else{
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
  
      if(!result.cancelled){
        let newFile={
          uri:result.uri,
          type:`test/${result.uri.split(".")[1]}`,
          name:`test.${result.uri.split(".")[1]}`
        }
        handleUpload(newFile)
      }
    } 
  }
  const pickFromCamera= async ()=>{
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
    }
    else{
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if(!result.cancelled){
        let newFile={
          uri:result.uri,
          type:`test/${result.uri.split(".")[1]}`,
          name:`test.${result.uri.split(".")[1]}`
        }
        handleUpload(newFile)
      }
  
      console.log(result);
    } 
  }

  const handleUpload=(image)=>{
    const data= new FormData()
    data.append('file',image)
    data.append('upload_preset',"employeeapp")
    data.append('cloud_name',"vipul113")

    fetch("https://api.cloudinary.com/v1_1/vipul113/image/upload",{
      method:"post",
      body:data
    }).then(res=>res.json()).then(data=>{
      setPicture(data.url)
      setModal(false)
    })
  }



  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        label="Name"
        value={Name}
        onChangeText={(text) => setName(text)}
        mode="outlined"
      />
      <TextInput
        style={styles.input}
        label="Email"
        value={Email}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
      />
      <TextInput
        style={styles.input}
        label="Phone"
        value={Phone}
        keyboardType="number-pad"
        onChangeText={(text) => setPhone(text)}
        mode="outlined"
      />

      <TextInput
        style={styles.input}
        label="Salary"
        value={Salary}
        onChangeText={(text) => setSalary(text)}
        mode="outlined"
      />
      <Button
        icon={Picture==""?"upload":"check"}
        style={styles.input}
        mode="contained"
        onPress={() => setModal(true)}
      >
        Upload Image
      </Button>
      <Button
        icon="content-save"
        style={styles.input}
        mode="contained"
        onPress={() => setModal(true)}
      >
        save
      </Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.buttonView}>
            <Button
              icon="camera"
              mode="contained"
              onPress={() => pickFromCamera()}
            >
              CAMERA
            </Button>
            <Button
              icon="image-area"
              mode="contained"
              onPress={() => pickFromGallery()}
            >
              GALLERY
            </Button>
          </View>
          <Button onPress={() => setModal(false)}>CANCEL</Button>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  input: {
    margin: 5,
    padding:5,
    height:50
  },
  modalView: {
    position: "absolute",
    bottom: 2,
    width: "100%",
    backgroundColor: "white",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
