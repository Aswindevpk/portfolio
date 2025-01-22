import React from "react";
import "./skills.css";
import { Card } from "../../components";
import backEnd from "../../assets/back-end.svg";
import FrontEnd from "../../assets/front-end.svg";
import Design from "../../assets/designer.svg";

import dj from "../../assets/skillLogo/dj.svg";
import figma from "../../assets/skillLogo/figma.svg";
import github from "../../assets/skillLogo/github.svg";
import js from "../../assets/skillLogo/js.svg";
import py from "../../assets/skillLogo/py.svg";
import react from "../../assets/skillLogo/react.svg";

function Skills() {
  const skillList = [
    {
      id:1,
      title: "Web Designer",
      logo: Design,
      body: "I value the content, stucture, font, color , Targeted Audience,etc",
      tools: ["Figma", "illustrator", "draw.io"],
    },
    {
      id:2,
      title: "FrontEnd Developer",
      logo: FrontEnd,
      body: "I like to code the simple website from scratch in popular frameworks.",
      tools: ["React.js", "Bootrap", "HTML5/CSS", "JavaScript", "TypeScript"],
    },
    {
      id:3,
      title: "BackEnd Developer",
      logo: backEnd,
      body: "I mostly like to design the database and the main engine of the website",
      tools: ["Node.js", "Django","Postgresql","REST API", "JWT"],
    },
  ];
  return (
    <div id="skills" className="skills">
      <div className="skills-card">
        {skillList.map((obj) => (
          <Card
            key={obj.id}
            title={obj.title}
            logo={obj.logo}
            body={obj.body}
            tools={obj.tools}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
