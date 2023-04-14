/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import logoNutridriveNB from "@assets/logo_nutridrive_nb.png";
import qrcode from "@assets/qrcode.png";

function Receipt() {
  return (
    <div>
      <img
        className="img-nutridrive_logo"
        src={logoNutridriveNB}
        alt="Logo NutriDrive noir et blanc"
      />
      <h2>Vous avez été reçu par Micheline</h2>
      <div className="receipt-details">
        <p>Pizza, tomate, mozza.........</p>
        <p>x..1</p>
        <p>Céréales Bjorg, flocon.......</p>
        <p>x..2</p>
        <p>Pizza, tomate, mozza.........</p>
        <p>x..1</p>
        <p>Céréales Bjorg, flocon.......</p>
        <p>x..2</p>
        <p>Pizza, tomate, mozza.........</p>
        <p>x..1</p>
        <p>Céréales Bjorg, flocon.......</p>
        <p>x..2</p>
        <p>Pizza, tomate, mozza.........</p>
        <p>x..1</p>
        <p>Céréales Bjorg, flocon.......</p>
        <p>x..2</p>
        <p>Pizza, tomate, mozza.........</p>
        <p>x..1</p>
        <p>Céréales Bjorg, flocon.......</p>
        <p>x..2</p>
      </div>
      <img className="img-qrcode" src={qrcode} alt="QR Code" />
      <h1>MERCI DE VOTRE VISITE</h1>
      <h1>A BIENTÔT</h1>
    </div>
  );
}

export default Receipt;
