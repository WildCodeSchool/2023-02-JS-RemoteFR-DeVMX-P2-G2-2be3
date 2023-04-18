/* eslint-disable import/no-unresolved */
import { Link } from "react-router-dom";

import ImgBasket from "../../assets/basket.png";
import "../../style/Basket/ButtonBasket.css";

function ButtonBasket() {
  return (
    <button className="btnBasket" type="button">
      <Link to="/basket">
        <img className="imgBtnBasket" src={ImgBasket} alt="Basket" />
        <span className="txtBtnBasket">Panier</span>
      </Link>
    </button>
  );
}

export default ButtonBasket;
