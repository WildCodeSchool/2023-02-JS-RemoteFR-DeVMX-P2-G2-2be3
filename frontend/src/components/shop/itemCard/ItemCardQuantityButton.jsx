import PropTypes from "prop-types";

import "../../../style/shopStyle/itemCard/ItemCardQuantityButton.css";

function ItemCardQuantityButton({ product, handleRemoveItem, handleAddItem }) {
  return (
    <>
      <button
        type="button"
        onClick={() => handleRemoveItem(product)}
        className="itemCard-quantity-button"
      >
        <span className="material-symbols-outlined">remove</span>
      </button>
      <button
        type="button"
        onClick={() => handleAddItem(product)}
        className="itemCard-quantity-button"
      >
        <span className="material-symbols-outlined">add</span>
      </button>
    </>
  );
}

ItemCardQuantityButton.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    productName: PropTypes.string,
    ingredientsText: PropTypes.string,
    nutriScoreGrade: PropTypes.string,
  }).isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
};

export default ItemCardQuantityButton;
