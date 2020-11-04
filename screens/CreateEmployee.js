import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-paper";

export default function CreateEmployee() {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Salary, setSalary] = useState("");
  const [Picture, setPicture] = useState("");
  const [Modal, setModal] = useState(false);

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

    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  input: {
    marginLeft: 6,
    padding:4
  },
});
