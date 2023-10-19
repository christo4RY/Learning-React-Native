import { StyleSheet } from "react-native";

export const globleStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  titleHeader: {
    fontSize: 20,
    fontFamily: "tiltneon-regular",
  },
  input: {
    // padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
    borderBottomColor: "blue",
    marginVertical: 15,
  },
  errorText: {
    color: "red",
  },
});

export const images = {
  ratings: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  },
};
