/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
import pizza from "@assets/pizza.png";
import { useState } from "react";
import ItemCardQuantityButton from "./ItemCardQuantityButton";

import "../../style/shopStyle/itemCard/ItemCard.css";

function ItemCard() {
  const [itemQuantity, setItemQuantity] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickAdd = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const handleClickRemove = () => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const handleClickIsFavorite = () => {
    setIsFavorite(!isFavorite);
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
        <span
          onClick={handleClickIsFavorite}
          className={
            isFavorite
              ? "material-symbols-outlined favorite-icon isFavorite"
              : "material-symbols-outlined favorite-icon"
          }
        >
          star
        </span>
        <span>{itemQuantity}</span>
        <div className="button-quantity-container">
          <ItemCardQuantityButton
            handleClick={handleClickRemove}
            icon="remove"
          />
          <ItemCardQuantityButton handleClick={handleClickAdd} icon="add" />
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
