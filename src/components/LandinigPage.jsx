import React from "react";
import "./landingPage.css";
import sun from "../assets/sun.png";
import cloud from "../assets/rainy-day.png";

function LandinigPage() {
  return (
    <div className="landing-main">
      <h1 className="app-name"> Meir's Meteorology</h1>
      <div className="glasses">
        <div className="glass-container">
          <img className="icon" src={sun} alt="" />
          <h1 className="glass-temp">82&deg;</h1>
          <div className="location">
            <p>Boca Raton,</p>
            <p>Florida</p>
          </div>
        </div>
        <div className="glass-container">
          <img className="icon" src={cloud} alt="" />
          <h1>65&deg;</h1>
          <div className="location">
            <p>Baltimore,</p>
            <p>Maryland</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandinigPage;
