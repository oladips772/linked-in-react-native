/** @format */
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import tw from "twrnc";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import { auth, storage } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from "axios";

const RegisterScreen = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let selectFile = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    setImage(pickerResult.uri);
  };

  const handleCreate = async () => {
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

    if (!image) return;
    const data = new FormData();
    data.append("file", blob);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dsbhrtd0o/image/upload",
        data
      );
      const { url } = uploadRes.data;
      setUserImage(url);
      console.log(uploadRes.data);
    } catch (err) {
      console.log(err);
      err && alert(`${err.message}, reselect the image please`);
    }
    console.log(userImage);
  };

  useEffect(() => {
    if (image) {
      handleCreate();
    }
  }, [image]);

  async function createUser() {
    if (!userImage) {
      alert("Please select an image");
      return;
    }

    if (!name && title) {
      alert("fill all fields");
      return;
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        updateProfile(user, {
          displayName: name,
          photoURL: userImage,
          title: title,
        });
      })
      .catch((err) => alert(err));
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={"height"}>
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
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png",
            }}
            style={{
              width: 60,
              height: 60,
              resizeMode: "contain",
            }}
          />
          {/* profile image view */}
          <View style={tw`flex items-center m-2`}>
            <TouchableOpacity onPress={selectFile}>
              <Image
                source={{
                  uri: image
                    ? image
                    : "https://www.kindpng.com/picc/m/207-2074624_white-gray-circle-avatar-png-transparent-png.png",
                }}
                style={tw`rounded-full w-[90px] h-[90px] object-contain m-2`}
              />
            </TouchableOpacity>
            <Text style={tw`font-bold text-gray-700`}>
              Select profile image
            </Text>
          </View>
          <View style={tw`text-center mt-6`}>
            <TextInput placeholder="Full Name" style={styles.input} />
            <TextInput
              placeholder="Title(Developer / UI-Designer / Analyst)"
              style={styles.input}
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={(val) => setEmail(val)}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              value={password}
              onChangeText={(val) => setPassword(val)}
            />
            <TouchableOpacity
              style={styles.logiBtn}
              activeOpacity={0.8}
              onPress={createUser}
            >
              <Text style={tw`font-bold text-white`}>REGISTER</Text>
            </TouchableOpacity>
            <View style={tw`flex-row items-center justify-center`}>
              <Text style={tw`font-[500] text-[16px]`}>
                already have an account ?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={tw`font-bold text-[16px] text-[#0072b1]`}>
                  {" "}
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
