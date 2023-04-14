/* eslint-disable import/no-unresolved */
import ButtonBasket from "@components/ButtonBasket";
import NetworkFooter from "@components/NetworkFooter";
import ButtonReturn from "@components/basket/ButtonReturn";
import Receipt from "@components/basket/BasketReceipt";
import ButtonValide from "@components/basket/ButtonValide";
import ImageLogo from "@assets/NutriDrive_02_02.jpeg";
import "../style/BasketReceipt.css";

function Basket() {
  return (
    <div>
      <header>
        <img src={ImageLogo} alt="" />
        <div>
          <h3>Bonjour Toto</h3>
        </div>
        <ButtonBasket />
      </header>
      <ButtonReturn />
      <Receipt />
      <ButtonValide />
      <footer>
        <NetworkFooter />
      </footer>
    </div>
  );
}

export default Basket;
