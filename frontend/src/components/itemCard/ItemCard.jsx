/* eslint-disable import/no-unresolved */
import pizza from "@assets/pizza.png";
import { useState } from "react";
import ItemCardQuantityButton from "./ItemCardQuantityButton";

import "../../style/shopStyle/itemCard/ItemCard.css";

function ItemCard() {
  const [quantity, setQuantity] = useState(0);

  const handleClickAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleClickRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="itemCard-container">
      <img className="img-details-container" src={pizza} alt="Pizza" />
      <div className="description-details-container">
        <h2>La pizza tomate</h2>
        <p>Mozzarella, Pesto ...</p>
      </div>
      <span className="nutriScore-icon">A</span>
      <div className="icons-details-container">
        <span className="material-symbols-outlined">star</span>
        <span>{quantity}</span>
        <div className="button-quantity-container">
          <ItemCardQuantityButton onClick={handleClickRemove} icon="remove" />
          <ItemCardQuantityButton onClick={handleClickAdd} icon="add" />
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
