import React, { useEffect, useState } from "react";
import apiFetch from "./apiFetch";

function WeatherBody(props) {
  const [Data, setData] = useState("Loading...");

  async function getData(props) {
    const data = await apiFetch(props.city, props.unit);
    setData(data);
  }

  useEffect(() => {
    getData(props);
  }, [props]);

  return (
    <div className="main">
      <div className="city-weather-container">
        <div className="location-temp">
          <p className="big-text">{Data !== "Loading..." ? Data.name : Data}</p>
          <p>
            <span className="big-text">
              {Data !== "Loading..." ? Data.main.temp : Data}&deg;
            </span>
            {Data !== "Loading..." ? " " + Data.weather[0].description : Data}
          </p>
        </div>
        <div className="location-info">
          <p>
            {Data !== "Loading..."
              ? "Todays high and low: " +
                Data.main.temp_min +
                " - " +
                Data.main.temp_max
              : Data}
          </p>
          <p>
            {Data !== "Loading..."
              ? "Feels like: " + Data.main.feels_like
              : Data}
            &deg;
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherBody;
