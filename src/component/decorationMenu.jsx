import { useState } from 'react'
import puceNoir from '../assets/puceNoire.svg'
import puceBlanc from '../assets/puceBlanche.svg';
import './menu.css'

function Decoration({ txt01, txt02, variant = "dark" }) {

  const imagePuce = variant === "white" ? puceBlanc : puceNoir;

  return (
    <div className={`decoWrap padding ${variant}`}>
      <div className="puce1">
        <img src={imagePuce} alt="puce" />
        <img src={imagePuce} alt="puce" />
        <img src={imagePuce} alt="puce" />
      </div>

      <p className="upper">{txt01}</p>

      <img src={imagePuce} alt="puce" />
      <img src={imagePuce} alt="puce" />
      <img src={imagePuce} alt="puce" />

      <p className="upper">{txt02}</p>

      <div className="puce2">
        <img src={imagePuce} alt="puce" />
        <img src={imagePuce} alt="puce" />
        <img src={imagePuce} alt="puce" />
      </div>
    </div>
  );
}

export default Decoration;