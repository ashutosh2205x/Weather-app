import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { WeatherContext } from "../../api/api";

export const WeatherReport = () => {
  console.log(data);
  return (
    <>
      <WeatherContext.Consumer>
        {({ res }) => (
          console.log("context=>", res),
          (
            <View style={styles.text_container}>
              <Text style={styles.header2}>fullReport.name</Text>

              <Text style={styles.text_portion}>
                Temp : °C
                <Text style={{ color: "red" }}>&nbsp; &nbsp; °C &nbsp;</Text>
                <Text style={{ color: "cyan" }}>&nbsp; &nbsp; °C &nbsp;</Text>
              </Text>
              <Text style={styles.text_portion}>Humidity : %</Text>
              <Text style={styles.text_portion}>Pressure : Pa</Text>
              <Text style={styles.text_portion}>Sun rise :</Text>
              <Text style={styles.text_portion}>Sun set :</Text>
            </View>
          )
        )}
      </WeatherContext.Consumer>
    </>
  );
};

const styles = StyleSheet.create({
  text_container: {
    flexDirection: "column",
    width: "90%",
    height: "50%",
  },
  header2: {
    fontSize: 40,
    fontWeight: "700",
    fontFamily: "sans-serif-condensed",
    color: "white",
  },
  text_portion: {
    color: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 20,
    marginTop: 20,
  },
});
