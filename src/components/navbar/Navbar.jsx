import React from "react";
import "./navbar.css";


function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-links">
          <div className="navbar-links_logo">
            <p>a.</p>
          </div>
          <div className="navbar-links_container">
            <p>
              <a href="https://drive.google.com/file/d/1H2O6bBZydpKLf-LBOBZJwIM2eFy8Y1qn/view?usp=sharing" target="_blank" className="navbar-cta">Get Resume</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
