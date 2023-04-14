/* eslint-disable import/no-unresolved */
import ButtonBasket from "@components/ButtonBasket";
import ItemCard from "@components/itemCard/ItemCard";
import SearchBar from "@components/SearchBar";
import NetworkFooter from "@components/NetworkFooter";

function Shop() {
  return (
    <div>
      <header>
        <ButtonBasket />
      </header>
      <SearchBar />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <footer>
        <NetworkFooter />
      </footer>
    </div>
  );
}

export default Shop;
