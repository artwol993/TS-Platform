import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-text">Spotkajmy się na :</p>

      <div className="footer-icon-box">
        <div
          className="footer-icon footer-icon-ig"
          id="inst"
          onClick="location.href='https://www.instagram.com';"
        ></div>
        <div className="footer-icon footer-icon-fb"></div>
      </div>
    </div>
  );
}

export default Footer;
