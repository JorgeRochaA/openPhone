import React from "react";
import "../styles/Navbar/Navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo_container">
        <img src={require("../assets/logo.png")} alt="logo" />
        <a className="option_1" href="#Pricing">
          Pricing
        </a>
        <a className="option_1" href="#About">
          About
        </a>
        <a className="option_1" href="#Downloads">
          Downloads
        </a>
        <div>
          <a className="option_1" href="#Careers">
            Careers
          </a>
          ✨
        </div>
      </div>
      <div className="options_container">
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
  );
}

export default Navbar;
