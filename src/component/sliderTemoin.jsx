import { useEffect, useState } from "react";
import './sliderTemoin.css'
import Guillemet from "../assets/guillement.svg";
import puceNoire from "../assets/puceNoire.svg";
import puceGrise from "../assets/puceGrise.svg";

// Images
import Img from "../assets/Images/imgTem.jpg";

const SLIDES = [
  {
    texte: "Nous avons eu le privilège de travailler avec Mme Elizabeth Brault, elle s’est rapidement démarqué par sa créativité et sa capacité à rester à l’avant-garde des tendances en design et en technologies web. Son expertise nous a permis de maintenir un niveau de qualité et d’innovation dans nos projets. C’est donc avec confiance et enthousiasme que je recommande Elizabeth à tout employeur.",
    nom: "Marie-Laure verdon",
    poste: "Présidente La petite boîte web",
    image: Img,
    alt: "alternatif texte",
  },
  {
    texte: "Slider 2 :Je collabore avec elizabeth depuis 2025 son travail est éfficace et toujours bien soignée Je collabore avec elizabeth depuis 2025 son travail est éfficace et toujours bien soignée",
    nom: "Marie-Laure verdon",
    poste: "Présidente La petite boîte web",
    image: Img,
    alt: "alternatif texte",
  },
  {

    texte: "Slider 3 : Je collabore avec elizabeth depuis 2025 son travail est éfficace et toujours bien soignée Je collabore avec elizabeth depuis 2025 son travail est éfficace et toujours bien soignée",
    nom: "Marie-Laure verdon",
    poste: "Présidente La petite boîte web",
    image: Img,
    alt: "alternatif texte",
  },
];


function SliderTemoin() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (isPaused) return; // on ne fait rien si le slider est en pause (hover)

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // 5 secondes

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentSlide = SLIDES[currentIndex];


  return (
    <>
      <div
      className="sliderTemoin"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="sliderTemoin-inner">

        <img className="guillemet" src={Guillemet} alt="guillemet" />
        <p className="sliderTemoin-txt">{currentSlide.texte}</p>
        <div className="sliderTemoin-content">
            <img
            src={currentSlide.image}
            alt={currentSlide.alt}
            className="sliderTemoin-image"
          />
          <p className="sliderTemoin-paragraph"><span>{currentSlide.nom}</span></p>
          <p className="sliderTemoin-paragraph">{currentSlide.poste}</p>
        </div>
      </div>

      <div className="sliderTemoin-nav">
        <button className="btnSecondaire prev" type="button" onClick={handlePrev}>
          Précédent
        </button>
        <div className="sliderTemoin-dots">
  {SLIDES.map((_, index) => (
    <img
      key={index}
      src={index === currentIndex ? puceNoire : puceGrise}
      alt="puce"
      className="dot"
    />
  ))}
</div>
        <button className="btnSecondaire next" type="button" onClick={handleNext}>
          Suivant
        </button>
        
      </div>
    </div>
      
    </>
  )
}

export default SliderTemoin