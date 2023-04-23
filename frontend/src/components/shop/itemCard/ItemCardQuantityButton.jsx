import { useContext, useState } from "react";
import { PropTypes } from "prop-types";
import BasketQuantityProductContext from "../../../services/context";
import "../../../style/shopStyle/itemCard/ItemCardQuantityButton.css";

function ItemCardQuantityButton({ product }) {
  const { handleClickRemove, handleClickAdd } = useContext(
    BasketQuantityProductContext
  );
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <span>{quantity}</span>

      <button
        type="button"
        onClick={() => {
          if (quantity > 0) {
            setQuantity(quantity - 1);
          }
          handleClickRemove(product.id, product.product_name_fr, quantity);
        }}
        className="itemCard-quantity-button"
      >
        <span className="material-symbols-outlined"> remove</span>
      </button>
      <button
        type="button"
        onClick={() => {
          setQuantity(quantity + 1);
          handleClickAdd(product.id, product.product_name_fr, quantity);
        }}
        className="itemCard-quantity-button"
      >
        <span className="material-symbols-outlined"> add</span>
      </button>
    </div>
  );
}

ItemCardQuantityButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    product_name_fr: PropTypes.string.isRequired,
  }),
};

ItemCardQuantityButton.defaultProps = {
  product: "There are not product",
};

export default ItemCardQuantityButton;
