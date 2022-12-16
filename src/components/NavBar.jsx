import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import "./NavBar.css";
import Linkedin from "../assets/linkedin_logo.png";
import Github from "../assets/github.png";
import Photo from "../assets/logo4.png";

const NavBar2 = ({
  largeur,
  toggleMenu,
  setToggleMenu,
  toggleNavSmallScreen,
}) => {
  return (
    <nav>
      {!toggleMenu && (
        <Link to="/">
          <img className="logo" src={Photo} alt="Logo" />
        </Link>
      )}
      {(toggleMenu || largeur > 800) && (
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
              to="/Apropos"
              className="items"
              id="cv"
              onClick={toggleNavSmallScreen}
            >
              A propos
            </Link>
            <Link
              to="/Contact"
              className="items"
              onClick={toggleNavSmallScreen}
            >
              Me Contacter
            </Link>
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
