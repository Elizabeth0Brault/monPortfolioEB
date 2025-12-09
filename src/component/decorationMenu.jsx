import { useState } from 'react'
import puceNoir from '../assets/puceNoire.svg'
import './menu.css'

function Decoration({ txt01, txt02 }) {
 

  return (
    <>
    <div className="decoWrap padding">
        <div className="puce1">
            <img src={puceNoir} alt="puce Noir" />
            <img src={puceNoir} alt="puce Noir" />
            <img src={puceNoir} alt="puce Noir" />
        </div>
        <p className="upper">{txt01}</p>
        <img src={puceNoir} alt="puce Noir" />
        <img src={puceNoir} alt="puce Noir" />
        <img src={puceNoir} alt="puce Noir" />
        <p className="upper">{txt02}</p>

        <div className="puce2">
            <img src={puceNoir} alt="puce Noir" />
            <img src={puceNoir} alt="puce Noir" />
            <img src={puceNoir} alt="puce Noir" />
        </div>

    </div>
      
    </>
  )
}

export default Decoration