import React from "react";
import "../styles/MainSection/MainSection.scss";
function MainSection() {
  return (
    <div className="main_section">
      <div className="main_section_title">Your business phone, in an app.</div>
      <div className="main_section_content">
        Delightful and powerful business phone for professionals, teams, and
        companies.
      </div>
      <button className="start_trial">Start free trial</button>
      <div className="watch_demo_button">
        Watch demo <img src={require("../assets/play.png")} alt="play" />
      </div>
      <img
        className="main_section_image"
        src={require("../assets/main_section_image.png")}
        alt="main"
      />
      <div className="message">
        Professionals at the world's leading companies choose OpenPhone for
        their communications
      </div>
      <div className="trusted_company">
        <img
          src="https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg"
          alt="windows"
        />
        <img
          src="https://cdn.worldvectorlogo.com/logos/google-earth-2.svg"
          alt="web"
        />
        <img src="https://cdn.worldvectorlogo.com/logos/apple.svg" alt="ios" />
        <img
          src="https://cdn.worldvectorlogo.com/logos/android.svg"
          alt="android"
        />
      </div>
    </div>
  );
}

export default MainSection;
