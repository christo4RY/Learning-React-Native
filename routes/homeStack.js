import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import Detail from "../screens/detail";
import Header from "../shared/header";

const homeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: () => <Header title="Game Zone" /> }}
        />
        <Stack.Screen
          name="ReviewDetail"
          component={Detail}
          options={{ title: "ReviewDetail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default homeStack;
