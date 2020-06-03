import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Dimensions,
} from "react-native";
import { HeaderText } from "./components/header";
import { Video } from "expo-av";
import GooglePlacesComponent from "./components/Google-auto-complete/google-auto-complete";
import { WeatherReport } from "./components/weather-report/weather-report";
import { Weather_API } from "./api/api";
const { height } = Dimensions.get("window");
import { WeatherContext } from "./api/apiContext";

export default function App() {
  const [WEATHER_STATE, SET_WEATHER_STATE] = useState({});
  const value = { WEATHER_STATE, SET_WEATHER_STATE };
  const [BCKGRND_THEME, SET_BCKGRND_THEME] = useState("");
  // const { WEATHER_STATE, SET_WEATHER_STATE } = useContext(WeatherContext);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(
          "geo location ==>",
          pos.coords.latitude,
          pos.coords.longitude
        );
        Weather_API(pos.coords.latitude, pos.coords.longitude).then((data) => {
          return SET_WEATHER_STATE(data);
        });
      },
      (error) => console.log("error message=>", error.message),
      { enableHighAccuracy: true }
    );
  }, []);
  return (
    <>
      {console.log("app context=>", Object.keys(value.WEATHER_STATE).length)}
      <View style={styles.container}>
        <HeaderText />
        <View style={styles.inputcontainer}>
          <WeatherContext.Provider value={value}>
            <GooglePlacesComponent />
            <WeatherReport />
          </WeatherContext.Provider>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    backgroundColor: "teal",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  outline: {
    borderBottomColor: "black",
    borderWidth: 1,
    width: "100%",
    height: "100%",
  },
  header: {
    backgroundColor: "#fff",
    fontSize: 20,
    fontFamily: "sans-serif-light",
    width: "100%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 30,
  },
  inputcontainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
    padding: 20,
  },
  input: {
    backgroundColor: "white",
    width: "80%",
  },

  text_container: {
    flexDirection: "column",
    width: "90%",
    height: "50%",
  },

  text_portion: {
    color: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 20,
    marginTop: 20,
  },

  header2: {
    fontSize: 40,
    fontWeight: "700",
    fontFamily: "sans-serif-condensed",
    color: "white",
  },

  error: {
    backgroundColor: "black",
    borderWidth: 1,
    width: "80%",
    textAlign: "center",
    padding: 10,
    color: "red",
    borderRadius: 10,
  },

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
