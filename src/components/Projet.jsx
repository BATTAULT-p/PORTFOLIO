import React from 'react';
import { useParams } from 'react-router-dom';
import Projets from '../tools/Projets';
import './Projet.css';

function Projet() {
  const { id } = useParams();
  return (
    <div className="detailProject">
      <img
        src={Projets[id].background}
        alt={Projets[id].name}
        className="BGProjet"
      />
      <div className="theProject">
        <div className="description">
          <h1>{Projets[id].date}</h1>
          <h2>{Projets[id].description}</h2>
          <div className="link">
            <a
              href={Projets[id].repo}
              title="Repository"
              target="_blank"
              rel="noreferrer"
              className="linkExt"
            >
              Lien GITHUB
            </a>
            <br />
            <a
              href={Projets[id].netlify}
              title="site"
              target="_blank"
              rel="noreferrer"
              className="linkExt"
            >
              Lien vers le site
            </a>
          </div>
        </div>
        <div className="paragraphe">
          <p>{Projets[id].paragraphe}</p>
          <p>{Projets[id].paragraphe2}</p>
          <p>{Projets[id].paragraphe3}</p>
          <p>{Projets[id].paragraphe4}</p>
        </div>
      </div>
      <div className="Cadrephotos">
        <img src={Projets[id].image1} alt={Projets[id].name} />
        <img src={Projets[id].image2} alt={Projets[id].name} />
        <img src={Projets[id].image3} alt={Projets[id].name} />
        <img src={Projets[id].image4} alt={Projets[id].name} />
      </div>
    </div>
  );
}

export default Projet;
