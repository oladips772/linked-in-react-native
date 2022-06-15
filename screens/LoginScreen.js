/** @format */
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" />
      {/* body */}
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
            width: 50,
            height: 50,
            resizeMode: "contain",
          }}
        />
        <View>
          <TextInput placeholder="Email" style={styles.input} />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {},
});
