import React from "react";
import "./WeatherDetails.css";

const WeatherDetails = (props) => {
  return (
    <div>
      <div className="HighLight">
        <h1 className="City">{props.city}</h1>
        <h2 style={{ marginTop: "-17px", position: "relative" }}>
          {props.clouds}
        </h2>
        <p className="Temp">
          {props.Temperature}
          &#8457;
        </p>
      </div>
      <div className="Side-Details">
        <p className="heading">Wind Speed:</p>
        <p className="value">{props.windSpeed} Knots</p>
        <p className="heading">Wind Speed:</p>
        <p className="value">{props.windSpeed} Knots</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
