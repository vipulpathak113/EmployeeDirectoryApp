import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card, FAB } from "react-native-paper";

const Home = () => {
  return (
    <View>
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
        small
        icon="plus"
        onPress={() => console.log("Pressed")}
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
  },
});

export default Home;
