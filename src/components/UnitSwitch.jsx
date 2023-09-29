import React from "react";
import "./unitSwitchStyles.css";

function UnitSwitch() {
  return (
    <div>
      <div className="btn-container">
        <label className="switch btn-color-mode-switch">
          <input value="1" id="color_mode" name="color_mode" type="checkbox" />
          <label
            className="btn-color-mode-switch-inner"
            data-off="&deg;F"
            data-on="&deg;C"
            for="color_mode"
          ></label>
        </label>
      </div>
    </div>
  );
}

export default UnitSwitch;
