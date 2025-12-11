import { useState } from 'react'
import flecheDark from '../assets/flecheDark.svg'
import './btn.css'

function BTN({ txt01, txt02, lien="#" }) {
 

  return (
    <>
    <div className="BTN">
        <div className="txt1">
            <p className="Btn01 Dark">{txt01}</p>
            <img src={flecheDark} alt="fleche Dark" />
        </div>
        <li className='Dark'><a className='btn02 Dark' href={lien}>{txt02}</a></li>

    </div>
      
    </>
  )
}

export default BTN