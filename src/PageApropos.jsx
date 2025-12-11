import { useState } from 'react'
import "./PageApropos.css";
import Menu from './component/menu.jsx'
import Footer from './component/footer.jsx'
import Decoration from './component/decorationMenu.jsx'
import Propos from "./assets/Images/imgPropos.jpg";
import Bouton from "./component/btnDark.jsx";
import puceNoir from './assets/puceNoire.svg'

function Apropos() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Menu />
    <Decoration txt01="Design" txt02="Code"/>
    <div className="header  apropos">

      <div className="col1propos">
        <h1 className="titrePropos">
          <span className="line1">L’essentiel</span>
          <span className="line2">
            <img src={Propos} alt="image propos" /> sur moi
          </span>
          </h1>
          <p className='intro'>Je suis une intégratrice multimédia passionnée par la création d’expériences numériques qui allient design, programmation et sens artistique. Curieuse, intuitive et polyvalente, j’aime donner vie à des interfaces modernes, fluides et cohérentes, où chaque détail du code au visuel final contribue à créer une expérience engageante et mémorable.</p>
      </div>
      <div className="col2propos">
        <p>
          <span>Ce qui m’inspire le plus:</span> <br />
          01 - imaginer <br />
          02 - créer <br />
          03 - concrétiser
        </p>
      </div>
      
    </div>
    <div className="parcours ">
      <h2>Mon parcours</h2>
      <div className="rowParcours">
        <p>Depuis près d’une décennie, j’évolue au croisement du design, du développement web et de la création visuelle. Ma formation et mon expérience m’ont permis de maîtriser autant la conception UX/UI, la production imprimée et la direction artistique que l’intégration front-end, les composants interactifs et la logique de programmation.</p>
        <p>Au fil des années, j’ai eu l’occasion de collaborer avec des entreprises, des organisations et des créateurs pour transformer des idées en solutions concrètes : des interfaces, des identités visuelles, des contenus imprimés, des prototypes interactifs, des mini-applications, des vidéos, des photographies et bien plus.</p>
      </div>
      <Bouton txt01="Curriculum Vitae" txt02=" vOIR mon PACOURS PROFESSIONNELLE" lien="/" />
    </div>
     
      <div className="approche ">

        <h2>Mon approche</h2>
        <div className="rowApproche">
          <div className="col1approche">
            <p>Je crois profondément que le design n’est pas qu’une question d’esthétique. C’est d’abord une question d’intention et de cohérence.</p>
          </div>
          <div className="col2approche">
            <h3>Mon travail repose sur trois piliers</h3>
            <div className="colapproche flex3">
              <div className="col orange">
                <h4 className='orange'>01 <br /><span>Comprendre</span></h4>
                <p>Analyser les besoins, définir les objectifs et anticiper les comportements utilisateurs.</p>
              </div>
              <div className="col">
                <h4 className='rose'>02 <br /><span>Concevoir</span></h4>
                <p>Donner une forme visuelle claire, intuitive et harmonieuse : structure UX, maquettes, prototypes, visuels, branding, contenu multimédia.</p>
              </div>
              <div className="col violet">
                <h4 className='violet'>03 <br /><span>Réaliser</span></h4>
                <p>Programmer, intégrer et optimiser les interfaces : front-end, logique d’interaction, composants réutilisables, WordPress, PHP, bases de données, animations.</p>
              </div>
            </div>
            <div className="mention">
               <p><span>C’est ce qui définit <br />vraiment ma signature </span>
                  - Je conçois et je réalise. <br />
                  - Je crée et je code. <br />
                  - Je produis du visuel et de la fonctionnalité. </p>
            </div>
          </div>
        </div>
      </div>

      <div className="aime">
        <img src="" alt="Mon image" />
        <div className="aimetxt">
          <div className="puce left">
                              <img src={puceNoir} alt="puce Noir" />
                              <img src={puceNoir} alt="puce Noir" />
                              <img src={puceNoir} alt="puce Noir" />
                          </div>
          <h2>Ce que j’aime créer</h2>
          <p>Interfaces web modernes <br />
          Composants interactifs réutilisables <br />
          Identités visuelles et supports imprimés <br />
          Photographies qui racontent une histoire <br />
          Vidéos, montages et animations <br />
          Projets qui allient créativité et logique <br /></p>
          <Bouton txt01="Réalisations" txt02=" découvrer mon univers créatif " lien="/realisations" />
        </div>
        <div className="col2propos">
        <p>
          <span>Je suis à mon meilleur </span> <br />
          lorsque je peux mixer le design, la technique et la création, et transformer des idées en expériences concrètes.
        </p>
      </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default Apropos