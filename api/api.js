import { api_key } from "../key";

export function Weather_API(lat, lon) {
  console.log("in the api", lat, lon, api_key);
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=23.814418&lon=80.4009763&appid=${api_key}`
  ).then((response) => response.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
