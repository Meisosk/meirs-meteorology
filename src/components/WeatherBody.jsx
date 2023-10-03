import React, { useEffect, useState } from "react";
import apiFetch from "./apiFetch";
import storm from "../assets/storm.jpg";
import sunny from "../assets/sunny.jpg";
import WeekWeather from "./WeekWeather";

function WeatherBody(props) {
  const [Data, setData] = useState("Loading...");
  const [weatherDec, setWeatherDec] = useState("Clear");

  const weatherBackgrounds = {
    Clear: sunny,
    Rain: "rainy.jpg",
    Clouds: storm,
    Snow: "snowy.jpg",
  };

  async function getData(props) {
    const data = await apiFetch(props.city, props.unit);
    setData(data);
  }

  useEffect(() => {
    getData(props);
  }, [props]);

  useEffect(() => {
    if (Data !== "Loading...") {
      const weatherCondition = Data.weather[0].main;
      setWeatherDec(weatherCondition);
    }
  }, [Data]);

  useEffect(() => {
    updateBackgroundBasedOnWeather(weatherDec);
  }, [weatherDec]);

  async function updateBackgroundBasedOnWeather(desc) {
    const body = document.body;

    if (weatherBackgrounds.hasOwnProperty(desc)) {
      const backgroundImage = `url(${weatherBackgrounds[desc]})`;
      body.style.backgroundImage = backgroundImage;
    } else {
      body.style.backgroundImage = `url(${storm})`;
    }
  }

  return (
    <>
      <div className="main">
        <div
          className={`${
            Data.weather && Data.weather[0].main
              ? Data.weather[0].main +
                "-current" +
                " " +
                "city-weather-container"
              : "city-weather-container"
          }`}
        >
          <div className="location-temp">
            <p className="big-text">
              {Data !== "Loading..." ? Data.name : Data}
            </p>
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
      <WeekWeather unit={props.unit} city={props.city} styles={weatherDec} />
    </>
  );
}

export default WeatherBody;
