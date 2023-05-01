import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import QRcode from "qrcode";
import logoNutridriveNB from "../../assets/logoNutridriveNB.png";
// import qrcode from "../../assets/qr_code.png";
import BasketReceiptQuantityButtons from "./BasketReceiptQuantityButtons";

function Receipt({ cartItems, handleRemoveItem, handleAddItem }) {
  const [qrcode, setQrcode] = useState("");

  useEffect(() => {
    const cartItemsQrcode = cartItems.map(
      (item) => `${item.product_name_fr}.......X${item.quantity}\n`
    );

    QRcode.toDataURL(cartItemsQrcode, (err, url) => {
      return setQrcode(url);
    });
  }, [cartItems]);
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
            <div className="item-receipt" key={item.id}>
              <span className="item-receipt-title">{item.product_name_fr}</span>
              <span className="item-receipt-space">........</span>
              <span className="item-receipt-quantity">{item.quantity}</span>
              <BasketReceiptQuantityButtons
                handleRemoveItem={handleRemoveItem}
                handleAddItem={handleAddItem}
                cartItems={cartItems}
                itemInReceipt={item}
              />
            </div>
          ))}
      </div>
      {cartItems.length !== 0 && (
        <img className="img-qrcode" src={qrcode} alt="QR Code" />
      )}
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
