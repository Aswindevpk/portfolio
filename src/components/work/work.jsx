import React from "react";
import "./work.css";
import arrow from "../../assets/arrow-forward.svg";

function Work({ title, body, url }) {
  return (
    <div data-aos="fade-up" className="work-card">
      <div>
        <h5>{title}</h5>
        <p>{body}</p>
      </div>
      <a className="work-arrow" href={url} target="_blank">
        <img src={arrow} alt="" />
      </a>
    </div>
  );
}

export default Work;
