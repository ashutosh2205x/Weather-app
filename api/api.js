import React from "react";
import { api_key } from "../key";

export async function Weather_API(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    );
    const res = await response.json();
    console.log(" => weather api called");
    return res;
  } catch (err) {
    console.log(err);
  }
}
