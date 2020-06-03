import { View, Text, StyleSheet } from "react-native";
import React from "react";
export const Footer = () => {
  return (
    <>
      <Text style={styles.footer}>Footer text</Text>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    color: 'white',
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
});
