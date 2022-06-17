import React from "react";
import "../styles/BuildTeamSection/BuildTeamSection.scss";
function BuildTeamSection() {
  return (
    <div className="build_team_section">
      <div className="build_team_title">Built for individuals and teams</div>
      <div className="build_team_content">
        We built OpenPhone to grow with you. Bring your team to collaborate and
        communicate faster.
      </div>
      <div className="team_card">
        <div className="team_info_container">
          <div>
            <div className="team_card_title">Bring your team</div>
            <div className="team_card_content">
              Invite your teammates to get direct or shared numbers. Manage all
              company-owned numbers from a simple interface. Your team will love
              how easy it is to get started.
            </div>
            <div className="team_card_button">Start free trial</div>
          </div>
        </div>
        <div className="team_image_container">
          <img src={require("../assets/team1.png")} alt="team_image" />
        </div>
      </div>
      <div className="team_card">
        <div className="team_info_container">
          <div>
            <div className="team_card_title">Share a phone number</div>
            <div className="team_card_content">
              Invite your team to call and text from the same number. Every
              message shows who sent it - no more guessing. You can even see
              when someone is viewing a conversation or typing.
            </div>
            <div className="team_card_button">Start free trial</div>
          </div>
        </div>
        <div className="team_image_container">
          <img src={require("../assets/team2.png")} alt="team_image" />
        </div>
      </div>
    </div>
  );
}

export default BuildTeamSection;
