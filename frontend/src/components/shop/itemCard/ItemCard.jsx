// import { useState } from "react";
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
  handleRemoveItem,
  handleAddItem,
  handleFavoriteItem,
  cartItems,
  cartItemsFavorite,
}) {
  const existingItem = cartItems.find((item) => item.id === product.id);

  const existingFavoriteItem = cartItemsFavorite.find(
    (favoriteItem) => favoriteItem.id === product.id
  );

  const handleSetDataModalAndOpen = (itemProduct, event) => {
    if (event.type === "click") {
      setOpenModal(!openModal);
      setDataModal(itemProduct);
    }
  };

  return (
    <div className="itemCard-container">
      <div className="imgContainer">
        <img className="img-details-container" src={image} alt={image} />
      </div>
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
          onClick={() => handleFavoriteItem(product)}
          className={
            existingFavoriteItem && existingFavoriteItem.isFavorite === true
              ? "material-symbols-outlined favorite-icon isFavorite"
              : "material-symbols-outlined favorite-icon"
          }
        >
          star
        </span>
        <span>{existingItem ? existingItem.quantity : 0}</span>
        <div className="button-quantity-container">
          <ItemCardQuantityButton
            product={product}
            handleRemoveItem={handleRemoveItem}
            handleAddItem={handleAddItem}
          />
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
    id: PropTypes.string.isRequired,
  }).isRequired,
  setDataModal: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleFavoriteItem: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  cartItemsFavorite: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

ItemCard.defaultProps = {
  productName: "There are not details",
  ingredientsText: "There are not details",
  nutriScoreGrade: "0",
};

export default ItemCard;
