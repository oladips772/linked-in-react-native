/** @format */
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import tw from "twrnc";
import { auth, storage, db } from "../firebase";
import { updateProfile, signOut } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const user = auth.currentUser;

  const pickImageHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user?.displayName);
      setImage(user.photoURL);
    }
  }, [user]);

  const createProfile = async () => {
    if (!image) {
      alert("Please select profile image");
      return;
    }
    if (!name && !title) {
      alert("Please enter your name and title");
      return;
    }

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

    const imageRef = ref(storage, `users/${user.uid}/images`);
    await uploadBytes(imageRef, blob, {
      contentType: "image/jpeg",
    });
    await updateProfile(user, {
      displayName: name,
      photoURL: await getDownloadURL(imageRef),
    })
      .then(() => alert("saved profile sucessfully"))
      .catch((err) => alert(err));
  };

  const LOGOUT = () => {
    signOut(auth);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" />
      {/* body */}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={{
            marginTop: 120,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={tw`flex items-center`}
            activeOpacity={0.8}
            onPress={pickImageHandler}
          >
            <Image
              source={{
                uri: image
                  ? image
                  : "https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png",
              }}
              style={tw`rounded-full w-[80px] h-[80px]`}
            />
            <Text style={tw`font-bold m-2`}>Select profile image</Text>
          </TouchableOpacity>
          <View style={tw`text-center mt-6`}>
            <TextInput
              placeholder="Full Name"
              style={styles.input}
              value={name}
              onChangeText={(val) => setName(val)}
            />
            <TouchableOpacity
              style={styles.logiBtn}
              activeOpacity={0.8}
              onPress={createProfile}
            >
              <Text style={tw`font-bold text-white`}>SAVE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.logiBtn}
              activeOpacity={0.8}
              onPress={LOGOUT}
            >
              <Text style={tw`font-bold text-white`}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  input: {
    margin: 10,
    height: 45,
    width: 340,
    borderColor: "gray",
    fontSize: 17,
    borderWidth: 1,
    padding: 5,
    borderRadius: 4,
  },
  logiBtn: {
    textAlign: "center",
    margin: 10,
    width: 340,
    height: 40,
    backgroundColor: "#0072b1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
