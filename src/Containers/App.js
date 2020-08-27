import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [WeatherDATA, setWeatherDATA] = useState([]);
  const [Temperature, setTemperature] = useState([]);
  const [clouds, setclouds] = useState([]);
  const [country, setcountry] = useState([]);
  const [city, setcity] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=7c62ba2fb4efdda37f2a95565be8eb87"
      )
      .then((response) => {
        setWeatherDATA(response.data);
        setTemperature(response.data.main.temp);
        setclouds(response.data.weather[0].description);
        setcountry(response.data.sys.country);
        setcity(response.data.name);
      });
  }, []);

  console.log(WeatherDATA);
  console.log(Temperature);
  console.log(clouds);
  console.log(country);
  console.log(city);
  return (
    <div className="App">
      <h1>Weather App</h1>

      <p>Country:{WeatherDATA.country}</p>
      <p>City: {WeatherDATA.name}</p>
    </div>
  );
}

export default App;
