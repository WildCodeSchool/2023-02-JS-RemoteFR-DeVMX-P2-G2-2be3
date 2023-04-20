import { useState } from "react";
import { PropTypes } from "prop-types";
import ItemCardQuantityButton from "./ItemCardQuantityButton";

import "../../../style/shopStyle/itemCard/ItemCard.css";

function ItemCard({
  image = "",
  productName = "",
  ingredientsText = "",
  nutriScoreGrade = "",
  setOpenModal,
  openModal,
  product,
  setDataModal,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(0);

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

  const handleSetDataModalAndOpen = (itemProduct, event) => {
    if (event.type === "click") {
      setOpenModal(!openModal);
      setDataModal(itemProduct);
    }
  };

  return (
    <div className="itemCard-container">
      <img className="img-details-container" src={image} alt={image} />
      <div
        role="button"
        tabIndex="0"
        onKeyDown={() => {}}
        onClick={(event) => {
          handleSetDataModalAndOpen(product, event);
        }}
        className="description-details-container"
      >
        <h2>{productName}</h2>
        <p>{ingredientsText.substr(0, 40)}...</p>
      </div>
      <span
        className={`btnNutriScoreLiButton btn${nutriScoreGrade.toUpperCase()}`}
      >
        {nutriScoreGrade.toUpperCase()}
      </span>
      <div className="icons-details-container">
        <span
          role="button"
          tabIndex="0"
          onKeyDown={() => {}}
          onClick={(event) => handleClickIsFavorite(event)}
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
  productName: PropTypes.string,
  ingredientsText: PropTypes.string,
  nutriScoreGrade: PropTypes.string,
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
  product: PropTypes.shape({
    image: PropTypes.string,
    productName: PropTypes.string,
    ingredientsText: PropTypes.string,
    nutriScoreGrade: PropTypes.string,
  }).isRequired,
  setDataModal: PropTypes.func.isRequired,
};

ItemCard.defaultProps = {
  productName: "There are not details",
  ingredientsText: "There are not details",
  nutriScoreGrade: "There are not details",
};

export default ItemCard;
