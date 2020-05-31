import React from "react";
import { api_key } from "../key";
import { WeatherReport } from "../components/weather-report/weather-report";

export const WeatherContext = React.createContext({});

export function Weather_API(lat, lon) {
  let lat1 = "21.3890824";
  let lon1 = "39.8579118";
  console.log("in the api", lat, lon, api_key);
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
  )
    .then((response) => response.json())
    .then((res) => {
      console.log("weather api =>", res);
      return (
        <>
        <WeatherContext.Provider value={res}>
          <WeatherReport />
        </WeatherContext.Provider>
        </>
      );
    })
    .catch((err) => {
      console.log(err);
    });
}
