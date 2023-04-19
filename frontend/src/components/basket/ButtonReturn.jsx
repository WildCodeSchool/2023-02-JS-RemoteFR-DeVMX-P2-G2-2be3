import { Link } from "react-router-dom";

function ButtonReturn() {
  return (
    <button type="button" className="buttonReturn">
      <Link to="/shop"> Retour aux articles</Link>
    </button>
  );
}

export default ButtonReturn;
