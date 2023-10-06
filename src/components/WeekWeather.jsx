import "./weekWeather.css";
import React, { useState, useEffect } from "react";
import cloudy from "../assets/clouds.png";
import thunder from "../assets/thunderbolt.png";
import sunny from "../assets/sun.png";
import snow from "../assets/snow.png";
import rain from "../assets/rainy-day.png";
import partlyCloudy from "../assets/partly-cloudy.png";
import WeatherMoreInfo from "./WeatherMoreInfo";

function WeekWeather(props) {
  const [Data, setData] = useState("Loading...");
  const [week, setWeek] = useState([]);
  const [day, setDay] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  function handelClick(index) {
    if (day === index + 1) {
      setModalVisible(false);
      setDay(null);
    } else {
      setDay(index + 1);
      setModalVisible(true);
    }
  }

  let tempUnit = "i";
  if (props.unit === "imperial") {
    tempUnit = "i";
  } else if (props.unit === "metric") {
    tempUnit = "m";
  }

  function icon(day) {
    if (day.weather.code <= 233) {
      return <img src={thunder} alt="" />;
    } else if (day.weather.code > 233 && day.weather.code <= 522) {
      return <img src={rain} alt="" />;
    } else if (day.weather.code > 523 && day.weather.code <= 623) {
      return <img src={snow} alt="" />;
    } else if (day.weather.code === 800) {
      return <img src={sunny} alt="" />;
    } else if (day.weather.code > 800 && day.weather.code <= 803) {
      return <img src={partlyCloudy} alt="" />;
    } else {
      return <img src={cloudy} alt="" />;
    }
  }

  async function getData(props, unit) {
    const res = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${props.city}&key=ab1e33b55fe14f68809528b8ffb929f7&units=${unit}`
    );
    const data = await res.json();
    await setData(data);
  }

  useEffect(() => {
    getData(props, tempUnit);
    setModalVisible(false);
  }, [props]);

  useEffect(() => {
    if (Data !== "Loading...") {
      const week = Data.data.slice(1, 8);
      // const week = [
      //   {
      //     datetime: "10-5-2023",
      //     temp: 70,
      //     high_temp: 80,
      //     low_temp: 60,
      //     weather: {
      //       code: 800,
      //     },
      //   },
      //   {
      //     datetime: "10-6-2023",
      //     temp: 70,
      //     high_temp: 80,
      //     low_temp: 60,
      //     weather: {
      //       code: 809,
      //     },
      //   },
      //   {
      //     datetime: "10-7-2023",
      //     temp: 70,
      //     high_temp: 80,
      //     low_temp: 60,
      //     weather: {
      //       code: 800,
      //     },
      //   },
      //   {
      //     datetime: "10-8-2023",
      //     temp: 70,
      //     high_temp: 80,
      //     low_temp: 60,
      //     weather: {
      //       code: 500,
      //     },
      //   },
      //   {
      //     datetime: "10-9-2023",
      //     temp: 70,
      //     high_temp: 80,
      //     low_temp: 60,
      //     weather: {
      //       code: 800,
      //     },
      //   },
      //   {
      //     datetime: "10-10-2023",
      //     temp: 70,
      //     high_temp: 80,
      //     low_temp: 60,
      //     weather: {
      //       code: 200,
      //     },
      //   },
      //   {
      //     datetime: "10-11-2023",
      //     temp: 70,
      //     high_temp: 80,
      //     low_temp: 60,
      //     weather: {
      //       code: 803,
      //     },
      //   },
      // ];
      setWeek(week);
    }
  }, [Data]);

  return (
    <div>
      <h2>7-day weather forecast</h2>
      {Data !== "Loading..." ? (
        <div
          className={`${
            props.styles ? props.styles + " " + "week-weather" : "week-weather"
          }`}
        >
          {week.map((day, index) => {
            const date = new Date(day.datetime);
            const daysOfWeek = [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ];
            const dayIndex = date.getDay();
            const dayOfWeek = daysOfWeek[dayIndex];
            return (
              <div
                key={index}
                className="card"
                onClick={() => handelClick(index + 1)}
              >
                <p className="day-name">{dayOfWeek}</p>
                <div className="info-body">
                  <p className="avg-temp"> {day.temp}&deg;</p>
                  {icon(day)}
                  <div className="temps">
                    <div className="high">{day.high_temp}&deg;</div>
                    <div className="low">{day.low_temp}&deg;</div>
                  </div>
                </div>
              </div>
            );
          })}
          {day ? (
            <WeatherMoreInfo
              data={Data}
              day={day}
              styles={props.styles}
              show={modalVisible}
            />
          ) : // <h1>place holder</h1>
          null}
        </div>
      ) : (
        Data
      )}
    </div>
  );
}
{
  /* <a
href="https://www.flaticon.com/free-icons/weather"
title="weather icons"
>
Weather icons created by fjstudio - Flaticon
</a> */
}
export default WeekWeather;
