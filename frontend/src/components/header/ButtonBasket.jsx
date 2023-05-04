/* eslint-disable import/no-unresolved */
import { Link } from "react-router-dom";

import ImgBasket from "../../assets/basket.png";
import "../../style/Basket/ButtonBasket.css";

function ButtonBasket() {
  return (
    <div>
      <Link to="/basket">
        <div className="imgBtnBasketContainer">
          <img className="imgBtnBasket" src={ImgBasket} alt="Basket" />
          <span className="txtBtnBasket">Panier</span>
        </div>
      </Link>
    </div>
  );
}

export default ButtonBasket;
