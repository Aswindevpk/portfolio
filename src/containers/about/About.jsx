import React from "react";
import "./about.css";
import profilePic from "../../assets/about_profile_pic.png";

function About() {
  return (
    <div id="about" className="about">
      <div data-aos="fade-up" className="about-profile">
        <p>
          <b>"</b>As a passionate fullstack developer, I specialize in creating
          dynamic web applications using <b>Node.js, React, and Django.</b>{" "}
          Eager to learn and naturally curious, I focus on solving problems and
          delivering clean, efficient solutions.<b>"</b>
        </p>
      </div>
    </div>
  );
}

export default About;
