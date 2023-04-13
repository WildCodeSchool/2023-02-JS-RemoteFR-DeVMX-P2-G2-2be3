import ButtonBasket from "@components/ButtonBasket";
import ItemCard from "@components/itemCard/ItemCard";
import SearchBar from "@components/SearchBar";

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
    </div>
  );
}

export default Shop;

