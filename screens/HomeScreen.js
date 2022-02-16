/** @format */
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedScreen from "./FeedScreen";
import DetailsScreen from "./DetailsScreen";

const Stack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const HomeScreen = () => {
  return <HomeStackScreen />;
};

export default HomeScreen;
