/* eslint-disable import/no-unresolved */
import ButtonBasket from "@components/ButtonBasket";
import ButtonReturn from "@components/basket/ButtonReturn";

function Basket() {
  return (
    <div>
      <header>
        <ButtonBasket />
      </header>

      <ButtonReturn />
    </div>
  );
}

export default Basket;
