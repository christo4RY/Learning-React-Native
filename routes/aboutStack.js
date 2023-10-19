import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/about";

const homeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "orange",
        },
      }}
    >
      <Stack.Screen
        name="about"
        component={About}
        options={{ title: "About" }}
      />
    </Stack.Navigator>
  );
};

export default homeStack;
