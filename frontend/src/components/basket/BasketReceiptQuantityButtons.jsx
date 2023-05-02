import PropTypes from "prop-types";

import "../../style/Basket/BasketReceiptQuantityButtons.css";

function BasketReceiptQuantityButtons({
  cartItems,
  handleRemoveItem,
  handleAddItem,
  itemInReceipt,
}) {
  const itemClickedInReceipt = cartItems.find(
    (item) => item.id === itemInReceipt.id
  );
  return (
    <div className="receipt-quantity-buttons-container">
      <button
        type="button"
        onClick={() => handleRemoveItem(itemClickedInReceipt)}
        className="receipt-quantity-buttons"
      >
        <span className="material-symbols-outlined receipt-quantity-buttons-icons">
          remove
        </span>
      </button>
      <button
        type="button"
        onClick={() => handleAddItem(itemClickedInReceipt)}
        className="receipt-quantity-buttons"
      >
        <span className="material-symbols-outlined receipt-quantity-buttons-icons">
          add
        </span>
      </button>
    </div>
  );
}

BasketReceiptQuantityButtons.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  itemInReceipt: PropTypes.shape().isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
};

export default BasketReceiptQuantityButtons;
