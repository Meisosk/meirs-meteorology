import React, { useEffect, useState } from "react";

function WeatherBody(props) {
  const [Data, setData] = useState("Loading...");

  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [props.data]);
  return (
    <div className="main">
      <div className="city-weather-container">
        <div className="location-temp">
          <p className="big-text">{Data !== "Loading..." ? Data.name : Data}</p>
          <p>
            <span className="big-text">
              {Data !== "Loading..." ? Data.main.temp : Data}&deg;
            </span>
            {Data !== "Loading..." ? Data.weather[0].description : Data}
          </p>
        </div>
        <div className="location-info">
          <p>Sun 63-70</p>
          <p>Air quality: 20 - Good</p>
        </div>
      </div>
      <h2>7-day weather forecast</h2>
      <div className="week-weather">
        <div className="card">
          <p>Sunday</p>
          <div className="info-body"></div>
        </div>
        <div className="card">
          <p>Monday</p>
          <div className="info-body"></div>
        </div>
        <div className="card">
          <p>Tuesday</p>
          <div className="info-body"></div>
        </div>
        <div className="card">
          <p>Wednesday</p>
          <div className="info-body"></div>
        </div>
        <div className="card">
          <p>Thursday</p>
          <div className="info-body"></div>
        </div>
        <div className="card">
          <p>Friday</p>
          <div className="info-body"></div>
        </div>
        <div className="card">
          <p>Saturday</p>
          <div className="info-body"></div>
        </div>
      </div>
    </div>
  );
}

export default WeatherBody;
