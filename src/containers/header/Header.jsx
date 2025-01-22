import React from "react";
import "./header.css";
import { Navbar } from "../../components";
import heroImg from "../../assets/hero-img.svg";
import twitter from "../../assets/twitter.svg";
import linkedIn from "../../assets/linkedin.svg";
import gitHub from "../../assets/github.svg";

function Header() {
  return (
    <div>
      <Navbar />
      <div id="home" className="header">
        <div data-aos="fade-up" className="header-content">
          <h1>I'm Aswin Dev.</h1>
          <h2>Full Stack Web Developer</h2>
          <div data-aos="fade-up" className="header-graphics">
            <img src={heroImg} alt="" />
          </div>
        </div>
        <div className="header-social">
          <a href="https://github.com/Aswindevpk">
            <img src={gitHub} alt="" />
          </a>
          <a href="https://twitter.com/AswinDev_pk">
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/aswin-dev-p-k-266a63211/">
            <img src={linkedIn} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
