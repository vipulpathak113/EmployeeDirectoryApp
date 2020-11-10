import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Home from "./screens/Home";
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const options = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#2941e6"
  }

}

const App = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen name="Home" component={Home} options={{
          ...options, title: "Home", headerLeft: null,
          gesturesEnabled: false
        }} />
        <Stack.Screen name="Create" component={CreateEmployee} options={{ ...options, title: "Create" }} />
        <Stack.Screen name="Profile" component={Profile} options={{ ...options }} />
      </Stack.Navigator>
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer><App /></NavigationContainer>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
  },
});
