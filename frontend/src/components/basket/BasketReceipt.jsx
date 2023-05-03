import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import QRcode from "qrcode";
import logoNutridriveNB from "../../assets/logoNutridriveNB.png";
import ItemCardQuantityButton from "../shop/itemCard/ItemCardQuantityButton";

function Receipt({ cartItems, handleRemoveItem, handleAddItem }) {
  const [qrcode, setQrcode] = useState("");
  const [totalItemsQuantity, setTotalItemsQuantity] = useState(0);

  useEffect(() => {
    const cartItemsQrcode = cartItems.map(
      (item) => `${item.product_name_fr}.......X${item.quantity}\n`
    );

    if (cartItems) {
      const totalQuantity = cartItems.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
      setTotalItemsQuantity(totalQuantity);
    }

    QRcode.toDataURL(
      `${cartItemsQrcode}\n Quantité totale: ${totalItemsQuantity} `,
      { margin: 3, color: { dark: "#333333ff", light: "#EBEDEC00" } },
      (err, url) => {
        return setQrcode(url);
      }
    );
  }, [cartItems, totalItemsQuantity]);
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
              <div className="description-quantity-items">
                <span>{item.product_name_fr.substr(0, 30)}</span>
                <span>
                  {".".repeat(
                    35 -
                      item.product_name_fr.substr(0, 30).length -
                      item.quantity.toString().length
                  )}
                </span>
                <span>{item.quantity}</span>
                <div className="button-change-quantity">
                  <ItemCardQuantityButton
                    product={item}
                    handleRemoveItem={handleRemoveItem}
                    handleAddItem={handleAddItem}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>

      {totalItemsQuantity !== 0 && (
        <span className="total-quantity-receipt">
          Quantité totale: {totalItemsQuantity}
        </span>
      )}
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
