import React from "react";
import { StyleSheet, Text, View, Image, Linking, Platform } from "react-native";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import axios from "axios";

export default function Profile(props) {
  const data = props.route.params.item

  console.log(data)

  const deleteEmployee=()=>{
    axios.post('http://a892643b4695.ngrok.io/deleteEmployee', {
      id: data._id
    })
    .then(function (response) {
      props.navigation.push('Home')
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const openDialer = () => {
    if (Platform.OS === "android") {
      Linking.openURL(`tel:${data.email}`);
    } else {
      Linking.openURL(`telprompt:${data.email}`);
    }
  };
  return (
    <View style={styles.root}>
      <View style={styles.profileView} />
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ height: 140, width: 140, borderRadius: 70, marginTop: -50 }}
          source={{
            uri:
              data.picture
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Title>{data.name}</Title>
        <Text>{data.position}</Text>
      </View>
      <Card
        style={styles.cardView}
        onPress={() => {
          Linking.openURL(`mailto:${data.email}`);
        }}
      >
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={24} color="#2941e6" />
          <Text style={styles.textStyle}>{data.email}</Text>
        </View>
      </Card>
      <Card
        style={styles.cardView}
        onPress={() => {
          openDialer();
        }}
      >
        <View style={styles.cardContent}>
          <Entypo name="phone" size={24} color="#2941e6" />
          <Text style={styles.textStyle}>{data.phone}</Text>
        </View>
      </Card>
      <Card style={styles.cardView}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={24} color="#2941e6" />
          <Text style={styles.textStyle}>{data.salary}</Text>
        </View>
      </Card>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <Button
          icon="account-edit"
          theme={theme}
          mode="contained"
          onPress={() => props.navigation.push('Create',{data})}
        >
          Edit
        </Button>
        <Button
          icon="delete"
          theme={theme}
          mode="contained"
          onPress={() => deleteEmployee()}
        >
          Remove
        </Button>
      </View>
    </View>
  );
}

const theme = {
  colors: {
    primary: "#2941e6",
  },
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  profileView: {
    backgroundColor: "#5e70eb",
    height: "20%",
  },
  cardContent: {
    flexDirection: "row",
  },
  cardView: {
    marginTop: 5,
    padding: 8,
  },
  textStyle: {
    marginLeft: 5,
  },
});
