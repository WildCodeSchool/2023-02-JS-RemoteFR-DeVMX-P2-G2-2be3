/* eslint-disable import/no-unresolved */
import Header from "@components/header/Header";
import NetworkFooter from "@components/NetworkFooter";
import ButtonReturn from "@components/basket/ButtonReturn";
import Receipt from "@components/basket/BasketReceipt";
import ButtonValide from "@components/basket/ButtonValide";
import "../style/BasketReceipt.css";

function Basket() {
  return (
    <div>
      <Header />
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
