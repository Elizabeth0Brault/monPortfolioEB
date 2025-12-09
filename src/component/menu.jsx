import { useState } from 'react'
import './menu.css'
import puceBlanc from '../assets/puceBlanc.svg'

function Menu() {

  return (
    <>
      <div id='topMenu' className="menuWrap padding">
        <div className="logoMenu">
            <li><a className="dark" href="">Elizabeth <img src={puceBlanc} alt="puce Blanc" /> Brault</a></li>
        </div>
        <div className="nav">
            <nav>
                <ul>
                    <li><a href="">Qui suis-je?</a></li>
                    <li><a href="">Mon Expertise</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Me contacter</a></li>

                </ul>
            </nav>
        </div>
      </div>
    </>
  )
}

export default Menu
