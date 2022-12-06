import CircusBG from "../assets/Projets/circus/circusBG.png";
import PhotoCircus1 from "../assets/Projets/circus/circus1.png";
import PhotoCircus2 from "../assets/Projets/circus/circus2.png";
import PhotoCircus3 from "../assets/Projets/circus/circus3.png";
import PhotoCircus4 from "../assets/Projets/circus/circus4.png";
import LogoWWH from "../assets/Projets/wild_heroes/wwh_logo.png";
import backwwh from "../assets/Projets/wild_heroes/wwhBG.png";
import Photowwh1 from "../assets/Projets/wild_heroes/wwh1.png";
import Photowwh2 from "../assets/Projets/wild_heroes/wwh2.png";
import Photowwh3 from "../assets/Projets/wild_heroes/wwh3.png";
import Photowwh4 from "../assets/Projets/wild_heroes/wwh4.png";
import LogoDH from "../assets/Projets/Derniere_heure/logo_global.png";
import DHBG from "../assets/Projets/Derniere_heure/DHBG.png"
import PhotoDH1 from "../assets/Projets/Derniere_heure/photoDH1.png";
import PhotoDH2 from "../assets/Projets/Derniere_heure/photoDH2.png";
import PhotoDH3 from "../assets/Projets/Derniere_heure/photoDH3.png";
import PhotoDH4 from "../assets/Projets/Derniere_heure/photoDH4.png";

const Projets = [
  {
    id: 1,
    name: "Wild Circus",
    background:CircusBG,
    date: "Septembre 2022",
    description: "Création d'un site web pour une compagnie de cirque.",
    paragraphe:"  Le Wild Circus est mon premier projet à la Wild Code School. Le but de ce projet était de créer un site internet pour une compagnie de cirque.",
    paragraphe2:" Avec mon équipe composée d'Olga Yasnopolskaya, Nicolas DELISEE et Anthony LABADIE. Nous avons décidé de partir sur un site vitrine en une seule page pour fournir une meilleure lisibilité à l'utilisateur.",
    paragraphe3:" Le site permet à l'utilisateur de voir les dates des prochaines représentations. Il est également possible d'en apprendre un peu plus sur les différents intervenants de la troupe. Enfin un formulaire de contact permet au visiteur de correspondre directement avec la troupe de spectacles.",
    paragraphe4:" Le thème du projet nous a imposé le HTML, CSS et JavaScript en langage de programmation. Le site est aussi bien fonctionnel sur desktop que sur smartphone.",
    image1: PhotoCircus1,
    image2: PhotoCircus2,
    image3: PhotoCircus3,
    image4: PhotoCircus4,
    repo:"https://github.com/BATTAULT-p/WILD_CIRCUS",
    netlify:"https://relaxed-biscochitos-23f88f.netlify.app/"
  },
  {
    id: 2,
    name: "World Wild Heroes",
    logo: LogoWWH,
    background: backwwh,
    date: "Novembre 2022",
    description: "Jeu de cartes WORLD WILD HEROES.",
    paragraphe:"  World Wild Heroes est mon projet n°2 à la Wild Code School. Le but de ce projet était de développer un jeu à partir d'un API de super héros.",
    paragraphe2:" Avec mon équipe composée de Yann STEFANUTTI, Alexandre PRE, Peter FLANDIN et Robin MICHEL. Nous avons décidé de partir sur un jeu de cartes qui ferait combattre les super héros des univers Marvel et DC Comics entre eux.",
    paragraphe3:" Le joueur doit sélectionner deux héros légendaires en plus des huit héros classiques qui lui sont imposés. En suivant le match se lance et le but de chaque round est de sélectionner le héros le plus à même de remporter le combat en fonction d'un thème de combat énoncé. La partie se termine lorsque l'ordinateur ou le joueur 1 n'a plus de vie. Chaque joueur débute la partie avec 5 points de vies.",
    paragraphe4:" Le thème du projet nous a imposé de programmer en REACT et de faire appel à une API. Le jeu a uniquement été pensé pour jouer sur desktop.",
    image1: Photowwh1,
    image2: Photowwh2,
    image3: Photowwh3,
    image4: Photowwh4,
    repo:"https://github.com/BATTAULT-p/WILD_HEROES",
    netlify:"https://beamish-moxie-122a33.netlify.app/"
  },
  {
    id: 3,
    name: "Dernière heure",
    logo: LogoDH,
    background: DHBG,
    date: "Octobre 2022",
    description: "blablabla",
    paragraphe: "bloubloublou",
    image1: PhotoDH1,
    image2: PhotoDH2,
    image3: PhotoDH3,
    image4: PhotoDH4,
    repo:"https://github.com/BATTAULT-p/DERNIERE_HEURE",
    netlify:"https://dazzling-toffee-ce31cf.netlify.app/"
  }
];

export default Projets;
