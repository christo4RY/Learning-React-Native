import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function card({ children }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    borderStyle: "dotted",
  },
});
