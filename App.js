import React, { useState } from "react";
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

const { width, height } = Dimensions.get("window");

export default function App() {
  const [UIText, setText] = useState("");
  const [fullReport, setFullReport] = useState({});
  const [LOCATION, SET_LOCATION] = useState([]);
  const [error, setErrorBool] = useState(false);
  const [BCKGRND_THEME, SET_BCKGRND_THEME] = useState("");
  const api_key = "cb066f839e43094a1e31a972d44c88c6";
  function setTextFunc(text) {
    return setText(text);
  }

  function consoleFunc() {
    console.log(UIText);
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${UIText},in&appid=${api_key}`
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        if (json.cod === "404") {
          console.log(json);
          return setErrorBool(true);
        } else {
          setFullReport(json);
          setErrorBool(false);
          console.log(fullReport);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getmyLocation() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        SET_LOCATION(pos.coords);
        console.log("promise==>", pos.coords);
        console.log("LOCATION==>", LOCATION);
      },
      { enableHighAccuracy: true }
    );
  }
  return (
    <View style={styles.container}>
      <Video
        source={require("./assets/snowflakes.mp4")}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.backgroundVideo}
      />
      <HeaderText />
      <View style={styles.inputcontainer}>
        <GooglePlacesComponent />
     
        {/* <Button title="Search" onPress={consoleFunc} /> */}
        <View>
        <Button title="Find me" onPress={getmyLocation} />
        </View>
      </View>

      {/* {!error && Object.keys(fullReport).length > 0 ? (
        <View style={styles.text_container}>
          <Text style={styles.header2}>{fullReport.name}</Text>

          <Text style={styles.text_portion}>
            Temp : {(fullReport.main.feels_like - 273.15).toFixed(1)} °C
            <Text style={{ color: "red" }}>
              &nbsp; &nbsp; {(fullReport.main.temp_max - 273.15).toFixed(1)} °C
              &nbsp;
            </Text>
            <Text style={{ color: "cyan" }}>
              &nbsp; &nbsp; {(fullReport.main.temp_min - 273.15).toFixed(1)} °C
              &nbsp;
            </Text>
          </Text>
          <Text style={styles.text_portion}>
            Humidity : {fullReport.main.humidity} %
          </Text>
          <Text style={styles.text_portion}>
            Pressure : {(fullReport.main.pressure * 0.01).toFixed(2)} Pa
          </Text>
          <Text style={styles.text_portion}>
            Sun rise : {Date(fullReport.sys.sunrise)}
          </Text>
          <Text style={styles.text_portion}>
            Sun set : {Date(fullReport.sys.sunset)}
          </Text>
        </View>
      ) : (
        <Text style={styles.error}> Not found {UIText}!</Text>
      )} */}
      <WeatherReport/>
    </View>
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
    flexDirection: "row",
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
