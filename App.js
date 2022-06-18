/** @format */
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, LogBox, Image } from "react-native";
import { Navigation, SignedOutStack } from "./Navigation";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
      }),
    [currentUser, auth]
  );

  LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {currentUser ? <Navigation /> : <SignedOutStack />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
