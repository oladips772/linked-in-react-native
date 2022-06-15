/** @format */
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import tw from "twrnc";
import { Feather } from "@expo/vector-icons";

const JobsScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor="white" />
      {/* header view */}
      <View
        style={tw`flex-row w-full justify-between bg-white pb-4 mb-2 pt-[20px] shadow mt-[30px] items-center`}
      >
        <Text style={tw`text-lg font-bold mx-4`}>My Jobs</Text>
        <Text style={tw`text-[17px] font-bold text-blue-600 mx-4`}>
          See all (4)
        </Text>
      </View>
      {/* jobs view */}
      <Text style={tw`mx-4 text-lg font-bold mb-6`}>Recommended for you</Text>
      {/* mai job view */}
      <View style={styles.job}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            resizeMode: "contain",
          }}
        />
        <Text style={tw`text-[16px] font-bold`}>
          Javascript Dev (NGN,250,000)
        </Text>
        <Feather name="bookmark" size={23} />
      </View>
      <View style={styles.job}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            resizeMode: "contain",
          }}
        />
        <Text style={tw`text-[16px] font-bold`}>Python Dev (NGN,300,000)</Text>
        <Feather name="bookmark" size={23} />
      </View>
      <View style={styles.job}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            resizeMode: "contain",
          }}
        />
        <Text style={tw`text-[16px] font-bold`}>
          React developer (NGN,450,000)
        </Text>
        <Feather name="bookmark" size={23} />
      </View>
      <View style={styles.job}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            resizeMode: "contain",
          }}
        />
        <Text style={tw`text-[16px] font-bold`}>
          React Native Dev (NGN,350,000)
        </Text>
        <Feather name="bookmark" size={23} />
      </View>
    </View>
  );
};

export default JobsScreen;

const styles = StyleSheet.create({
  job: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    padding: 15,
    marginBottom: 5,
  },
});
