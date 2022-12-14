import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <div className="errorPage">
      <h1 id="title">Oups !</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <p>Code Erreur 404</p>
      <p>Retourner sur la page d'acceuil :</p>
      <Link to="/" id="projetsError">
        Page d'accueil
      </Link>
    </div>
  );
}

export default Error;
