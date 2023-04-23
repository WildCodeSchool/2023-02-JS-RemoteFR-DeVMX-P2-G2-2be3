import { Link } from "react-router-dom";
import { useContext } from "react";
import BasketQuantityProductContext from "../../services/context";

import ImgBasket from "../../assets/basket.png";
import "../../style/Basket/ButtonBasket.css";

function ButtonBasket() {
  const { basketQuantityProduct } = useContext(BasketQuantityProductContext);
  return (
    <button className="btnBasket" type="button">
      <Link to="/basket">
        <img className="imgBtnBasket" src={ImgBasket} alt="Basket" />
        {basketQuantityProduct.length}
        <span className="txtBtnBasket">Panier</span>
      </Link>
    </button>
  );
}

export default ButtonBasket;
