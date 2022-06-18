import React from "react";
import "../styles/Footer/Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_banner">
        <div>
          <div className="footer_logo">
            <img src={require("../assets/logo.png")} alt="logo" />
          </div>
          <div className="footer_content">
            Delightful and powerful business phone for professionals, teams, and
            companies.
          </div>
          <div className="footer_stores">
            <img src={require("../assets/appleStore.png")} alt="apple store" />
            <img src={require("../assets/playStore.png")} alt="play store" />
          </div>
          <div className="footer_copyright">
            Copyright {new Date().getFullYear()}, OpenPhone Technologies, Inc.
            All Rights Reserved.
          </div>
        </div>
      </div>
      <div className="footer_links">
        <div className="footer_link_1">
          <a href="#Company">Company</a>
          <a href="#About">About</a>
          <a href="#Press">Press</a>
          <div>
            <a className="careers" href="#Careers">
              Careers
            </a>
            ✨
          </div>
          <a href="#Terms">Terms of service</a>
          <a href="#Privacy">Privacy Policy</a>
        </div>
        <div className="footer_link_2">
          <a href="#Resources">Resources</a>
          <a href="#Blog">Blog</a>
          <a href="#New">What’s New</a>
          <a href="#System">System Status</a>
          <a href="#Demo">Live Demo + Q&A</a>
          <a href="#Downloads">Downloads</a>
        </div>
        <div className="footer_link_3">
          <a href="#Contacts">Contacts</a>
          <a href="#Email US">Email US</a>
          <a href="#Facebook">Facebook</a>
          <a href="#Twitter">Twitter</a>
          <a href="#Instagram">Instagram</a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
