import Header from "../components/header/Header";
import NetworkFooter from "../components/NetworkFooter";
import ButtonReturn from "../components/basket/ButtonReturn";
import Receipt from "../components/basket/BasketReceipt";
import ButtonValide from "../components/basket/ButtonValide";

import "../style/Basket/Basket.css";
import "../style/Basket/BasketReceipt.css";
import "../style/Header.css";
import "../style/Basket/ModalButtonValide.css";

function Basket() {
  return (
    <div className="basket">
      <header>
        <Header />
      </header>
      <main>
        <ButtonReturn />
        <Receipt />
      </main>
      <ButtonValide />
      <footer>
        <NetworkFooter />
      </footer>
    </div>
  );
}

export default Basket;
