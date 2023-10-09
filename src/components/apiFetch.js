async function apiFetch(city, unit) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_DAY_API_KEY
    }&units=${unit}`
  );
  const data = await response.json();
  return data;
}

export default apiFetch;
