import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { WeatherContext } from "../../App";

export const WeatherReport = () => {
  return (
    <>
      <WeatherContext.Consumer>
        {(res) => {
          console.log("=> WeatherContext called", res);
          if (Object.keys(res).length > 0)
            return (
              <View style={styles.text_container}>
                <Text style={styles.header2}>{res.name}</Text>

                <Text style={styles.text_portion}>
                  Temp : {(res.main.temp - 273.15).toFixed(1)} °C
                  <Text style={{ color: "red" }}>
                    &nbsp; &nbsp; {(res.main.temp_max - 273.15).toFixed(1)} °C
                    &nbsp;
                  </Text>
                  <Text style={{ color: "cyan" }}>
                    &nbsp; &nbsp; {(res.main.temp_min - 273.15).toFixed(1)} °C
                    &nbsp;
                  </Text>
                </Text>
                <Text style={styles.text_portion}>
                  Humidity : {res.main.humidity} %
                </Text>
                <Text style={styles.text_portion}>
                  Pressure : {res.main.pressure} Pa
                </Text>
                <Text style={styles.text_portion}>
                  Sun rise : {Date(res.sys.sunrise)}
                </Text>
                <Text style={styles.text_portion}>
                  Sun set : {Date(res.sys.sunset)}
                </Text>
              </View>
            );
        }}
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
