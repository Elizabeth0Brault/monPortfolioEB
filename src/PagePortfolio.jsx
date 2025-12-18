import { useState, useEffect } from 'react'
import Menu from './component/menu.jsx'
import Footer from './component/footer.jsx'
import Decoration from './component/decorationMenu.jsx'
import './PagePorfolio.css'
import Plume from "./assets/plumIconColor.svg";
import Art from "./assets/artIconColor.svg";
import Code from "./assets/codeIconColor.svg";
import Card from "./assets/card.svg";
import { projects } from './Data/dataProjet.js';
import { Link } from "react-router-dom";
import ProjetCard from "./component/ProjetCard";




function Realisation() {
  useEffect(() => {
    document.body.classList.add("realisation-dark");
    return () => {
      document.body.classList.remove("realisation-dark");
    };
  }, []);

  // 🟣 ÉTAT : catégorie sélectionnée
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // 🟣 Liste des catégories uniques à partir des projets
  const categories = [
    "Tous",
    ...new Set(
      projects.flatMap((projet) => projet.categorie || [])
    ),
  ];

  // 🟣 Projets filtrés
  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((projet) =>
          (projet.categorie || []).includes(selectedCategory)
        );

  return (
    <>
      <Menu />
      <Decoration txt01="Mes" txt02="Réalisations" variant="white" />

      <div className="headerDark">
        <h1>
          Mes projets en <br /> un coup d’œil
        </h1>
        <img src={Card} alt="card" />
        <p className="intro">
          Découvrez mes projets alliant design, programmation et création
          visuelle. Chaque pièce reflète mon approche multidisciplinaire et mon
          souci du détail.
        </p>
        <div className="icon">
          <img src={Plume} alt="Plume" />
          <img src={Code} alt="Code" />
          <img src={Art} alt="art" />
        </div>
      </div>
        <div className="sectionProjet">
      {/* 🔽 FILTRE PAR CATÉGORIE */}
            <div className="filter">
  <div className="filter-top">
   

    <div className="filter-select-wrap">

      <button
        type="button"
        className={`fake-select ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>
          {selectedCategory === "Tous"
            ? "Filtrer par catégorie"
            : selectedCategory}
        </span>
        <span className="chevron"> ▾</span>
      </button>

      {isOpen && (
        <ul className="fake-options">

          {categories.map((cat) => (
            <li
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => {
                setSelectedCategory(cat);
                setIsOpen(false);
              }}
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
     <button
      type="button"
      className={
        selectedCategory === "Tous" ? "filter-all active" : "filter-all"
      }
      onClick={() => {
        setSelectedCategory("Tous");
        setIsOpen(false);
      }}
    >
      Réinisialiser le filtre
    </button>
  </div>
            </div>



      {/* 🔽 LISTE DES PROJETS FILTRÉS */}
      <div className="lesProjets">
  {filteredProjects.map((projet) => (
    <ProjetCard key={projet.id} projet={projet} variant="dark" />
  ))}
</div>
    </div>

      <Footer />
    </>
  );
}

export default Realisation;
