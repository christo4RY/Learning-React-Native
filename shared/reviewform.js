import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import { TextInput } from "react-native";
import { globleStyle } from "../styles/globleStyle";
import * as yup from "yup";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function reviewform({ setReviews, setModal }) {
  return (
    <Formik
      initialValues={{ title: "", body: "", rating: "" }}
      validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        setReviews((current) => {
          return [
            {
              title: values.title,
              body: values.body,
              rating: values.rating,
              key: Math.random().toString(),
            },
            ...current,
          ];
        });
        actions.resetForm();
        setModal(false);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        values,
        errors,
      }) => (
        <View>
          <TextInput
            style={globleStyle.input}
            onChangeText={handleChange("title")}
            placeholder="title"
            onBlur={handleBlur("title")}
            value={values.title}
          />
          <Text style={globleStyle.errorText}>
            {touched.title && errors.title}
          </Text>

          <TextInput
            style={globleStyle.input}
            multiline
            onChangeText={handleChange("body")}
            placeholder="body"
            onBlur={handleBlur("body")}
            value={values.body}
          />
          <Text style={globleStyle.errorText}>
            {touched.body && errors.body}
          </Text>

          <TextInput
            style={globleStyle.input}
            onChangeText={handleChange("rating")}
            placeholder="rating"
            onBlur={handleBlur("rating")}
            value={values.rating}
            keyboardType="numeric"
          />
          <Text style={globleStyle.errorText}>
            {touched.rating && errors.rating}
          </Text>

          <TouchableOpacity>
            <Text
              onPress={handleSubmit}
              style={{
                marginTop: 20,
                padding: 5,
                paddingHorizontal: 20,
                textAlign: "center",
                color: "white",
                fontFamily: "tiltneon-regular",
                backgroundColor: "orange",
                borderRadius: 10,
                fontSize: 20,
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({});
