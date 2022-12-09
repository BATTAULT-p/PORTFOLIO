import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Description from "./ContactForm";
import Projet from "./Projet";
import Error from "./Error";

function Transition() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Description" element={<Description />} />
        <Route path="/MesProjets/:id" element={<Projet />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default Transition;
