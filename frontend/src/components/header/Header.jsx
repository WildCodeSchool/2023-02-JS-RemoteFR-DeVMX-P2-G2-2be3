/* eslint-disable import/no-unresolved */
import ImageLogo from "@assets/NutriDrive_02_02.jpg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ButtonBasket from "./ButtonBasket";

function Header({ user }) {
  return (
    <header className="top">
      <Link to="/" style={{ width: "auto" }}>
        <img className="imgLogoHeader" src={ImageLogo} alt="Logo NutriDrive" />
      </Link>
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
