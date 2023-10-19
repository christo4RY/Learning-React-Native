import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";

export default function header({ title }) {
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.container}
    >
      <Image
        style={{ width: 30, height: 30 }}
        source={require("../assets/heart_logo.png")}
      />
      <Text style={styles.header}>{title}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  header: {
    fontSize: 20,
    paddingHorizontal: 10,
    fontFamily: "tiltneon-regular",
    fontWeight: "700",
  },
});
