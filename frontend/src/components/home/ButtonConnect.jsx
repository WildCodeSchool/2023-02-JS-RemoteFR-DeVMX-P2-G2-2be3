import { Link } from "react-router-dom";

function ButtonConnexion() {
  return (
    <button type="button" className="buttonConnect">
      <Link to="/Shop">Connexion</Link>
    </button>
  );
}

export default ButtonConnexion;
