/* eslint-disable import/no-unresolved */
import ButtonBasket from "@components/ButtonBasket";
import ItemCard from "@components/itemCard/ItemCard";
import SearchBar from "@components/SearchBar";
import NetworkFooter from "@components/NetworkFooter";
import ImageLogo from "@assets/NutriDrive_02_02.jpeg";
import "../style/Shop.css";

function Shop() {
  return (
    <div>
      <header>
        <img src={ImageLogo} alt="" />
        <ButtonBasket />
      </header>
      <SearchBar />
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
