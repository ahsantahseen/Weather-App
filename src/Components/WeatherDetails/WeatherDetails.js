import React from "react";
import "./WeatherDetails.css";

const WeatherDetails = (props) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dateObj = new Date();
  let day = days[dateObj.getDay()]; //retruns for exp:MONDAY
  let month = months[dateObj.getMonth()]; //retruns for exp:JULY
  let ProperDate = day + "," + dateObj.getDate() + "  " + month; //returns for exp: Friday,28 August
  return (
    <div>
      <div className="HighLight">
        <h1 className="City">{props.city}</h1>
        <h2 style={{ marginTop: "-17px", position: "relative" }}>
          {ProperDate}
        </h2>
        <p className="Temp">
          {props.Temperature}
          &#8457;
        </p>
      </div>
      <div className="Side-Details">
        <p className="heading">Wind Speed:</p>
        <p className="value">{props.windSpeed} Knots</p>
        <p className="heading">Clouds:</p>
        <p className="value">{props.clouds}</p>
        <p className="heading">Feels Like:</p>
        <p className="value">{props.FeelsLike}</p>
        <p className="heading">Humidity:</p>
        <p className="value">{props.Humidity}</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
