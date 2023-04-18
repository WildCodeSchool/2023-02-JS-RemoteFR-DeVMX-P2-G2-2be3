/* eslint-disable import/no-unresolved */
import ItemCard from "@components/itemCard/ItemCard";
import SearchBar from "@components/SearchBar";
import NetworkFooter from "@components/NetworkFooter";
import CategorySelect from "@components/shop/CategorySelect";
import Header from "@components/header/Header";

import "../style/Shop.css";

function Shop() {
  return (
    <div className="shop">
      <Header />
      <section className="search-section">
        <SearchBar />
        <CategorySelect />
      </section>
      <section className="itemCard-section">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </section>
      <footer>
        <NetworkFooter />
      </footer>
    </div>
  );
}

export default Shop;
