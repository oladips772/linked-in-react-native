/** @format */
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import JobsScreen from "./screens/JobsScreen";
import { Ionicons } from "@expo/vector-icons";
import CreatePost from "./screens/CreatePost";
import PeopleScreen from "./screens/PeopleScreen";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let Size = 27;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
              Size = focused ? 29 : 20;
            } else if (route.name === "Jobs") {
              iconName = focused ? "briefcase" : "ios-briefcase";
              Size = focused ? 29 : 20;
            } else if (route.name === "Create") {
              iconName = focused ? "add-circle" : "add-circle";
              Size = focused ? 29 : 20;
            } else if (route.name === "Network") {
              iconName = focused ? "ios-people" : "ios-people";
              Size = focused ? 29 : 20;
            }
            // You can return any component that you like here!
            return (
              <>
                <Ionicons name={iconName} size={Size} color={color} />
              </>
            );
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Create"
          component={CreatePost}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Network"
          component={PeopleScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Jobs"
          component={JobsScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
