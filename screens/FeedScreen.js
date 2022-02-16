/** @format */
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const FeedScreen = ({ navigation }) => {
  return (
    <View>
      <Text>FeedScreen</Text>
      <Button title="navigate" onPress={() => navigation.navigate("Details")} />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
