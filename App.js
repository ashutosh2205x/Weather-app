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
import { Footer } from "./components/footer";
import { Snowflake } from "./static_utils/video";
export default function App() {
  const [WEATHER_STATE, SET_WEATHER_STATE] = useState({});
  const value = { WEATHER_STATE, SET_WEATHER_STATE };
  const [BCKGRND_THEME, SET_BCKGRND_THEME] = useState("");
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
      <View style={styles.app}>
      <Snowflake />
        <View style={styles.header_container}>
          <HeaderText />
        </View>
        <View style={styles.body_container}>
          <WeatherContext.Provider value={value}>
            {/* <View style={styles.google_container}> */}
              <GooglePlacesComponent />
            {/* </View> */}
            <WeatherReport />
          </WeatherContext.Provider>
          <View style={styles.footer}>
            <Footer />
          </View>
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
    width: "110%",
    position: "absolute",
    bottom: 0,
    height: 50,
    bottom: 0,
    backgroundColor: "black",
    textAlign: "center",
  },
});
