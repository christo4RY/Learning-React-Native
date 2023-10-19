import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./screens/home";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import HomeStack from "./routes/homeStack";
export default function App() {
  const [fontsLoaded] = useFonts({
    "tiltneon-regular": require("./assets/fonts/TiltNeon-Regular.ttf"),
  });

  if (fontsLoaded) {
    return <HomeStack />;
  }
}

const styles = StyleSheet.create({});
