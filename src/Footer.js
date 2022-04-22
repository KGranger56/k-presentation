import React from "react";
import "./Footer.css";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <a
        href="https://www.facebook.com/kelly.stephens.7773/"
        title="Facebook Profile"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon="fa-brands fa-facebook" className="facebook" />
        {"   "}
      </a>
      <a href="https://github.com/KGranger56" title="Github Profile" rel="noreferrer">
        <FontAwesomeIcon icon="fa-brands fa-github" className="github" />
        {"   "}
      </a>
      <a
        href="https://www.linkedin.com/in/kelly-granger-a9503b163/"
        title="LinkedIn Profile"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon="fa-brands fa-linkedin" className="linkedin" />
        {"   "}
      </a>
    </div>
  );
}
