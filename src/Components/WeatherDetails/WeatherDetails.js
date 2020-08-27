import React from "react";
import "./WeatherDetails.css";

const WeatherDetails = (props) => {
  return (
    <div>
      <div className="HighLight">
        <h1>{props.city}</h1>
        <p>
          <b>
            {props.Temperature}
            &#8457;
          </b>
        </p>
        <h2>{props.clouds}</h2>
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
