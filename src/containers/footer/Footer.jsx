import React from "react";
import twitter from "../../assets/twitter.svg";
import linkedIn from "../../assets/linkedin.svg";
import gitHub from "../../assets/github.svg";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <div id="footer" className="footer">
      <div className="footer-author">
        <p className="footer-logo">a.</p>
        <p>ASWIN DEV P K |  Portfolio website</p>
      </div>
      <div className="footer-partition"></div>
      <div className="footer-rights">
        <p>© {currentYear} Aswin Dev - All rights Reserved</p>
        <div className="footer-social">
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

export default Footer;
