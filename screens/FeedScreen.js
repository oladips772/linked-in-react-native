/** @format */
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Ionicons, Feather } from "@expo/vector-icons";
import Post from "../components/Post";

const FeedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* header view */}
      <View style={styles.headerContainer}>
        <Image
          style={{
            height: 35,
            width: 35,
            borderRadius: 50,
          }}
          source={{
            uri: "https://avatars.githubusercontent.com/u/6589966?v=4",
          }}
        />
        <View
          style={tw`h-[30px] bg-blue-100 rounded-sm w-[230px] flex flex-row items-center`}
        >
          <Feather name="search" size={20} color="gray" style={tw`ml-2`} />
          <Text style={tw`ml-2 text-gray-500 font-bold`}>Search</Text>
        </View>
        <Ionicons name="ios-chatbox-ellipses" size={24} color="gray" />
      </View>
      {/*  */}
      <Post />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 7,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
    paddingTop: 18,
    marginVertical: 18,
    backgroundColor: "whitesmoke",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    paddingBottom: 7,
  },
});
