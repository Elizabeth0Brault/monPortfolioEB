import { useState } from 'react'
import flecheLight from '../assets/flecheLight.svg'
import './btn.css'

function BTN({ txt01, txt02 }) {
 

  return (
    <>
    <div className="BTN">
        <div className="txt1">
            <p className="Btn01">{txt01}</p>
            <img src={flecheLight} alt="fleche Light" />
        </div>
        <li><a className='btn02' href="">{txt02}</a></li>

    </div>
      
    </>
  )
}

export default BTN