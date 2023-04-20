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
      <div className="modal-details">
        <button
          className="button-modal-details"
          type="button"
          onClick={() => setOpenModal(!openModal)}
        >
          &#10006;
        </button>
        <h2 className="itemCardDetailsModal-title">{productName}</h2>
        <div className="imageAndNutriScore-container">
          <figure className="figureDetailsModal">
            <img className="imgborder s1" src={image} alt={genericName} />
            <figcaption className="figcaption-modal-image">
              {genericName}
            </figcaption>
          </figure>
          <span className={`btnNutriScoreIcon btn${nutriScore.toUpperCase()}`}>
            {nutriScore.toUpperCase()}
          </span>
          <p className="nutri-score-label">Nutri Score</p>
        </div>
        <p className="modal-ingredients-details">{productDetails}</p>
      </div>
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
  nutriScore: "0",
};

export default ItemCardDetailsModal;
