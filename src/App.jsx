import "./App.css";
import UnitSwitch from "./components/UnitSwitch";
import WeatherBody from "./components/WeatherBody";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=9e81dc07b38e7e642813678542d7a453&units=imperial`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const apiData = await response.json();
        setData(apiData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <UnitSwitch />
      <WeatherBody data={data} />
    </>
  );
}

export default App;
