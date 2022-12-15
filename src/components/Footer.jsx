import React from 'react';
import Linkedin from '../assets/linkedin_logo.png';
import Github from '../assets/github.png';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="identite">
        <h1>Paul BATTAULT</h1>
        <h2>Développeur FullStack</h2>
        <h2>Bordeaux</h2>
      </div>
      <div className="social">
        <ul>
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
      <div className="contactLink">
        <a href="mailto:paulbattault@gmail.com">paulbattault@gmail.com</a>
        <a href="tel:+33640899380">T. 06 40 89 93 80</a>
      </div>
    </div>
  );
}

export default Footer;
