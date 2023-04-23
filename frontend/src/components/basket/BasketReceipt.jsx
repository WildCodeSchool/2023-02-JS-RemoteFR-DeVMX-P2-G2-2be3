import { useContext } from "react";
import logoNutridriveNB from "../../assets/logoNutridriveNB.png";
import qrcode from "../../assets/qrcode.png";
import BasketQuantityProductContext from "../../services/context";

function Receipt() {
  const { organizedBasketInfo } = useContext(BasketQuantityProductContext);
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
        {organizedBasketInfo &&
          organizedBasketInfo.map((product) => (
            <div key={product.occurrence}>
              <span>{product.productBasketName}</span>
              <span>.......</span>
              <span>{product.occurrence}</span>
            </div>
          ))}
      </div>
      <img className="img-qrcode" src={qrcode} alt="QR Code" />
      <h1>MERCI DE VOTRE VISITE</h1>
      <h1>A BIENTÔT</h1>
    </div>
  );
}

export default Receipt;
