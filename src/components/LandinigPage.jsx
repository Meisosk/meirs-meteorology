import React from "react";
import "./landingPage.css";
import sun from "../assets/sun.png";

function LandinigPage() {
  return (
    <div className="landing-main">
      <h1 className="app-name"> Meirs Meteorology</h1>
      <div className="glasses">
        <div className="glass-container">
          <img className="icon" src={sun} alt="" />
          <h1 className="glass-temp">72&deg;</h1>
          <div className="location">
            <p>Baltimore,</p>
            <p>Maryland</p>
          </div>
        </div>
        <div className="glass-container">
          <img className="icon" src={sun} alt="" />
          <h1>72&deg;</h1>
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
