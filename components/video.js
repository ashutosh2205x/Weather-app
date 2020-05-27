import {
    Text,
    View,
    StyleSheet,
    Dimensions,
  } from "react-native";
  import React, { useState } from "react";
  import { Video } from "expo-av";
  
  const { width, height } = Dimensions.get("window");
  
  export const Snowflake = () => {
    return (
      <View>
   <Video
        source={require("../assets/snowflakes.mp4")}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.backgroundVideo}
      />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    backgroundVideo: {
      height: height,
      position: "absolute",
      top: 0,
      left: 0,
      alignItems: "stretch",
      bottom: 0,
      right: 0,
    },
  });
  