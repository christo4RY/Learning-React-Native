import {
  Modal,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { globleStyle } from "../styles/globleStyle";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/card";
import ReviewForm from "../shared/reviewform";
const home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  const goDetail = () => {
    navigation.navigate("Detail");
  };
  const [openModal, setModal] = useState(false);
  return (
    <View style={globleStyle.container}>
      <Modal visible={openModal} animationType="slide">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{ padding: 30 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 30, fontFamily: "tiltneon-regular" }}>
                New Review
              </Text>
              <MaterialIcons
                name="close"
                size={35}
                color="red"
                onPress={() => setModal(false)}
              />
            </View>
            <ReviewForm setReviews={setReviews} setModal={setModal} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 30,
        }}
      >
        <MaterialIcons
          name="add"
          size={30}
          style={styles.addButton}
          onPress={() => setModal(true)}
        />
      </View>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <Card>
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewDetail", item)}
            >
              <Text style={globleStyle.titleHeader}>{item.title}</Text>
            </TouchableOpacity>
          </Card>
        )}
      />
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "orange",
    width: "auto",
    borderRadius: 50,
    color: "white",
  },
});
