import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { WeatherContext } from "../../api/apiContext";

export const WeatherReport = () => {
  return (
    <>
      <WeatherContext.Consumer>
        {(data) => {
          console.log(
            "WeatherReport data=>",
            Object.keys(data.WEATHER_STATE).length
          );
          let res = data.WEATHER_STATE;
          if (Object.keys(res).length === 0)
            return (
              <>
                <View style={styles.text_container}>
                  <Text style={styles.header2}>Loading...</Text>
                </View>
              </>
            );
          else
            return (
              console.log("res=>", res),
              (
                <View style={styles.text_container}>
                  <Text style={styles.header2}>{res.name}</Text>

                  <Text style={styles.text_portion}>
                    <Text style={styles.title}>Temp :</Text>{" "}
                    {(res.main.feels_like - 273.15).toFixed(1)-2} °C
                    <Text style={{ color: "red" }}>
                      &nbsp; &nbsp; {(res.main.temp_max - 273.15).toFixed(1)-1} °C
                      &nbsp;
                    </Text>
                    {/* <Text style={{ color: "cyan" }}>
                      &nbsp; &nbsp; {(res.main.temp_min - 273.15).toFixed(1)} °C
                      &nbsp;
                    </Text> */}
                  </Text>
                  <Text style={styles.text_portion}>
                    <Text style={styles.title}> Humidity : </Text>{" "}
                    {res.main.humidity} %
                  </Text>
                  <Text style={styles.text_portion}>
                    <Text style={styles.title}>Pressure :</Text>{" "}
                    {res.main.pressure} Pa
                  </Text>
                  <Text style={styles.text_portion}>
                    <Text style={styles.title}> Sun rise : </Text>{" "}
                    {new Date(res.sys.sunrise).toLocaleTimeString('en-US') } A.M.
                  </Text>
                  <Text style={styles.text_portion}>
                    <Text style={styles.title}> Sun set :</Text>{" "}
                    {Date(res.sys.sunset)}
                  </Text>
                </View>
              )
            );
        }}
      </WeatherContext.Consumer>
    </>
  );
};

const styles = StyleSheet.create({
  text_container: {
    backgroundColor: "#fbfbf8",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 1,
    zIndex: 2,
    position: "relative",
    marginTop: 50,
    borderBottomColor: "black",
    borderWidth: 0.2,
    flexDirection: "column",
    width: "100%",
    borderRadius: 20,
    padding: 10,
    height: "auto",
  },
  header2: {
    fontSize: 40,
    fontWeight: "700",
    fontFamily: "sans-serif-condensed",
    color: "black",
  },
  text_portion: {
    color: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 20,
    marginTop: 20,
  },
  title: {
    color: "grey",
    fontWeight: "700",
  },
});
