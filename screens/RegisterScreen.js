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

const RegisterScreen = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [userImage, setUserImage] = useState(null);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password).catch((err) =>
      alert(err)
    );
  };

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
          <View style={tw`text-center mt-6`}>
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
