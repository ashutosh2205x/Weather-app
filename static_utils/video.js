import { View, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import { Video } from "expo-av";
import { TEMP_CONTEXT } from "../api/apiContext";

const { width, height } = Dimensions.get("window");

async function BG_DECIDER(TEMP_CELSIUS, SRC) {
  switch (TEMP_CELSIUS) {
    case TEMP_CELSIUS > 30:
      SRC = "../assets/sunny.gif";
      break;
    case TEMP_CELSIUS < 25:
      SRC = "../assets/snow.gif";
      break;
    default:
      break;
  }
  return  console.log(SRC);
}
export const Snowflake = () => {
  let TEMP_CELSIUS = 0,
    SRC = "../assets/snow.gif";
  return (
    <TEMP_CONTEXT.Consumer>
      {(data) => {
        TEMP_CELSIUS = (data.TEMP - 273.15).toFixed(2);
        console.log("video js=>", TEMP_CELSIUS);
        BG_DECIDER(TEMP_CELSIUS, SRC);
        return (
          <View style={styles.backgroundVideo}>
          {/* <Image source={require(SRC)} style={styles.backgroundVideo} /> */}
          </View>
        );
      }}
    </TEMP_CONTEXT.Consumer>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    position: "absolute",
    backgroundColor : '#774cd8',
    top: 0,
    left: 0,
    alignItems: "baseline",
    bottom: 0,
    right: 0,
  },
});
