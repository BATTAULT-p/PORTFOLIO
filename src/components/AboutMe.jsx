import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutMe">
      <h2>À propos</h2>
      <div className="aboutMeText">
        <p>
          Curieux, persévérant et autonome, j'ai eu la chance d'exercer pendant
          10 ans un metier qui m'a permit d'acquérir diverses compétences
          techniques mais surtout humaines. Désormait je souhaite revenir à ma
          première passion : l'informatique et plus particulierement le
          développement web.
        </p>
        <p>
          j'ai choisi pour me mettre à niveau la Wild Code School, labellisée
          Grande Ecole du Numérique, celle-ci utilise une pédagogie inversée et
          permet de travailler sur 5 projets différents au sein d'équipes
          différentes en méthodologie agile (SCRUM). C'est une formation
          intensive de 5 mois où on mise sur l'entraide, la recherche et le
          développement de l'autonomie de chacun.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
