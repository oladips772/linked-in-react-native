/** @format */
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, LogBox, Image } from "react-native";
import { Navigation, SignedOutStack } from "./Navigation";
// import * as ImagePicker from "expo-image-picker";

export default function App() {
  const user = 0;
  // const user = useAuthState();
  // const [image, setImage] = useState(null);

  // let selectFile = async () => {
  //   let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //   console.log(pickerResult);

  //   setImagee({ localUri: pickerResult.uri });
  // };

  LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {user ? <Navigation /> : <SignedOutStack />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
