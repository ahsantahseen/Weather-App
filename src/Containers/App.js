import React, { useEffect, useState } from "react";
import withErrorHandler from "../hoc/withErrorHandler/withErrorHandler";
import axios from "axios";
import WeatherDetails from "../Components/WeatherDetails/WeatherDetails";

function App() {
  const [Temperature, setTemperature] = useState([]);
  const [clouds, setclouds] = useState([]);
  const [city, setcity] = useState([]);
  const [wind, setwind] = useState([]);
  const [FeelsLike, setFeelsLike] = useState([]);

  const [Humidity, setHumidity] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=7c62ba2fb4efdda37f2a95565be8eb87"
      )
      .then((response) => {
        setTemperature(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setFeelsLike(response.data.main.feels_like);
        setclouds(response.data.weather[0].description);
        setcity(response.data.name);
        setwind(response.data.wind);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <WeatherDetails
        Temperature={Temperature}
        FeelsLike={FeelsLike}
        clouds={clouds}
        city={city}
        windSpeed={wind.speed}
        Humidity={Humidity}
      ></WeatherDetails>
    </div>
  );
}

export default withErrorHandler(App, axios);
