import React from "react";
import { StyleSheet, Text, View, Image, Linking, Platform } from "react-native";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

export default function Profile() {
  const openDialer = () => {
    if (Platform.OS === "android") {
      Linking.openURL("tel:123456");
    } else {
      Linking.openURL("telprompt:123456789");
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
              "https://filmdaily.co/wp-content/uploads/2020/06/babyyoda-lede.jpg",
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Title>Baby Yoda</Title>
        <Text>Senior Jedi</Text>
      </View>
      <Card
        style={styles.cardView}
        onPress={() => {
          Linking.openURL("mailto:baby@yoda.com");
        }}
      >
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={24} color="#2941e6" />
          <Text style={styles.textStyle}>baby@yoda.com</Text>
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
          <Text style={styles.textStyle}>1234567890</Text>
        </View>
      </Card>
      <Card style={styles.cardView}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={24} color="#2941e6" />
          <Text style={styles.textStyle}>5 LPA</Text>
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
          onPress={() => setModal(true)}
        >
          Edit
        </Button>
        <Button
          icon="delete"
          theme={theme}
          mode="contained"
          onPress={() => setModal(true)}
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
