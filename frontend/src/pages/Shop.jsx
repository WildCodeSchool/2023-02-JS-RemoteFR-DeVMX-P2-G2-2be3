/* eslint-disable import/no-unresolved */
import Header from "@components/header/Header";
import SearchBar from "@components/SearchBar";
import BtnNutriScore from "@components/BtnNutriScore";
import CategorySelect from "@components/shop/CategorySelect";
import ItemCard from "@components/itemCard/ItemCard";
import NetworkFooter from "@components/NetworkFooter";

import "../style/Shop.css";

function Shop() {
  return (
    <div className="shop">
      <Header />
      <section className="search-section">
        <SearchBar />
        <BtnNutriScore />
        <CategorySelect />
      </section>
      <section className="itemCard-section">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </section>
      <NetworkFooter />
    </div>
  );
}

export default Shop;
