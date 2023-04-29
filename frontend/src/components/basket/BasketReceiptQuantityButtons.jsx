import PropTypes from "prop-types";

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
    <>
      <button
        type="button"
        onClick={() => handleRemoveItem(itemClickedInReceipt)}
        className="itemCard-quantity-button"
      >
        <span className="material-symbols-outlined">remove</span>
      </button>
      <button
        type="button"
        onClick={() => handleAddItem(itemClickedInReceipt)}
        className="itemCard-quantity-button"
      >
        <span className="material-symbols-outlined">add</span>
      </button>
    </>
  );
}

BasketReceiptQuantityButtons.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  itemInReceipt: PropTypes.shape().isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
};

export default BasketReceiptQuantityButtons;
