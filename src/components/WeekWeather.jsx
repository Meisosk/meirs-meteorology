import "./weekWeather.css";
import React, { useState, useEffect } from "react";

function WeekWeather(props) {
  const [Data, setData] = useState("Loading...");

  async function getData() {
    const res = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${props.city}&key=ab1e33b55fe14f68809528b8ffb929f7&units=i`
    );
    const data = await res.json();
    await setData(data);
  }

  useEffect(() => {
    getData();
    console.log(Data);
  }, []);

  return (
    <div>
      <h2>7-day weather forecast</h2>
      <div
        className={`${
          props.styles ? props.styles + " " + "week-weather" : "week-weather"
        }`}
      >
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

export default WeekWeather;
