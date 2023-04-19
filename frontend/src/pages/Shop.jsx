/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-unresolved */
import { useState } from "react";
import useFetch from "@services/useFetch";
import Header from "@components/header/Header";
import SearchBar from "@components/shop/searchContainer/SearchBar";
import BtnNutriScore from "@components/shop/searchContainer/BtnNutriScore";
import CategorySelect from "@components/shop/searchContainer/CategorySelect";
import ItemCard from "@components/shop/itemCard/ItemCard";
import NetworkFooter from "@components/NetworkFooter";
import Loader from "@components/shop/Loader";

import "../style/Shop.css";

function Shop() {
  const [searchInput, setSearchInput] = useState("");

  const urlApiSearchBar = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&json=true&search_terms=${searchInput}&sort_by=unique_scans_n&page_size=24`;
  const { data, loading, error } = useFetch(urlApiSearchBar);

  // if (loading) return <Loader />;
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
        {loading && <Loader />}
        {data &&
          data.map((product) => {
            return (
              <ItemCard
                key={product.id}
                image={product.image_front_thumb_url}
                productName={product.product_name_fr}
                ingredientsText={product.ingredients_text_fr}
                nutriScoreGrade={product.nutriscore_grade}
              />
            );
          })}
      </section>
      <footer>
        <NetworkFooter />
      </footer>
    </div>
  );
}

export default Shop;
