import { useState, useEffect } from 'react'
import Menu from './component/menu.jsx'
import Footer from './component/footer.jsx'
import Decoration from './component/decorationMenu.jsx'
import './PagePorfolio.css'
import Plume from "./assets/plumIconColor.svg";
import Art from "./assets/artIconColor.svg";
import Code from "./assets/codeIconColor.svg";
import Card from "./assets/card.svg";


function Realisation() {
  useEffect(() => {
    document.body.classList.add("realisation-dark");

    return () => {
      document.body.classList.remove("realisation-dark");
    };
  }, []);


  return (
    <>
    <Menu/>
    <Decoration txt01="Mes" txt02="Réalisations" variant="white" />

    <div className="headerDark">
      <h1>Mes projets en <br /> un coup d’œil</h1>
      <img src={Card} alt="card" />
      <p className="intro">Découvrez mes projets alliant design, programmation et création visuelle. Chaque pièce reflète mon approche multidisciplinaire et mon souci du détail.</p>
      <div className="icon">
        <img src={Plume} alt="Plume" />
        <img src={Code} alt="Code" />
        <img src={Art} alt="art" />

      </div>
    </div>
      
      
      <Footer/>
    </>
  )
}

export default Realisation