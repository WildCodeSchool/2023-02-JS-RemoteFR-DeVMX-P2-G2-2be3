/* eslint-disable import/no-unresolved */
import ButtonBasket from "@components/ButtonBasket";
import Receipt from "@components/basket/Receipt";

function Basket() {
  return (
    <header>
      <ButtonBasket />
      <Receipt />
    </header>
  );
}

export default Basket;
