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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mes projets en un coup d’œil</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more BONJOUR
      </p>
      <Footer/>
    </>
  )
}

export default App