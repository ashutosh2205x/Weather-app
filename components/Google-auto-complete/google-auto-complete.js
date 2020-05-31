import { GoogleAutoComplete } from "react-native-google-autocomplete";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import { LocationResultItem } from "./Location-item-results/LocationResult";
import { GOOGLE_API_KEY } from "../../key";
export default function GooglePlacesComponent() {
  const [Textbox, SET_TEXT_BOX] = useState("");
  let textInput = "";
  return (
    <>
      <View style={styles.google}>
        <GoogleAutoComplete
          apiKey={GOOGLE_API_KEY}
          debounce={500}
          minLength={4}
        >
          {({ handleTextChange, locationResults, fetchDetails }) => (
            <React.Fragment>
              {console.log("results=>", locationResults)}
              <View>
                <TextInput
                  placeholder="Search a place"
                  onChangeText={handleTextChange}
                />
                {/* <Button
                  title="X"
                  onPress={function () {
                    textInput='';
                  }}
                /> */}
              </View>
              <ScrollView>
                {locationResults.map((res) => (
                  <LocationResultItem
                    {...res}
                    key={res.place_id}
                    fetchDetails={fetchDetails}
                  />
                ))}
              </ScrollView>
            </React.Fragment>
          )}
        </GoogleAutoComplete>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  google: {
    color: "white",
    fontSize: 50,
    width: "80%",
    height: "auto",
    backgroundColor: "white",
  },
});
