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
          src="https://cdn.prod.website-files.com/6384fdd9fd42380b529fc942/63c768f3c7ba4a1bec1cd06a_Brand_Windows.svg"
          alt="windows"
        />
        <img
          src="https://cdn.prod.website-files.com/6384fdd9fd42380b529fc942/63c768f33c05b13a7e46ee7a_Brand_Web.svg"
          alt="web"
        />
        <img
          src="https://cdn.prod.website-files.com/6384fdd9fd42380b529fc942/63c768f111d6b546bea902a4_Brand_AppStore.svg"
          alt="ios"
        />
        <img
          src="https://cdn.prod.website-files.com/6384fdd9fd42380b529fc942/63c768f4c4465845610be9aa_Brand_PlayStore.svg"
          alt="android"
        />
      </div>
    </div>
  );
}

export default MainSection;
