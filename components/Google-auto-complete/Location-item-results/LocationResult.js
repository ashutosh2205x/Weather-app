import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Weather_API } from "../../../api/api";

export const LocationResultItem = (props) => {
  // console.log('locations', props)
  async function _handle_Touch() {
    const res = await props.fetchDetails(props.place_id);
    const lat = res.geometry.location.lat;
    const lon = res.geometry.location.lng;
    // console.log("location props", lat, lon);
    return Weather_API(lat, lon);
  }
  return (
    <TouchableOpacity style={styles.root} onPress={_handle_Touch}>
      <Text>{props.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "auto",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    marginBottom: 10,
  },
});
