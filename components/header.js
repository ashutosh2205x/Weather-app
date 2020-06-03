import React from "react";
import { StyleSheet, Text } from "react-native";

export const HeaderText = () => {
  return (
    <Text style={styles.header}>Weather App v. {Math.random().toFixed(5)}</Text>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 10,

    backgroundColor: "#6200ee",
    fontSize: 20,
    fontFamily: "sans-serif-light",
    width: "100%",
    height: 30,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 30,
  },
});
