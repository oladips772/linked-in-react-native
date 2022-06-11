/** @format */
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import tw from "twrnc";

const CreatePost = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState(null);

  return (
    <View>
      <StatusBar backgroundColor="whitesmoke" />
      {/* header view */}
      <View
        style={tw`shadow-lg flex-row items-center mt-[30px] pb-[2px] pt-[5px] justify-between`}
      >
        <View style={tw`flex-row items-center space-x-6`}>
          <TouchableOpacity style={tw`p-2`} onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={24} />
          </TouchableOpacity>
          <Text style={tw`text-lg font-bold ml-4`}>Share post</Text>
        </View>
        <TouchableOpacity>
          <Text style={tw`text-lg font-bold mr-2 p-2 text-gray-500`}>Post</Text>
        </TouchableOpacity>
      </View>
      {/* user info */}
      <View style={tw`flex-row items-center w-full mx-4 my-4`}>
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
          }}
          source={{
            uri: "https://avatars.githubusercontent.com/u/6589966?v=4",
          }}
        />
        <View style={tw`flex items-start ml-2`}>
          <Text style={tw`font-bold text-[14px] text-gray-700`}>
            NAZARY DAMUNSAKI
          </Text>
          <View style={styles.global}>
            <Entypo name="globe" size={13} color="gray" />
            <Text style={tw`text-sm font-bold`}>Anyone</Text>
            <AntDesign name="caretdown" size={13} color="gray" />
          </View>
        </View>
      </View>
      {/* input and image */}
      <ScrollView style={tw`mx-4`} showsVerticalScrollIndicator={false}>
        <TextInput
          style={styles.input}
          placeholder="What do you want to talk about?"
          multiline={true}
          placeholderTextColor="gray"
        />
        <Image
          style={{
            width: "100%",
            height: 320,
            resizeMode: "cover",
            marginBottom: 270,
          }}
          source={{
            uri: "https://pbs.twimg.com/media/FRDSv8eVEAATjS7?format=jpg&name=large",
          }}
        />
      </ScrollView>
      {/* contoll view */}
      <View style={styles.bottom}>
        <Text style={tw`font-bold text-blue-500 mx-[14px]`}>Add hashtag</Text>
        <View
          style={tw`flex-row items-center w-full mx-4 justify-between mt-2`}
        >
          <View style={tw`flex-row items-center justify-between w-[160px]`}>
            <TouchableOpacity>
              <FontAwesome name="camera" size={20} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="videocam" size={23} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="image" size={23} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={23} color="gray" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={tw`flex-row items-center mr-[20px] p-2`}>
            <Entypo name="globe" size={13} color="gray" />
            <Text style={tw`font-bold text-gray-600 ml-2`}>Anyone</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 5,
    paddingTop: 5,
    justifyContent: "space-between",
  },
  global: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 30,
    width: 117,
    justifyContent: "space-around",
    padding: 1,
  },
  input: {
    fontSize: 18,
  },
  bottom: {
    position: "absolute",
    width: "100%",
    bottom: 98,
    flexDirection: "column",
    zIndex: 999,
    backgroundColor: "whitesmoke",
    paddingBottom: 4,
    paddingTop: 4,
  },
});
