import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Modal, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/json';


export default function CreateEmployee(props) {

  const getDetails = (type) => {
    if (props.route.params) {
      const getData = props.route.params.data
      switch (type) {
        case "name":
          return getData.name
        case "email":
          return getData.email
        case "phone":
          return getData.phone
        case "picture":
          return getData.picture
        case "position":
          return getData.position
        case "salary":
          return getData.salary
      }

    }
    else {
      return ""
    }

  }
  const [Name, setName] = useState(getDetails("name"));
  const [Position, setPosition] = useState(getDetails("position"));
  const [Phone, setPhone] = useState(getDetails("phone"));
  const [Email, setEmail] = useState(getDetails("email"));
  const [Salary, setSalary] = useState(getDetails("salary"));
  const [Picture, setPicture] = useState(getDetails("picture"));
  const [error, setError] = useState('')
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setError('')

  }, [])

  const updateEmployee = () => {
    setError('')
    if (Name === "") {
      setError(error => ({
        ...error,
        Name: "*This field is Required"
      }))
    }
    if (Email === "") {
      setError(error => ({
        ...error,
        Email: "*This field is Required"
      }))
    }
    if (Phone === "") {
      setError(error => ({
        ...error,
        Phone: "*This field is Required"
      }))
    }
    if (Position === "") {
      setError(error => ({
        ...error,
        Position: "*This field is Required"
      }))
    }
    if (Picture === "") {
      setError(error => ({
        ...error,
        Picture: "*Attachment is Required"
      }))
    }
    if (Salary === "") {
      setError(error => ({
        ...error,
        Salary: "*This field is Required"
      }))
    }
    else{
    axios.post('http://0b1626cb4a85.ngrok.io/updateEmployee', {
      id: props.route.params.data._id,
      name: Name,
      email: Email,
      phone: Phone,
      picture: Picture,
      salary: Salary,
      position: Position
    })
      .then(function (response) {
        props.navigation.push('Home')
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  const saveEmployee = () => {
    setError('')
    if (Name === "") {
      setError(error => ({
        ...error,
        Name: "*This field is Required"
      }))
    }
    if (Email === "") {
      setError(error => ({
        ...error,
        Email: "*This field is Required"
      }))
    }
    if (Phone === "") {
      setError(error => ({
        ...error,
        Phone: "*This field is Required"
      }))
    }
    if (Position === "") {
      setError(error => ({
        ...error,
        Position: "*This field is Required"
      }))
    }
    if (Picture === "") {
      setError(error => ({
        ...error,
        Picture: "*Attachment is Required"
      }))
    }
    if (Salary === "") {
      setError(error => ({
        ...error,
        Salary: "*This field is Required"
      }))
    }
    else {
      setError("")
      axios.post('http://0b1626cb4a85.ngrok.io/createEmployee', {
        name: Name,
        email: Email,
        phone: Phone,
        picture: Picture,
        salary: Salary,
        position: Position
      })
        .then(function (response) {
          props.navigation.push('Home')
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }


  const pickFromGallery = async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
    else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) {
        let newFile = {
          uri: result.uri,
          type: `test/${result.uri.split(".")[1]}`,
          name: `test.${result.uri.split(".")[1]}`
        }
        handleUpload(newFile)
      }
    }
  }
  const pickFromCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
    }
    else {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) {
        let newFile = {
          uri: result.uri,
          type: `test/${result.uri.split(".")[1]}`,
          name: `test.${result.uri.split(".")[1]}`
        }
        handleUpload(newFile)
      }
    }
  }

  const handleUpload = (image) => {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', "employeeapp")
    data.append('cloud_name', "vipul113")

    fetch("https://api.cloudinary.com/v1_1/vipul113/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json()).then(data => {
      setPicture(data.url)
      setModal(false)
    })
  }

  console.log("error", error)

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        label="Name"
        value={Name}
        onChangeText={(text) => setName(text)}
        mode="outlined"
      />
      {error.Name ? <Text style={styles.error}>{error.Name}</Text> : null}
      <TextInput
        style={styles.input}
        label="Position"
        value={Position}
        onChangeText={(text) => setPosition(text)}
        mode="outlined"
      />
      {error.Position ? <Text style={styles.error}>{error.Position}</Text> : null}
      <TextInput
        style={styles.input}
        label="Email"
        value={Email}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
      />
      {error.Email ? <Text style={styles.error}>{error.Email}</Text> : null}
      <TextInput
        style={styles.input}
        label="Phone"
        value={Phone}
        keyboardType="number-pad"
        onChangeText={(text) => setPhone(text)}
        mode="outlined"
      />
      {error.Phone ? <Text style={styles.error}>{error.Phone}</Text> : null}
      <TextInput
        style={styles.input}
        label="Salary"
        value={Salary}
        onChangeText={(text) => setSalary(text)}
        mode="outlined"
      />
      {error.Salary ? <Text style={styles.error}>{error.Salary}</Text> : null}
      <Button
        icon={Picture == "" ? "upload" : "check"}
        style={{margin:10,padding:5}}
        mode="contained"
        onPress={() => setModal(true)}
      >
        Upload Image
      </Button>
      {error.Picture ? <Text style={styles.error}>{error.Picture}</Text> : null}
      {props.route.params ?
        <Button
          icon="content-save"
          style={{margin:10,padding:5}}
          mode="contained"
          onPress={() => updateEmployee()}
        >
          update
     </Button> :
        <Button
          icon="content-save"
          style={{margin:10,padding:5}}
          mode="contained"
          onPress={() => saveEmployee()}
        >
          save
    </Button>
      }

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
    padding: 3,
    height: 50
  },
  error: {
    marginLeft: 15,
    color: 'red'
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
