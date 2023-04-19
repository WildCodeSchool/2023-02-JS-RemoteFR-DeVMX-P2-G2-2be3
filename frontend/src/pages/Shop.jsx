/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-unresolved */
import { useState } from "react";
// import axios from "axios";
import useFetch from "@services/useFetch";
import Header from "@components/header/Header";
import SearchBar from "@components/SearchBar";
import BtnNutriScore from "@components/BtnNutriScore";
import CategorySelect from "@components/shop/CategorySelect";
import ItemCard from "@components/itemCard/ItemCard";
import NetworkFooter from "@components/NetworkFooter";

import "../style/Shop.css";

function Shop() {
  const [searchInput, setSearchInput] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);

  const urlApiSearchBar = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&json=true&search_terms=${searchInput}&sort_by=unique_scans_n&page_size=24`;
  const { data, loading, error } = useFetch(urlApiSearchBar);

  if (loading)
    return (
      <h2 style={{ textAlign: "center", fontSize: "50px" }}>Loading...</h2>
    );
  if (error) console.log(error);
  if (data) console.log(data);

  return (
    <div className="shop">
      <Header />
      <section className="search-section">
        <SearchBar setSearchInput={setSearchInput} />
        <BtnNutriScore />
        <CategorySelect />
      </section>
      <section className="itemCard-section">
        {data &&
          data.map((product) => {
            return (
              <ItemCard
                key={product.id}
                image={product.image_front_thumb_url}
                productName={product.product_name_fr}
                ingredientsText={product.ingredients_text_fr}
                setItemQuantity={setItemQuantity}
                itemQuantity={itemQuantity}
              />
            );
          })}
      </section>
      <NetworkFooter />
    </div>
  );
}

export default Shop;
