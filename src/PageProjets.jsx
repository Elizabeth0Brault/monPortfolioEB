import { useState, useEffect } from 'react'
import Menu from './component/menu.jsx'
import Footer from './component/footer.jsx'
import Decoration from './component/decorationMenu.jsx'
import { useParams } from "react-router-dom";
import { projects } from './Data/dataProjet.js';
import './PagePorfolio.css'
import Bouton from "./component/btnDark.jsx";
import Card from "./assets/card.svg";


function Realisation() {
 
    const { slug } = useParams();

  const projet = projects.find((p) => p.slug === slug);

  if (!projet) {
    return <p>Projet introuvable</p>;
  }

  return (
    <>
    <Menu/>
    <Decoration txt01="Mes" txt02="Réalisations" />
      <div className="header">
        <div className="infoProjet">
          <h1>{projet.titre}</h1>
          <p className="tags">{projet.tags}</p>
          <p className="collaboration">{projet.collaboration}</p>
        </div>

        <img src={projet.cover} alt={projet.titre} />
      </div>

      <div className="resume">
        <h3>Mandat principal</h3>
        <p>{projet.resume}</p>

        <Bouton
          txt01="Voir le site"
          txt02="découvrez le projet complet"
          lien={projet.lien}
        />
      </div>
      
      <Footer/>
    </>
  )
}

export default Realisation