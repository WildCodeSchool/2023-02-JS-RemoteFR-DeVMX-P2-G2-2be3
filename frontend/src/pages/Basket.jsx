import PropTypes from "prop-types";
import Header from "../components/header/Header";
import NetworkFooter from "../components/NetworkFooter";
import ButtonReturn from "../components/basket/ButtonReturn";
import Receipt from "../components/basket/BasketReceipt";
import ButtonValide from "../components/basket/ButtonValide";
import "../style/Basket/Basket.css";
import "../style/Basket/BasketReceipt.css";
import "../style/Header.css";
import "../style/Basket/ModalButtonValide.css";

function Basket({ user, cartItems, handleRemoveItem, handleAddItem }) {
  return (
    <div className="basket">
      <Header user={user} />
      <div className="basketTicketContainer">
        <ButtonReturn />
        <Receipt
          handleRemoveItem={handleRemoveItem}
          handleAddItem={handleAddItem}
          cartItems={cartItems}
        />
        <ButtonValide />
      </div>
      <NetworkFooter />
    </div>
  );
}

Basket.propTypes = {
  user: PropTypes.string.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
};

export default Basket;
