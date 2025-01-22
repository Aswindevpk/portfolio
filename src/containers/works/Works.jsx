import React from "react";
import "./works.css";
import { Work} from "../../components";

function Works() {
  const workList = [
    {
      id:1,
      title: "Binary Mockup (Medium Blog App Clone)",
      body: "Binary Mockup is a showcase version of the Binary project, a Medium clone designed for demonstration purposes. ",
      url:"https://blog.aswindev.in"
    },
    {
      id:2,
      title: "Campus Connect",
      body: "A platform for college students to stay informed about blood donation needs, events, and more.",
      url:"https://github.com/Aswindevpk/Campus-Connect"
    },
    {
      id:3,
      title: "College Venue Booking ",
      body: "This project is a web-based application for booking venues, managing bookings, and handling approvals.",
      url:"https://github.com/Aswindevpk/college_auditorium_booking"
    },
  ];
  return (
    <div id='works' className="works">
      <h2 className="works-heading">Recent works</h2>
      <p className="works-para">A collection of my projects showcasing dynamic web applications, interactive designs, and robust fullstack solutions.</p>
      <div className="works-card">
      {
        workList.map((obj)=>(
          <Work key={obj.id} title={obj.title} logo={obj.logo} body={obj.body} url={obj.url} />
        ))
      }
      </div>
    </div>
  );
}

export default Works;
