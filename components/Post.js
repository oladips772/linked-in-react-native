/** @format */
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Entypo, FontAwesome, Feather, Ionicons } from "@expo/vector-icons";

const Post = () => {
  return (
    <View style={styles.container}>
      {/* post header */}
      <View style={styles.headerContainer}>
        {/* post info */}
        <View style={styles.leftContainer}>
          <Image
            style={{
              width: 45,
              height: 45,
              borderRadius: 100,
              marginRight: -90,
            }}
            source={{
              uri: "https://avatars.githubusercontent.com/u/6589966?v=4",
            }}
          />
          <View>
            <Text style={tw`font-bold`}>Naz damunasky</Text>
            <Text style={tw`text-gray-500`}>software engineer</Text>
            <Text style={tw`text-gray-500`}>
              2d . <Entypo name="globe" size={11} />{" "}
            </Text>
          </View>
          <TouchableOpacity style={tw`flex-row items-center p-2`}>
            <Entypo name="plus" size={16} style={tw`text-blue-600 font-bold`} />
            <Text style={tw`text-blue-600 font-bold `}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* post details */}
      <View>
        <Text style={tw`mt-[1px] text-[15px] mb-[2px]`}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </Text>
        <Image
          style={{
            width: "100%",
            height: 320,
            resizeMode: "cover",
          }}
          source={{
            uri: "https://pbs.twimg.com/media/FRDSv8eVEAATjS7?format=jpg&name=large",
          }}
        />
        {/* comment view */}
        <View style={tw`mt-[3px] flex-row items-center`}>
          <FontAwesome
            name="thumbs-up"
            size={18}
            color="green"
            style={tw`bg-green-100 rounded-full p-1 mr-[2px]`}
          />
          <Text style={tw`text-gray-600 text-sm`}>1,203 likes</Text>
          <Text style={tw`text-gray-600 text-sm ml-[140px]`}>
            1,203 comments
          </Text>
        </View>
        {/* buttons view */}
        <View style={styles.btnWrapper}>
          <TouchableOpacity style={styles.btnCont}>
            <FontAwesome
              name="thumbs-o-up"
              size={18}
              color="gray"
              style={tw`rounded-full p-1 mr-[2px]`}
            />
            <Text style={tw`text-gray-600`}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCont}>
            <Feather
              name="corner-up-right"
              size={18}
              color="gray"
              style={tw`rounded-full p-1 mr-[2px]`}
            />
            <Text style={tw`text-gray-600`}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCont}>
            <Ionicons
              name="ios-chatbox-ellipses"
              size={18}
              color="gray"
              style={tw`rounded-full p-1 mr-[2px]`}
            />
            <Text style={tw`text-gray-600`}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCont}>
            <FontAwesome
              name="send"
              size={18}
              color="gray"
              style={tw`rounded-full p-1 mr-[2px]`}
            />
            <Text style={tw`text-gray-600`}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  btnCont: {
    flexDirection: "column",
    alignItems: "center",
  },
  btnWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 4,
    borderTopColor: "lightgray",
    borderTopWidth: 1,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
  },
});
 