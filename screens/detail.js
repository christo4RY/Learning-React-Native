import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { globleStyle, images } from "../styles/globleStyle";
import Card from "../shared/card";
export default function detail({ route }) {
  const { title, body, rating } = route.params;
  return (
    <Card>
      <View>
        <Text style={globleStyle.titleHeader}>{title}</Text>
        <Text style={globleStyle.titleHeader}>{body}</Text>
        <View style={styles.container}>
          <Text>Game Zone Rating - </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
});
