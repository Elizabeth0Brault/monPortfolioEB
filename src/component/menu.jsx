import { useState } from 'react'
import './menu.css'
import puceBlanc from '../assets/puceBlanc.svg'
import { Link } from "react-router-dom";

function Menu() {

  return (
    <>
      <div id='topMenu' className="menuWrap padding">
        <div className="logoMenu">
            <li><Link to="/" className="dark">Elizabeth <img src={puceBlanc} alt="puce Blanc" /> Brault</Link></li>
        </div>
        <div className="nav">
            <nav>
                <ul>
                    <li> <Link to="/apropos">Qui suis-je?</Link></li>
                    <li><Link to="">Mon Expertise</Link></li>
                    <li><Link to="/portfolio">Réalisations</Link></li>
                    <li><Link to="/contact">Me contacter</Link></li>

                </ul>
            </nav>
        </div>
      </div>
    </>
  )
}

export default Menu
