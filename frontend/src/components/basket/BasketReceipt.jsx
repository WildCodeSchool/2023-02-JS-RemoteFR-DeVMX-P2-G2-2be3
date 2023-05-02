import { PropTypes } from "prop-types";
import logoNutridriveNB from "../../assets/logoNutridriveNB.png";
import qrcode from "../../assets/qr_code.png";
import BasketReceiptQuantityButtons from "./BasketReceiptQuantityButtons";

function Receipt({ cartItems, handleRemoveItem, handleAddItem }) {
  return (
    <div className="receiptContainer">
      <img
        className="img-nutridrive_logo"
        src={logoNutridriveNB}
        alt="Logo NutriDrive noir et blanc"
      />
      <h2>
        Vous avez été reçu par <br />
        Micheline
      </h2>
      <div className="receipt-details">
        {cartItems &&
          cartItems.map((item) => (
            <div key={item.id}>
              <span>{item.product_name_fr}</span>
              <span>........</span>
              <span>{item.quantity}</span>
              <BasketReceiptQuantityButtons
                handleRemoveItem={handleRemoveItem}
                handleAddItem={handleAddItem}
                cartItems={cartItems}
                itemInReceipt={item}
              />
            </div>
          ))}
      </div>
      <img className="img-qrcode" src={qrcode} alt="QR Code" />
      <h1>MERCI DE VOTRE VISITE</h1>
      <h1>A BIENTÔT</h1>
    </div>
  );
}

Receipt.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
};

export default Receipt;
