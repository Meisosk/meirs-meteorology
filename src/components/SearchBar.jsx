import { useState, useEffect } from "react";
import WeatherBody from "./WeatherBody";
import cities from "../data/cityList";

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  const [Cities, setCities] = useState([]);
  const [chosenCity, setChosenCity] = useState(props.city || "new york");

  useEffect(() => {
    setChosenCity(props.city);
  }, [props.city]);

  useEffect(() => {
    setCities(cities);
  }, []);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    const filteredCitites = cities.filter((city) =>
      city.toLowerCase().includes(inputValue.toLowerCase())
    );

    setCities(filteredCitites);
  };

  const handleSubmit = async () => {
    if (input !== "") {
      setChosenCity(input);
      setInput("");
    }
  };

  const topFour = Cities.slice(0, 4);

  return (
    <>
      <div className="search-bar">
        <div className="submit-area">
          <div className="search-and-submit">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder=" Enter city name..."
            />
            <br />
            <br />
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div className="search-result-container">
            {topFour.map((res, index) => {
              return (
                <div
                  key={index}
                  className={`${input === "" ? "hidden" : "search-result"}`}
                  onClick={() => setInput(res)}
                >
                  {res}
                </div>
              );
            })}
          </div>
        </div>
        <WeatherBody unit={props.unit} city={chosenCity} />
      </div>
    </>
  );
};

export default SearchBar;
