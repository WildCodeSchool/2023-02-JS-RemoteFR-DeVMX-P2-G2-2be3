import PropTypes from "prop-types";
import "../../../style/shopStyle/itemCard/ItemCardDetailsModal.css";

function ItemCardDetailsModal({
  image,
  productName,
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
        X
      </button>
      <h2 className="itemCardDetailsModal-title">ItemCardDetailsModal</h2>
      <div className="imageAndNutriScore-container">
        <figure>
          <img src={image} alt={image} />
          <figcaption>{productName}</figcaption>
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
  productName: PropTypes.string.isRequired,
  productDetails: PropTypes.string.isRequired,
  nutriScore: PropTypes.string.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool.isRequired,
};

export default ItemCardDetailsModal;
