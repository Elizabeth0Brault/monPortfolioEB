import { useState } from 'react'
import './footer.css'
import Bouton from './btnLight.jsx'
import puceNoire from '../assets/puceNoire.svg'
import puceBlanc from '../assets/puceBlanc.svg'
import returnTop from '../assets/returnTop.svg'

function Footer() {

  return (
    <>
      <div className="footer padding">

        <div className="cta">
        <h2>Intéressé(e) par mon profil ?</h2>
        
        <div className="flexCta">
            <p className="ctaFoot">
                Je suis ouverte aux nouvelles opportunités en<br />
                 design, développement web et intégration<br />
                  multimédia.
            </p>
            <Bouton txt01="Contact" txt02="Discutons-en" />
        </div>
        </div>
        <div className="separateurLight"></div>
        
        <div className="infoFoot">
            <div className="logoFoot">
                        <li><a href="">Elizabeth <img src={puceNoire} alt="puce Noire" /> Brault</a></li>
            </div>
            <div className="menuFoot">
                <ul>
                    <li><a href="">Qui suis-je?</a></li>
                    <li><a href="">Mon Expertise</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="mailto:vision.graphiese@icloud.com">Me contacter</a></li>

                </ul>
            </div>
            <div className="contactFoot">
                <ul>
                    <li><a href="">LINKEDIN</a></li>
                    <li><a href="mailto:vision.graphiese@icloud.com">VISION.GRAPHIESE@ICLOUD.COM</a></li>
                    <li><a href="tel:438-680-3256">438-680-3256</a></li>
                    <li><a href="">Laval, Québec</a></li>

                </ul>
            </div>
        </div>
        <div className="copyright">
            <p>© 2025 Elizabeth Brault</p>
            <div className="puce1">
                        <img src={puceBlanc} alt="puce Blanc" />
                        <img src={puceBlanc} alt="puce Blanc" />
                        <img src={puceBlanc} alt="puce Blanc" />
            </div>
            <a href="#topMenu"className="puce2">
                        <img src={returnTop} alt="returnTop" />
                        <img src={returnTop} alt="returnTop" />
                        <img src={returnTop} alt="returnTop" />
            </a>
        </div>
        
        </div>
      
    </>
  )
}

export default Footer