import { useState } from 'react';
import Menu from './component/menu.jsx';
import Footer from './component/footer.jsx';
import Decoration from './component/decorationMenu.jsx';
import { Link, useParams } from "react-router-dom";
import { projects } from './Data/dataProjet.js';
import './PageProjets.css';
import Bouton from "./component/btnDark.jsx";
import ProjetCard from "./component/ProjetCard";
import ActionLink from "./component/ActionLink.jsx";

function Realisation() {
  const { slug } = useParams();
  const projet = projects.find((p) => p.slug === slug);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!projet) {
    return <p>Projet introuvable</p>;
  }

  const images = projet.Gallerie || []; // sécurité

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const autresProjets = projects
  .filter(p => p.slug !== projet.slug)
  .sort(() => Math.random() - 0.5)
  .slice(0, 3);


  return (
    <>
      <Menu />
      <Decoration txt01="Mes" txt02="Réalisations" />

      <div className="headerProjet">
        <div className="infoProjet">
          <h1 style={{ whiteSpace: "pre-line" }}>{projet.titre}</h1>
          <p className="tags">{projet.tags}</p>
          <p className="collaboration">{projet.collaboration}</p>
          
        </div>

        <div className="imgProjet">
        <img src={projet.cover} alt={projet.titre} />
        <div className="actions-links action">

    {projet.actions?.site && (
      <ActionLink to={projet.actions.site} className="orange">
        Voir le site
      </ActionLink>
    )}

    {projet.actions?.maquette && (
      <ActionLink to={projet.actions.maquette}className="rose">
        Voir la maquette
      </ActionLink>
    )}

    {projet.actions?.gallerie && (
        <button 
            type="button"
        className="action-btn violet"
        onClick={() => openLightbox(0)}   // ouvre la galerie directement
        >
        Voir la galerie
        </button>
)}
    {projet.actions?.tester && (
      <ActionLink to={projet.actions.tester} className="jaune">
        Tester la fonction
      </ActionLink>
    )}

  </div>
  </div>
      </div>

      <div className="mandat">
                <h3>Mandat principal</h3>
            <p style={{ whiteSpace: "pre-line" }}>{projet.resume}</p>
          </div>


      {/* 🔽 SECTION GALERIE (affichée seulement si projet.Gallerie existe et contient au moins 1 image) */}
{projet.Gallerie?.length > 0 && (
  <section className="gallerie" id="gallerie">
    <h2>Le projet en images</h2>

    <div className="gallerie-grid">
      {projet.Gallerie.map((img, index) => (
        <button
          key={index}
          type="button"
          className="gallerie-item"
          onClick={() => openLightbox(index)}
        >
          <img
            src={img}
            alt={`${projet.titre} - visuel ${index + 1}`}
          />
        </button>
      ))}
    </div>
  </section>
)}

{/* 🔽 LIGHTBOX (s'affiche seulement si ouverte + galerie non vide) */}
{isLightboxOpen && projet.Gallerie?.length > 0 && (
  <div className="lightbox-overlay" onClick={closeLightbox}>
    <div
      className="lightbox-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className="lightbox-close"
        onClick={closeLightbox}
      >
        ✕
      </button>

      <button
        type="button"
        className="lightbox-prev"
        onClick={showPrev}
      >
        ‹
      </button>

      <img
        src={projet.Gallerie[currentIndex]}
        alt={`${projet.titre} - visuel ${currentIndex + 1}`}
        className="lightbox-image"
      />

      <button
        type="button"
        className="lightbox-next"
        onClick={showNext}
      >
        ›
      </button>
    </div>
    
  </div>
  
  
)}
{/* Séparateur visible seulement si AUCUNE galerie */}
{(!projet.Gallerie || projet.Gallerie.length === 0) && (
  <div className="separateurDark sep"></div>
)}

      
      <section className="autres-projets">
  <div className="retour-realisations">
    <h2>Et si on continuait la visite?</h2>
    <Bouton
      txt01="Retour"
      txt02="à mes réalisations"
      lien="/realisations"
    />
  </div>
      
  <div className="autres-projets-grid detail">
    {autresProjets.map((p) => (
      <ProjetCard key={p.id} projet={p} variant="detail" />
    ))}
  </div>
</section>


      <Footer />
    </>
  );
}

export default Realisation;
