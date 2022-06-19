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
import { auth, db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

const CreatePost = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const user = auth.currentUser;

  const pickImageHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const createPost = async () => {
    const postRef = await addDoc(collection(db, "posts"), {
      message: message,
      time: serverTimestamp(),
      userName: user.displayName,
      userImage: user.photoURL,
      userEmail: user.email,
    });

    if (image) {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          console.log(e);
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", image, true);
        xhr.send(null);
      });

      const imageRef = ref(storage, `posts/${postRef.id}/images`);
      await uploadBytes(imageRef, blob, {
        contentType: "image/jpeg",
      });
      await updateDoc(postRef, {
        postImage: await getDownloadURL(imageRef),
      });
    }
    setMessage("");
    setImage(null);
  };

  return (
    <View>
      <StatusBar backgroundColor="whitesmoke" />
      {/* header view */}
      <View
        style={tw`shadow-lg flex-row items-center mt-[30px] pb-[2px] pt-[5px] justify-between`}
      >
        <View style={tw`flex-row items-center space-x-6`}>
          <TouchableOpacity style={tw`p-2`} onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={24} style={tw`text-gray-700`} />
          </TouchableOpacity>
          <Text style={tw`text-lg font-bold ml-4 text-gray-700`}>
            Share post
          </Text>
        </View>
        <TouchableOpacity onPress={createPost} disabled={!message.trim()}>
          <Text
            style={tw`text-lg font-bold mr-2 p-2 ${
              message.trim() || image ? "text-blue-600" : "text-gray-500"
            }`}
          >
            Post
          </Text>
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
            uri: user
              ? user?.photoURL
              : "https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png",
          }}
        />
        <View style={tw`flex items-start ml-2`}>
          <Text style={tw`font-bold text-[18px] text-gray-700`}>
            {user.displayName}
          </Text>
          <View style={styles.global}>
            <Entypo name="globe" size={13} color="gray" />
            <Text style={tw`text-sm font-bold text-gray-700`}>Anyone</Text>
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
          value={message}
          onChangeText={(val) => setMessage(val)}
        />
        {image && (
          <Image
            style={{
              width: "100%",
              height: 320,
              resizeMode: "cover",
              marginBottom: 300,
            }}
            source={{
              uri: image,
            }}
          />
        )}
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
            <TouchableOpacity onPress={pickImageHandler}>
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
    top: 615,
    flexDirection: "column",
    zIndex: 999,
    backgroundColor: "whitesmoke",
    paddingBottom: 4,
    paddingTop: 4,
  },
});
