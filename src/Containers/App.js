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
  const [FeelsLike, setFeelsLike] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=7c62ba2fb4efdda37f2a95565be8eb87"
      )
      .then((response) => {
        setTemperature(response.data.main.temp);

        setFeelsLike(response.data.main.feels_like);
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
  console.log(FeelsLike);
  return (
    <div className="App">
      <WeatherDetails
        Temperature={Temperature}
        FeelsLike={FeelsLike}
        country={country}
        clouds={clouds}
        city={city}
        windSpeed={wind.speed}
        coordinates={coordinates}
      ></WeatherDetails>
    </div>
  );
}

export default App;
