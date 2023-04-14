/* eslint-disable import/no-unresolved */
import ButtonBasket from "@components/ButtonBasket";
import ButtonReturn from "@components/basket/ButtonReturn";
import Receipt from "@components/basket/Receipt";
import ButtonValide from "@components/basket/ButtonValide";

function Basket() {
  return (
    <div>
      <header>
        <ButtonBasket />
      </header>

      <ButtonReturn />
      <Receipt />
      <ButtonValide />
    </div>
  );
}

export default Basket;
