import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/sofiadurkan1"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <code className="brand">{"<DevSofia>"}</code>
      </a>
    </div>
  );
};

export default Footer;