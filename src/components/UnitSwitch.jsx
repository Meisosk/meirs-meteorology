import React, { useState } from "react";
import "./unitSwitchStyles.css";

import SearchBar from "./SearchBar";

function UnitSwitch() {
  const [unit, setUnit] = useState("imperial");

  const handleToggle = () => {
    const newUnit = unit === "imperial" ? "metric" : "imperial";
    setUnit(newUnit);
  };
  return (
    <div>
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
      <SearchBar unit={unit} />
    </div>
  );
}

export default UnitSwitch;
