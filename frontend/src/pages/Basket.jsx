/* eslint-disable import/no-unresolved */
import ButtonBasket from "@components/ButtonBasket";
import ButtonReturn from "@components/basket/ButtonReturn";
import Receipt from "@components/basket/Receipt";
import ButtonValide from "@components/basket/ButtonValide";
import ImageLogo from "@assets/NutriDrive_02_02.jpeg";

function Basket() {
  return (
    <div>
      <header>
        <img src={ImageLogo} alt="" />
        <ButtonBasket />
      </header>

      <ButtonReturn />
      <Receipt />
      <ButtonValide />
    </div>
  );
}

export default Basket;
