/** @format */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import JobsScreen from "./screens/JobsScreen";
import { Ionicons } from "@expo/vector-icons";
import CreatePost from "./screens/CreatePost";
import PeopleScreen from "./screens/PeopleScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { auth } from "./firebase";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const user = auth.currentUser;

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let Size = 27;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
            Size = focused ? 25 : 20;
          } else if (route.name === "Jobs") {
            iconName = focused ? "briefcase" : "ios-briefcase";
            Size = focused ? 25 : 20;
          } else if (route.name === "Create") {
            iconName = focused ? "add-circle" : "add-circle";
            Size = focused ? 25 : 20;
          } else if (route.name === "Network") {
            iconName = focused ? "ios-people" : "ios-people";
            Size = focused ? 25 : 20;
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person";
            Size = focused ? 25 : 20;
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
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const SignedOutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { Navigation, SignedOutStack };
