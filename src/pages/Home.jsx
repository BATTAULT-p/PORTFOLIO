import { Link } from "react-router-dom";
import Projets from "../tools/Projets";

export default function Home() {
  return (
    <div className="homeClass">
      <h1>Paul BATTAULT</h1>
      <h2>Développeur web FULLSTACK Spécialité REACT et NODE.JS.</h2>
      <div className="projectGrid">
        {Projets.map((projet) => (
          <Link to={`/MesProjets/${projet.id - 1}`}>
            <div className="conteneurImg">
              <img src={projet.image1} alt={projet.name} className="miniPic" />
              <h3 id="">{projet.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
