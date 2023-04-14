/* eslint-disable import/no-unresolved */
import ButtonBasket from "@components/ButtonBasket";
import NetworkFooter from "@components/NetworkFooter";

function Basket() {
  return (
    <div>
      <header>
        <ButtonBasket />
      </header>
      <footer>
        <NetworkFooter />
      </footer>
    </div>
  );
}

export default Basket;
