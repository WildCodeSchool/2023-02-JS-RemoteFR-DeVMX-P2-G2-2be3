/* eslint-disable import/no-unresolved */
import ImageLogo from "@assets/NutriDrive_02_02.jpg";
import PropTypes from "prop-types";
import ButtonBasket from "./ButtonBasket";

function Header({ user }) {
  return (
    <header className="top">
      <img className="imgLogoHeader" src={ImageLogo} alt="Logo NutriDrive" />
      <div className="idBasket">
        <h3>Bonjour {user}</h3>
        <ButtonBasket />
      </div>
    </header>
  );
}
Header.propTypes = {
  user: PropTypes.string.isRequired,
};

export default Header;
