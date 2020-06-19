import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import React, { useState, useContext } from "react";
import { LocationResultItem } from "./Location-item-results/LocationResult";
import { GOOGLE_API_KEY } from "../../key";
import { Weather_API } from "../../api/api";
import { WeatherContext } from "../../api/apiContext";

const GooglePlacesComponent = () => {
  const { WEATHER_STATE, SET_WEATHER_STATE } = useContext(WeatherContext);

  return (
    <GooglePlacesAutocomplete
      placeholder={'Search'}
      minLength={3}
      debounce={500}
      autoFocus={false}
      returnKeyType={"default"}
      fetchDetails={true}
      styles={{
        textInputContainer: {
          backgroundColor: "rgba(0,0,0,0)",
          borderTopWidth: 0,
          borderBottomWidth: 0,
          height : 50,
          width: "100%",
        },
        textInput: {
          borderBottomColor: "black",
          borderWidth: 1,
          marginLeft: 0,
          marginRight: 0,
          borderRadius: 20,
          height: "100%",
          color: "#5d5d5d",
          fontSize: 16,
        },
        description: {
          color: 'white',
          zIndex: 10,
          height : 50
        },
      }}
      enablePoweredByContainer={false}
      onPress={(data, details = null) => {
        // console.log("googlemaps=>", details.geometry.location);
        let lat = details.geometry.location.lat;
        let lon = details.geometry.location.lng;
        return Weather_API(lat, lon).then((res) => {
          SET_WEATHER_STATE(res);
        });
      }}
       query={{
        key: GOOGLE_API_KEY,
        language: "en",
      }}
    />
  );
};

export default GooglePlacesComponent;

const styles = StyleSheet.create({
  google: {
    color: "white",
    fontSize: 50,
    width: "80%",
    height: "auto",
    backgroundColor: "white",
  },
});
