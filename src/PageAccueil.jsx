import { useEffect, useRef, useState } from "react";
import Menu from "./component/menu.jsx";
import Footer from "./component/footer.jsx";
import Slider from "./component/sliderTemoin.jsx";
import Decoration from "./component/decorationMenu.jsx";
import "./AccueilStyle.css";
import Bouton from "./component/btnDark.jsx";
import BoutonBlanc from "./component/btnLight.jsx";
import puceNoir from './assets/puceNoire.svg'

import Plume from "./assets/plumIconColor.svg";
import Code from "./assets/codeIconColor.svg";
import Art from "./assets/artIconColor.svg";

function Accueil() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 = float normal, 1 = disparu
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    

    //ANIMANTION AU SCROLL


  const handleScroll = () => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const sectionTop = el.offsetTop;          // position du bloc par rapport au haut de la page
    const sectionHeight = el.offsetHeight;
    const windowH = window.innerHeight;
    const scrollY = window.scrollY;

    // début de l’animation
    const start = sectionTop - windowH * 0.3;
    // fin de l’animation
    const end = sectionTop + sectionHeight * 0.8;

    const raw = (scrollY - start) / (end - start);
    const clamped = Math.min(1, Math.max(0, raw)); // entre 0 et 1

    setProgress(clamped);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  // valeurs en fonction du scroll
  const translateY = progress * 600;      // descend max 80px
  const scale = 1 - progress * 0.6;      // de 1 à 0.4
  const rawOpacity = 1 - progress * 1.2; // peut descendre sous 0
  const opacity = Math.max(0, rawOpacity);

 const wrapperStyle = (side = "center") => {
  let translateX;

  if (side === "left") {
    // de 0 → calc(-50% - 20px)
    translateX = `calc(${(-50 * progress)}% - ${20 * progress}px)`;
  } else if (side === "right") {
    // de 0 → calc(50% + 20px)
    translateX = `calc(${50 * progress}% + ${20 * progress}px)`;
  } else {
    // centre : reste aligné
    translateX = "0";
  }

  return {
    transform: `translate(${translateX}, ${translateY}px) scale(${scale})`,
    opacity,
  };
};

  // si on veut couper le float pendant la disparition
  const playState = progress > 0 ? "paused" : "running";

  return (
    <>
      <Menu />
      <Decoration txt01="Design" txt02="Code" />

      <section className="header padding">
        <h1>INTéGRATRICE MuLTIMÉDIA</h1>

        <div className="row1">
          <div className="col1">
            <p>
              Conception Web <br />
              UX/UI • Intégration Front-End
            </p>
          </div>

          {/* ICI on ajoute le ref sur col2 */}
          <div className="col2" ref={containerRef}>
            <div className="icon-wrapper" style={wrapperStyle("right")}>
              <img
                style={{ animationPlayState: playState }}
                src={Plume}
                alt="Plume icone"
              />
            </div>

            <div className="icon-wrapper" style={wrapperStyle("center")}>
              <img
                style={{ animationPlayState: playState }}
                src={Code}
                alt="Code icone"
              />
            </div>

            <div className="icon-wrapper" style={wrapperStyle("left")}>
              <img
                style={{ animationPlayState: playState }}
                src={Art}
                alt="Art icone"
              />
            </div>
          </div>
        </div>

        <p className="intro">
          Passionnée par la création numérique, je combine le design, l’UX/UI et
          l’intégration front-end pour donner vie à des interfaces modernes,
          intuitives et performantes. Grâce à mon expertise multidisciplinaire,
          je maîtrise autant la conception visuelle, le graphisme, la
          photographie, la vidéo, que la production imprimée, de l’identité
          visuelle aux supports grand format. J’unis créativité, sens du détail
          et logique de programmation pour concevoir des expériences cohérentes
          et engageantes, où chaque élément, du pixel au papier, est
          soigneusement pensé pour raconter une histoire visuelle forte.
        </p>

        <Bouton txt01="Réalisations" txt02="découvrer mon univers créatif" />
        <div className="puce">
                    <img src={puceNoir} alt="puce Noir" />
                    <img src={puceNoir} alt="puce Noir" />
                    <img src={puceNoir} alt="puce Noir" />
                </div>
      </section>
      <section className="competence padding">
        <div className="rowCompetence light">
          <h2>Mes compétences</h2>
          <BoutonBlanc txt01="Curriculum Vitae" txt02=" vOIR mon PACOURS PROFESSIONNELLE" />
        </div>
        <div className="ux light">
          <h3>Design & Expérience Utilisateur</h3>
          <p>UX/UI • Web Design • Wireframes • prototypes • Direction artistique numérique • Micro-interactions • Recherche utilisateur • Design d’expérience et cohérence visuelle</p>
        </div>
        <div className="code light">
          <h3>Développement Web & Intégration</h3>
          <p>Front-end : HTML, CSS, JavaScript, React & Vue • Intégration WordPress : thèmes, ACF, PHP, templates personnalisés • Création de composantes interactives et réutilisables • Développement de fonctionnalités sur mesure • Bases de données & SQL (en apprentissage) </p>
        </div>
        <div className="design light">
          <h3>Création Visuelle & Production</h3>
          <p>Design graphique •  Conception imprimée (petit et grand format) • Préparation de fichiers pour impression (CMJN, bleed, normes) •  Photographie (sport, portrait, storytelling visuel) • Vidéo, montage & colorimétrie • Motion design & animation • Retouche avancée (Photoshop, Lightroom)</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Accueil;
