/* eslint-disable import/no-unresolved */
import ButtonBasket from "@components/ButtonBasket";
import ButtonReturn from "@components/basket/ButtonReturn";
import ButtonValide from "@components/basket/ButtonValide";

function Basket() {
  return (
    <div>
      <header>
        <ButtonBasket />
      </header>

      <ButtonReturn />
      <ButtonValide />
    </div>
  );
}

export default Basket;
