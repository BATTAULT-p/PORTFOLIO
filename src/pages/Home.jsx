import { Link } from "react-router-dom";
import Projets from "../tools/Projets";
import photoText from "../assets/txt+photo-ordi.png";

export default function Home() {
  return (
    <div className="homeClass">
      <div>
        <img src={photoText} alt="description" className="photoText"/>
      </div>
      <div className="projectGrid">
        {Projets.map((projet) => (
          <Link to={`/MesProjets/${projet.id - 1}`}>
            <div className="conteneurImg">
              <img
                src={projet.background}
                alt={projet.name}
                className="miniPic"
              />
              <h3 id="">{projet.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
