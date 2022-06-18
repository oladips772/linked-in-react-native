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
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function LOGIN() {
    await signInWithEmailAndPassword(auth, email, password).catch((err) =>
      alert(err)
    );
  }

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
              onPress={LOGIN}
            >
              <Text style={tw`font-bold text-white`}>LOGIN</Text>
            </TouchableOpacity>
            <View style={tw`flex-row items-center justify-center`}>
              <Text style={tw`font-[500] text-[16px]`}>
                don't have an account ?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={tw`font-bold text-[16px] text-[#0072b1]`}>
                  {" "}
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LoginScreen;

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
