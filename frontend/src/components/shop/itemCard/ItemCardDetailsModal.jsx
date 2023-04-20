import PropTypes from "prop-types";
import "../../../style/shopStyle/itemCard/ItemCardDetailsModal.css";

function ItemCardDetailsModal({
  image,
  productName,
  genericName,
  productDetails,
  nutriScore,
  setOpenModal,
  openModal,
}) {
  return (
    <div className="itemCardDetailsModal-container">
      <button
        className="button-modal-details"
        type="button"
        onClick={() => setOpenModal(!openModal)}
      >
        &#10006;
      </button>
      <h2 className="itemCardDetailsModal-title">{productName}</h2>
      <div className="imageAndNutriScore-container">
        <figure>
          <img src={image} alt={genericName} />
          <figcaption>{genericName}</figcaption>
        </figure>
        <span className={`btnNutriScoreIcon btn${nutriScore.toUpperCase()}`}>
          {nutriScore.toUpperCase()}
        </span>
      </div>
      <p>{productDetails}</p>
    </div>
  );
}

ItemCardDetailsModal.propTypes = {
  image: PropTypes.string.isRequired,
  productName: PropTypes.string,
  genericName: PropTypes.string,
  productDetails: PropTypes.string,
  nutriScore: PropTypes.string,
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

ItemCardDetailsModal.defaultProps = {
  productName: "There are not details",
  productDetails: "There are not details",
  genericName: "There are not details",
  nutriScore: "There are not details",
};

export default ItemCardDetailsModal;
