import { Link } from "react-router-dom";
import './ProjetCard.css'

function ProjetCard({ projet, variant = "" }) {
  return (
    <div className={`blockProjet ${variant}`}>
      <Link to={`/projets/${projet.slug}`}>
        <img src={projet.cover} alt={projet.titre} />
        <h3>{projet.titre}</h3>
      </Link>
    </div>
  );
}

export default ProjetCard;