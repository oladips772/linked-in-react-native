/** @format */

import { StyleSheet, Text, View, StatusBar } from "react-native";
import tw from "twrnc";
import { Feather } from "@expo/vector-icons";

const JobsScreen = () => {
  return (
    <View>
      <StatusBar backgroundColor="white" />
      {/* header view */}
      <View
        style={tw`flex-row w-full justify-between bg-white pb-4 mb-2 pt-4 shadow mt-[30px]`}
      >
        <Text style={tw`text-lg font-bold mx-4`}>My Jobs</Text>
        <Text style={tw`text-lg font-bold text-blue-600 mx-4`}>See all(4)</Text>
      </View>
    </View>
  );
};

export default JobsScreen;

const styles = StyleSheet.create({});
