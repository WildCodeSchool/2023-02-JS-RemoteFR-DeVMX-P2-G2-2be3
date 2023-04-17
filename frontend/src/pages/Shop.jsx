/* eslint-disable import/no-unresolved */
import ButtonBasket from "@components/ButtonBasket";
import ItemCard from "@components/itemCard/ItemCard";
import SearchBar from "@components/SearchBar";
import NetworkFooter from "@components/NetworkFooter";
import ImageLogo from "@assets/NutriDrive_02_02.jpeg";
import CategorySelect from "@components/shop/CategorySelect";
import "../style/Shop.css";

function Shop() {
  return (
    <div>
      <header>
        <img src={ImageLogo} alt="" />
        <div>
          <h3>Bonjour Toto</h3>
        </div>
        <ButtonBasket />
      </header>
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
