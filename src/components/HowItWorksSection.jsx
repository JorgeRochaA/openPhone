import React from "react";
import "../styles/HowItWorksSection/HowItWorksSection.scss";
function HowItWorksSection() {
  return (
    <div className="how_it_works_section">
      <div className="how_it_works_title">How it works</div>
      <div className="step_card_container">
        <div className="step_card">
          <img src={require("../assets/step1.png")} alt="step" />
          <div className="step_card_text">Get a number or bring your own</div>
        </div>
        <img
          className="arrow"
          src={require("../assets/arrow.png")}
          alt="arrow"
        />
        <div className="step_card">
          <img src={require("../assets/step2.png")} alt="step" />
          <div className="step_card_text">Download the app from any store</div>
        </div>
        <img
          className="arrow"
          src={require("../assets/arrow.png")}
          alt="arrow"
        />
        <div className="step_card">
          <img src={require("../assets/step3.png")} alt="step" />
          <div className="step_card_text">Start messaging and calling</div>
        </div>
      </div>
      <div className="information_and_image_container">
        <div className="image_container">
          <img src={require("../assets/phones.png")} alt="phones" />
        </div>
        <div className="information_container">
          <div>
            <div className="information_title">So much more than a phone</div>
            <div className="information_content">
              Want to be able to talk & text on all your devices? Yep, we've got
              it. But it doesn't end there. We've reimagined what a phone can do
              for professionals.
            </div>
            <div className="ball"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksSection;
