import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./PageAccueil.jsx";
import Apropos from "./PageApropos";
import Contact from "./PageContact.jsx";
import Portfolio from "./PagePortfolio.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

