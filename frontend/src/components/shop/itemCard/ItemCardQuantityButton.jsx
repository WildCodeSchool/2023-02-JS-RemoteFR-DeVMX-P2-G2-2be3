/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import { useContext } from "react";
import { PropTypes } from "prop-types";
import QuantityContext from "../../../services/context";
import "../../../style/shopStyle/itemCard/ItemCardQuantityButton.css";

function ItemCardQuantityButton({ product }) {
  const { basketProduct, setBasketProduct } = useContext(QuantityContext);

  const handleClickAdd = () => {
    setBasketProduct({
      productName: product.product_name_fr,
      quantityProduct: (basketProduct.quantityProduct += 1),
    });
  };

  const handleClickRemove = () => {
    if (basketProduct.quantityProduct > 0) {
      setBasketProduct({
        productName: product.product_name_fr,
        quantityProduct: (basketProduct.quantityProduct -= 1),
      });
    }
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleClickRemove}
        className="itemCard-quantity-button"
      >
        <span className="material-symbols-outlined"> remove</span>
      </button>
      <button
        type="button"
        onClick={handleClickAdd}
        className="itemCard-quantity-button"
      >
        <span className="material-symbols-outlined"> add</span>
      </button>
    </div>
  );
}

ItemCardQuantityButton.propTypes = {
  product: PropTypes.shape({}),
  // product_name_fr: PropTypes.string,
};

ItemCardQuantityButton.defaultProps = {
  product: "There are not product",
  // product_name_fr: "There is no name",
};

export default ItemCardQuantityButton;
