import PropTypes from "prop-types";

import "../../style/shopStyle/itemCard/ItemCardQuantityButton.css";

function ItemCardQuantityButton({ icon }) {
  return (
    <button type="button">
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
}

ItemCardQuantityButton.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default ItemCardQuantityButton;
