import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherDetails from "../Components/WeatherDetails/WeatherDetails";

function App() {
  const [Temperature, setTemperature] = useState([]);
  const [clouds, setclouds] = useState([]);
  const [country, setcountry] = useState([]);
  const [city, setcity] = useState([]);
  const [wind, setwind] = useState([]);
  const [coordinates, setcoordinates] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=7c62ba2fb4efdda37f2a95565be8eb87"
      )
      .then((response) => {
        setTemperature(response.data.main.temp);
        setclouds(response.data.weather[0].main);
        setcountry(response.data.sys.country);
        setcity(response.data.name);
        setwind(response.data.wind);
        setcoordinates(response.data.coord);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(Temperature);
  console.log(clouds);
  console.log(country);
  console.log(city);
  console.log(wind.speed);
  console.log(coordinates);
  return (
    <div className="App">
      <WeatherDetails
        Temperature={Temperature}
        country={country}
        city={city}
        windSpeed={wind.speed}
      ></WeatherDetails>
    </div>
  );
}

export default App;
