import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [WeatherDATA, setWeatherDATA] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=7c62ba2fb4efdda37f2a95565be8eb87"
      )
      .then((response) => {
        console.log(response.data);
        setWeatherDATA(response.data);
      });
  }, []);
  return (
    <div className="App">
      <h1>Weather App</h1>
      <p>City: {WeatherDATA.name}</p>
    </div>
  );
}

export default App;
