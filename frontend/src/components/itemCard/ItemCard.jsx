/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-unresolved */
import { useState } from "react";
import { PropTypes } from "prop-types";
import ItemCardQuantityButton from "./ItemCardQuantityButton";

import "../../style/shopStyle/itemCard/ItemCard.css";

function ItemCard({
  image = "",
  productName = "",
  ingredientsText = "",
  nutriscoreGrade = "",
  setItemQuantity,
  itemQuantity,
}) {
  // const [itemQuantity, setItemQuantity] = useState(0);
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
      <img className="img-details-container" src={image} alt={image} />
      <div className="description-details-container">
        <h2>{productName}</h2>
        <p>{ingredientsText.substr(0, 40)}...</p>
      </div>
      <span
        className={`btnNutriScoreLiButton btn${nutriscoreGrade.toUpperCase()}`}
      >
        {nutriScoreGrade.toUpperCase()}
      </span>
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

ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  ingredientsText: PropTypes.string.isRequired,
  nutriScoreGrade: PropTypes.string.isRequired,
  setItemQuantity: PropTypes.func.isRequired,
  itemQuantity: PropTypes.number.isRequired,
};

export default ItemCard;
