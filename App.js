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
const { height, width } = Dimensions.get("window");
import { WeatherContext, TEMP_CONTEXT } from "./api/apiContext";
import { Footer } from "./components/footer";
import { Snowflake } from "./static_utils/video";

export default function App() {
  const [WEATHER_STATE, SET_WEATHER_STATE] = useState({});
  const value = { WEATHER_STATE, SET_WEATHER_STATE };
  const [TEMP, SET_TEMP] = useState(0);
  const TEMP_VAL = { TEMP, SET_TEMP };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        Weather_API(pos.coords.latitude, pos.coords.longitude).then((data) => {
          return SET_WEATHER_STATE(data), SET_TEMP(data.main.feels_like), console.log(TEMP_VAL);
        });
      },
      (error) => console.log("error message=>", error.message),
      { enableHighAccuracy: true }
    );
  }, []);
  return (
    <>
      <View style={styles.app}>
        <TEMP_CONTEXT.Provider value={TEMP_VAL}>
          <Snowflake />
        </TEMP_CONTEXT.Provider>
        <View style={styles.header_container}>
          <HeaderText />
        </View>
        <View style={styles.body_container}>
          <WeatherContext.Provider value={value}>
            <GooglePlacesComponent />
            <WeatherReport />
          </WeatherContext.Provider>
          
        </View>
        <View style={styles.footer}>
            <Footer />
          </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    maxHeight: "90%",
    width: `100%`,
  },
  header_container: {
    paddingTop: 35,
    alignItems: "center",
    width: "100%",
  },
  body_container: {
    // backgroundColor: "#3700b3",
    alignItems: "center",
    width: "100%",
    height: "99%",
    paddingLeft: 20,
    // paddingTop: 40,
    // marginTop: 40,
    paddingRight: 20,
  },
  google_container: {
    width: "100%",
    paddingBottom: 100,
  },
  footer: {
    width: width,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    textAlign: "center",
  },
});
