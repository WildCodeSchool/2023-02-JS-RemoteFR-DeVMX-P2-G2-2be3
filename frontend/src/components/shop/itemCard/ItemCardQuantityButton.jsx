import PropTypes from "prop-types";

import "../../../style/shopStyle/itemCard/ItemCardQuantityButton.css";

function ItemCardQuantityButton({ icon, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="itemCard-quantity-button"
    >
      <span className="material-symbols-outlined"> {icon}</span>
    </button>
  );
}

ItemCardQuantityButton.propTypes = {
  icon: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ItemCardQuantityButton;
