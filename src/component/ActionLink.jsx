// src/component/ActionLink.jsx
import { Link } from "react-router-dom";

function ActionLink({ to, children, className = "" }) {
  const isAnchor = to.startsWith("#");
  const isExternalUrl = /^https?:\/\//i.test(to);
  const isFile = /\.(pdf|docx?|xlsx?|pptx?|jpg|jpeg|png|webp|svg)$/i.test(to);

  // 👉 toutes les variantes auront AU MOINS "action-btn",
  // et EN PLUS ce que tu passes (orange, etc.)
  const combinedClassName = `action-link ${className}`.trim();

  // 🔹 1) Ancre dans la même page (#gallerie)
  if (isAnchor) {
    return (
      <a href={to} className={combinedClassName}>
        <span>{children}</span>
      </a>
    );
  }

  // 🔹 2) Fichier ou URL externe
  if (isExternalUrl || isFile) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
      >
        <span>{children}</span>
      </a>
    );
  }

  // 🔹 3) Route interne React Router
  return (
    <Link to={to} className={combinedClassName}>
      <span>{children}</span>
    </Link>
  );
}

export default ActionLink;

