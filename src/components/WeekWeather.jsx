import React from "react";
import "./weekWeather.css";

function WeekWeather() {
  // function WeatherBody(props) {
  //   const [Data, setData] = useState("Loading...");

  //   async function getData(props) {
  //     const data = await apiFetch(props.city, props.unit);
  //     setData(data);
  //   }

  //   useEffect(() => {
  //     getData(props);
  //   }, [props]);

  return (
    <div>
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

export default WeekWeather;
