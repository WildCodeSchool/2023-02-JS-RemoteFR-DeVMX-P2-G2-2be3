/* eslint-disable import/no-unresolved */
import ImageLogo from "@assets/NutriDrive_02_02.jpg";
import ButtonBasket from "./ButtonBasket";

function Header() {
  return (
    <header className="top">
      <img className="imgLogoHeader" src={ImageLogo} alt="Logo NutriDrive" />
      <div className="idBasket">
        <h3>Bonjour Toto</h3>
        <ButtonBasket />
      </div>
    </header>
  );
}

export default Header;
