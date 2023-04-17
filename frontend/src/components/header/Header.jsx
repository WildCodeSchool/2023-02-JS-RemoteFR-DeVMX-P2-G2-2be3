/* eslint-disable import/no-unresolved */
// eslint-disable-next-line prettier/prettier
import React from "react";
// eslint-disable-next-line prettier/prettier
import ButtonBasket from "./ButtonBasket";
// eslint-disable-next-line import/order
import ImageLogo from "@assets/NutriDrive_02_02.jpeg";

function Header() {
  return (
    <header>
      <img src={ImageLogo} alt="" />
      <h3>Bonjour Toto</h3>
      <ButtonBasket />
    </header>
  );
}

export default Header;
