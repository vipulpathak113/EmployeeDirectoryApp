import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card, FAB } from "react-native-paper";

const Home = (props) => {
  return (
    <View style={{flex:1}}>
      <Card style={styles.container}>
        <View style={styles.cardView}>
          <Image
            style={styles.profile}
            source={{
              uri:
                "https://filmdaily.co/wp-content/uploads/2020/06/babyyoda-lede.jpg",
            }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18 }}>Baby Yoda</Text>
            <Text style={{ fontSize: 18 }}>Senior Jedi</Text>
          </View>
        </View>
      </Card>

      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        onPress={() =>props.navigation.navigate("Create")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  cardView: {
    flexDirection: "row",
    marginLeft: 5,
    padding: 6,
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor:"#2941e6"
  },
});

export default Home;
