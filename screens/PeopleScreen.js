/** @format */
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import {
  AntDesign,
  Fontisto,
  Ionicons,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import tw from "twrnc";

const PeopleScreen = ({ navigation }) => {
  return (
    <View>
      <StatusBar backgroundColor="white" />
      {/* header view */}
      <View style={[styles.header, tw`shadow-sm pb-2 pt-2`]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={28} color="black" style={tw`p-2`} />
        </TouchableOpacity>
        <Text style={tw`text-xl font-bold ml-8 text-gray-700`}>
          Manage my network
        </Text>
      </View>
      {/* list view */}
      <View>
        <TouchableOpacity style={styles.listItem}>
          <View style={tw`flex-row items-center`}>
            <Fontisto name="persons" size={24} color="black" />
            <Text style={tw`text-lg ml-6 text-gray-700 font-semibold`}>
              Connections
            </Text>
          </View>
          <Text style={tw`text-lg font-semibold text-gray-700`}>185</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <View style={tw`flex-row items-center`}>
            <Ionicons name="person-add-outline" size={24} color="black" />
            <Text style={tw`text-lg ml-6 text-gray-700 font-semibold`}>
              People i follow
            </Text>
          </View>
          <Text style={tw`text-lg font-semibold text-gray-700`}>53</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <View style={tw`flex-row items-center`}>
            <Feather name="hash" size={24} color="black" />
            <Text style={tw`text-lg ml-6 text-gray-700 font-semibold`}>
              Hashtags
            </Text>
          </View>
          <Text style={tw`text-lg font-semibold text-gray-700`}>20</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <View style={tw`flex-row items-center`}>
            <FontAwesome name="building-o" size={24} color="black" />
            <Text style={tw`text-lg ml-6 text-gray-700 font-semibold`}>
              Companies
            </Text>
          </View>
          <Text style={tw`text-lg font-semibold text-gray-700`}>28</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listItem}>
          <View style={tw`flex-row items-center`}>
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              size={24}
              color="black"
            />
            <Text style={tw`text-lg ml-6 text-gray-700 font-semibold`}>
              Newsletters
            </Text>
          </View>
          <Text style={tw`text-lg font-semibold text-gray-700`}>4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PeopleScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
});
