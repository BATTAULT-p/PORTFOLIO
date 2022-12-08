import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import "./NavBar2.css";
import Linkedin from "../assets/linkedin_logo.png";
import Github from "../assets/github.png";
import Photo from "../assets/logo3.jpeg";

const NavBar2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <div className="picture">
            <Link to="/" onClick={toggleNavSmallScreen}>
              <img className="Photo" src={Photo} alt="maPhoto" />
            </Link>
          </div>
          <ul className="routelist">
            <Link
              to="/"
              className="items"
              id="projets"
              onClick={toggleNavSmallScreen}
            >
              Mon travail
            </Link>
            <Link
              to="/Description"
              className="items"
              id="cv"
              onClick={toggleNavSmallScreen}
            >
              A propos
            </Link>
            <a
              href="mailto:paulbattault@gmail.com"
              className="items"
              onClick={toggleNavSmallScreen}
            >
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
        </ul>
      )}
      <div className="btn">
        <Hamburger
          direction="right"
          size={32}
          color="black"
          duration={1}
          toggled={toggleMenu}
          toggle={setToggleMenu}
        />
      </div>
    </nav>
  );
};

export default NavBar2;
