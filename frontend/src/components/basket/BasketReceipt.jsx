import { useContext } from "react";
import logoNutridriveNB from "../../assets/logoNutridriveNB.png";
import qrcode from "../../assets/qrcode.png";
import QuantityContext from "../../services/context";

function Receipt() {
  const { basketProduct } = useContext(QuantityContext);
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
        <p>
          {basketProduct.productName}.....................
          {basketProduct.quantityProduct}
        </p>
        <p>Céréales Bjorg, flocon..................................x2</p>
        <p>Pizza, tomate, mozza....................................x1</p>
        <p>Céréales Bjorg, flocon..................................x2</p>
        <p>Pizza, tomate, mozza....................................x1</p>
        <p>Céréales Bjorg, flocon..................................x2</p>
        <p>Pizza, tomate, mozza....................................x1</p>
        <p>Céréales Bjorg, flocon..................................x2</p>
        <p>Pizza, tomate, mozza....................................x1</p>
        <p>Céréales Bjorg, flocon..................................x2</p>
      </div>
      <img className="img-qrcode" src={qrcode} alt="QR Code" />
      <h1>MERCI DE VOTRE VISITE</h1>
      <h1>A BIENTÔT</h1>
    </div>
  );
}

export default Receipt;
