import React from "react";

async function apiFetch(city, unit) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e81dc07b38e7e642813678542d7a453&units=${unit}`
  );
  const data = await response.json();
  return data;
}

export default apiFetch;
