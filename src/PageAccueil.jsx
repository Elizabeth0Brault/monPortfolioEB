import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Menu from './component/menu.jsx'
import Footer from './component/footer.jsx'
import Decoration from './component/decorationMenu.jsx'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Menu/>
    <Decoration txt01="Design" txt02="Code"/>
      <section className="header">
        <h1>INTEGRATRICE MuLTIMÉDIA</h1>
      </section>
     
      <Footer/>
    </>
  )
}

export default App