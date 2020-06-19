import React, { useState, useEffect, createContext } from "react";

export const WeatherContext = React.createContext({
  WEATHER_STATE: {},
  SET_WEATHER_STATE: () => {},
});

export const TEMP_CONTEXT = React.createContext({
  TEMP: 0,
  SET_TEMP: () => {},
});
