import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ContactForm from "./ContactForm";
import Projet from "./Projet";
import Error from "./Error";
import AboutMe from "./AboutMe";

function Transition({ largeur }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home largeur={largeur} />} />
        <Route path="Apropos" element={<AboutMe />} />
        <Route path="/Contact" element={<ContactForm />} />
        <Route path="/MesProjets/:id" element={<Projet />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Transition;
