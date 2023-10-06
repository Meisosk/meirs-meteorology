import React, { useState } from "react";
import "./unitSwitchStyles.css";

import SearchBar from "./SearchBar";

function UnitSwitch() {
  const [unit, setUnit] = useState("imperial");
  const [city, setCity] = useState(null);

  function handleClick(city) {
    setCity(city);
  }

  const handleToggle = () => {
    const newUnit = unit === "imperial" ? "metric" : "imperial";
    setUnit(newUnit);
  };

  return (
    <div className="app-body">
      <div className="top-row">
        <div className="btn-container">
          <label className="switch btn-color-mode-switch">
            <input
              value="1"
              id="color_mode"
              name="color_mode"
              type="checkbox"
              checked={unit === "metric"}
              onChange={handleToggle}
            />
            <label
              className="btn-color-mode-switch-inner"
              data-off="&deg;F"
              data-on="&deg;C"
              htmlFor="color_mode"
            ></label>
          </label>
        </div>
        <ul className="city-nav">
          <li onClick={() => handleClick("London")}>London</li>
          <li onClick={() => handleClick("New York")}>New York</li>
          <li onClick={() => handleClick("Bangkok")}>Bangkok</li>
          <li onClick={() => handleClick("Hong Kong")}>Hong Kong</li>
          <li onClick={() => handleClick("Dubai")}>Dubai</li>
        </ul>
      </div>
      <SearchBar unit={unit} city={city} />
    </div>
  );
}

export default UnitSwitch;
