import PropTypes from "prop-types";

function ItemCardQuantityButton({ icon }) {
  return (
    <button type="button" className="material-symbols-outlined">
      {icon}
    </button>
  );
}

ItemCardQuantityButton.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default ItemCardQuantityButton;
