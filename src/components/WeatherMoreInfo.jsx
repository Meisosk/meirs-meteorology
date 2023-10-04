import React from "react";
import { useState, useEffect } from "react";

function WeatherMoreInfo(props) {
  const [Data, setData] = useState("Loading...");
  const [day, setDay] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const timeString = `${padZero(hours)}:${padZero(minutes)}`;
    return timeString;
  }

  function padZero(num) {
    return num.toString().padStart(2, "0");
  }

  function handleClick() {
    setModalVisible(false);
  }

  useEffect(() => {
    setData(props.data.data);
    setDay(props.day);
    setModalVisible(props.show);
  }, [props]);

  return (
    <>
      {Data !== "Loading..." ? (
        modalVisible ? (
          <div
            className={`${
              props.styles ? props.styles + "-modal" + " " + "modal" : "modal"
            }`}
            onClick={handleClick}
          >
            <div>
              <div className="row">
                <div className="pair">
                  <p className="title"> Visibility: </p>
                  <p className="data">{Data[day].vis}</p>
                </div>
                <div className="pair">
                  <p className="title"> Precipitation: </p>
                  <p className="data"> {Data[day].precip}</p>
                </div>
                <div className="pair">
                  <p className="title"> UV index:</p>
                  <p className="data">{Data[day].uv}</p>
                </div>
              </div>
              <div className="row">
                <div className="pair">
                  <p className="title"> Wind:</p>
                  <p className="data"> {Data[day].wind_spd} m/s</p>
                </div>
                <div className="pair">
                  <p className="title"> Humidity: </p>
                  <p className="data"> {Data[day].rh}%</p>
                </div>
                <div className="pair">
                  <p className="title"> Sun: </p>
                  <p className="data">
                    Rise: {formatTime(Data[day].sunrise_ts)} AM
                  </p>
                  <p className="data">
                    Set: {formatTime(Data[day].sunset_ts)} PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null
      ) : (
        Data
      )}
    </>
  );
}

export default WeatherMoreInfo;
