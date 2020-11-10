import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView, RefreshControl } from "react-native";
import { Card, FAB } from "react-native-paper";
import axios from "axios";

const Home = ({ navigation }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    axios.get('http://a892643b4695.ngrok.io/getEmployee')
      .then(function (response) {
        setData(response.data)
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchData()

  }, [])

  const employees = () => {
    return data.map((item, key) => {
      return (
        <Card style={styles.container} key={key} onPress={() => {
          navigation.navigate('Profile', { item })
        }}>
          <View style={styles.cardView}>
            <Image
              style={styles.profile}
              source={{
                uri:
                  item.picture,
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
              <Text style={{ fontSize: 18 }}>{item.position}</Text>
            </View>
          </View>
        </Card>)
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView refreshControl={
        <RefreshControl refreshing={loading} onRefresh={() => { fetchData() }} />
      }>
        {
          employees()
        }
      </ScrollView>
      <FAB
        style={styles.fab}
        small={false}
        icon="plus"
        onPress={() => navigation.navigate("Create")}
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
    backgroundColor: "#2941e6"
  },
});

export default Home;
