import React, { useState } from "react";
import "../styles/Navbar/Navbar.scss";
function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="navbar">
      <div className="logo_container">
        <img src={require("../assets/logo.png")} alt="logo" />
        <div
          className={menuIsOpen ? "bars_container open" : "bars_container"}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      <div
        className={menuIsOpen ? "options_container open" : "options_container"}
      >
        <div className="options_1_container">
          <a className="option_1" href="#Pricing">
            Pricing
          </a>
          <a className="option_1" href="#About">
            About
          </a>
          <a className="option_1" href="#Downloads">
            Downloads
          </a>
          <div className="careers_link">
            <a className="option_1" href="#Careers">
              Careers
            </a>
            ✨
          </div>
        </div>
        <div className="options_2_container">
          <a className="option_2" href="#Help">
            Help
          </a>
          <a className="option_2" href="#LogIn">
            Log in
          </a>
          <a className="option_2" href="#SignUp">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
