import React from "react";
import "./works.css";
import { Work} from "../../components";
import backEnd from "../../assets/back-end.svg";
import FrontEnd from "../../assets/front-end.svg";
import Design from "../../assets/designer.svg";

import dj from '../../assets/skillLogo/dj.svg';
import figma from '../../assets/skillLogo/figma.svg';
import github from '../../assets/skillLogo/github.svg';
import js from '../../assets/skillLogo/js.svg';
import py from '../../assets/skillLogo/py.svg';
import react from '../../assets/skillLogo/react.svg';

function Works() {
  const workList = [
    {
      title: "Binary",
      body: "Medium Blog application clone",
    },
    {
      title: "Campus Connect",
      body: "website for college students",
    },
    {
      title: "Under Development",
      body: "Coming soon...",
    },
  ];
  return (
    <div id='works' className="works">
      <h2 className="works-heading">works</h2>
      <p className="works-para">A collection of my projects showcasing dynamic web applications, interactive designs, and robust fullstack solutions.</p>
      <div className="works-card">
      {
        workList.map((obj)=>(
          <Work title={obj.title} logo={obj.logo} body={obj.body} />
        ))
      }
      </div>
    </div>
  );
}

export default Works;
