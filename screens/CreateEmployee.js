import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Modal } from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function CreateEmployee() {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Salary, setSalary] = useState("");
  const [Picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);

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
        icon="upload"
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
              onPress={() => setModal(true)}
            >
              CAMERA
            </Button>
            <Button
              icon="image-area"
              mode="contained"
              onPress={() => setModal(true)}
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
