/* eslint-disable import/no-unresolved */
import ButtonBasket from "@components/ButtonBasket";
import ItemCard from "@components/itemCard/ItemCard";
import SearchBar from "@components/SearchBar";

import "../style/Shop.css";

function Shop() {
  return (
    <div>
      <header>
        <ButtonBasket />
      </header>
      <SearchBar />
      <section className="itemCard-section">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </section>
    </div>
  );
}

export default Shop;
