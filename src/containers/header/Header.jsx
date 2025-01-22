import React from "react";
import "./header.css";
import { Navbar } from "../../components";
import heroImg from "../../assets/hero-img.svg";

function Header() {

  return (
    <div>
      <Navbar />
      <div id="home" className="header">
        <div data-aos="fade-up" className="header-content">
          <h1>I'm Aswin Dev</h1>
          <h2>Full Stack Web Developer</h2>
          <div data-aos="fade-up" className="header-graphics">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
