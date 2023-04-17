import { Link } from "react-router-dom";

function ButtonBasket() {
  return (
    <button type="button">
      <Link to="/basket">Basket</Link>
    </button>
  );
}

export default ButtonBasket;
