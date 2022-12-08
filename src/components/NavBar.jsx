import React from "react";
import { Link } from "react-router-dom";
import Photo from "../assets/logo3.jpeg";
import Linkedin from "../assets/linkedin_logo.png";
import Github from "../assets/github.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="picture">
        <Link to="/">
          <img className="Photo" src={Photo} alt="maPhoto" />
        </Link>
      </div>
      <ul className="navbar__link">
        <Link to="/" id="projets">
          Mon travail
        </Link>
        <Link to="/Description" id="cv">
          A propos
        </Link>
        <a href="mailto:paulbattault@gmail.com" id="contact">
          Me contacter
        </a>
      </ul>
      <ul className="reseaux">
        <a
          href="https://www.linkedin.com/in/paul-battault/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Linkedin} alt="linkedin_logo" id="linkedin" />
        </a>
        <a
          href="https://github.com/BATTAULT-p"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Github} alt="linkedin_logo" id="git" />
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
