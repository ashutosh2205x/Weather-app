import React, { useState, useEffect, createContext } from "react";

export const WeatherContext = React.createContext({
    WEATHER_STATE: {},
    SET_WEATHER_STATE: () => {},
  });