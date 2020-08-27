import React from "react";

const WeatherDetails = (props) => {
  return (
    <div>
      <h1>{props.city}</h1>
      <p>
        <b>
          {props.Temperature}
          &#8457;
        </b>
      </p>
      <h2>{props.clouds}</h2>
    </div>
  );
};

export default WeatherDetails;
