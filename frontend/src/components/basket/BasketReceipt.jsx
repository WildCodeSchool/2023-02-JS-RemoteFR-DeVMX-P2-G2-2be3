/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import logoNutridriveNB from "@assets/logoNutridriveNB.png";
import qrcode from "@assets/qr_code.png";

function Receipt() {
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
        <p>Pizza, tomate, mozza....................................x1</p>
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
