import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Transition from "./components/Transition";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);
  console.log(largeur);
  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      if (window.innerWidth > 800) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar
          largeur={largeur}
          toggleMenu={toggleMenu}
          toggleNavSmallScreen={toggleNavSmallScreen}
          setToggleMenu={setToggleMenu}
        />
        <Transition largeur={largeur} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
