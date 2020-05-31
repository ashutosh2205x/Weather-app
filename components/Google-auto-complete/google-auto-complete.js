import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
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
import {Weather_API} from '../../api/api'

const GooglePlacesComponent = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Enter location"
      minLength={3}
      debounce={200}
      autoFocus={false}
      returnKeyType={"search"}
      fetchDetails={true}
      styles={{
        textInputContainer: {
          backgroundColor: "rgba(0,0,0,0)",
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
        textInput: {
          marginLeft: 0,
          marginRight: 0,
          height: 38,
          color: "#5d5d5d",
          fontSize: 16,
        },
      }}
      enablePoweredByContainer={false}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log("googlemaps=>",  details.geometry.location);
        let lat = details.geometry.location.lat;
        let lon = details.geometry.location.lng;
        return Weather_API(lat, lon); 

        
      }}
      GooglePlacesDetailsQuery={{
        fields: "formatted_address"
      }}
      query={{
        key: GOOGLE_API_KEY,
        language: "en",
        types: "(establishment)",
      }}
      currentLocation={true}
      currentLocationLabel="Get my location"
    />
  );
};

export default GooglePlacesComponent;
// export default function GooglePlacesComponent() {
//   const [Textbox, SET_TEXT_BOX] = useState("");
//   let textInput ='';
//   return (
//     <>
//       <View style={styles.google}>
//         <GoogleAutoComplete
//           apiKey="AIzaSyBZQpfjvJAaq5SpxHQ2jSiyE8itNmZ9DMg"
//           debounce={500}
//           minLength={4}
//         >
//           {({ handleTextChange, locationResults, fetchDetails }) => (
//             <React.Fragment>
//               {console.log("results=>", locationResults)}
//               <View>
//                 <TextInput
//                   placeholder="Search a place"
//                   onChangeText={handleTextChange}
//                 />
//                 {/* <Button
//                   title="X"
//                   onPress={function () {
//                     textInput='';
//                   }}
//                 /> */}
//               </View>
//               <ScrollView>
//                 {locationResults.map((res) => (
//                   <LocationResultItem
//                     {...res}
//                     key={res.place_id}
//                     fetchDetails={fetchDetails}
//                   />
//                 ))}
//               </ScrollView>
//             </React.Fragment>
//           )}
//         </GoogleAutoComplete>
//       </View>
//     </>
//   );
// }

const styles = StyleSheet.create({
  google: {
    color: "white",
    fontSize: 50,
    width: "80%",
    height: "auto",
    backgroundColor: "white",
  },
});
