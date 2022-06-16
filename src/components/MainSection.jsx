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
          src="https://www.openphone.com/_next/image?url=%2Fimages%2Fos-logos%2Fmac-os.svg&w=96&q=75"
          alt="macOS"
        />
        <img
          src="https://www.openphone.com/_next/image?url=%2Fimages%2Fos-logos%2Fwindows.svg&w=96&q=75"
          alt="windows"
        />
        <img
          src="https://www.openphone.com/_next/image?url=%2Fimages%2Fos-logos%2Fweb.svg&w=96&q=75"
          alt="web"
        />
        <img
          src="https://www.openphone.com/_next/image?url=%2Fimages%2Fos-logos%2Fi-os.svg&w=96&q=75"
          alt="ios"
        />
        <img
          src="https://www.openphone.com/_next/image?url=%2Fimages%2Fos-logos%2Fandroid.svg&w=96&q=75"
          alt="android"
        />
      </div>
    </div>
  );
}

export default MainSection;
