import { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "../components/shop/searchContainer/SearchBar";
import BtnNutriScore from "../components/shop/searchContainer/BtnNutriScore";
import CategorySelect from "../components/shop/searchContainer/CategorySelect";
import ItemCard from "../components/shop/itemCard/ItemCard";
import NetworkFooter from "../components/NetworkFooter";
import Loader from "../components/shop/Loader";
import ItemCardDetailsModal from "../components/shop/itemCard/ItemCardDetailsModal";
import Header from "../components/header/Header";
import useFetch from "../services/useFetch";

import "../style/Shop.css";

function Shop({
  user,
  handleRemoveItem,
  handleAddItem,
  handleFavoriteItem,
  cartItems,
  cartItemsFavorite,
}) {
  const [searchInput, setSearchInput] = useState("");
  const [selectedNutriScore, setSelectedNutriScore] = useState(null);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState(null);

  const urlApiSearchBar = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&json=true&search_terms=${searchInput}&sort_by=unique_scans_n&page_size=24`;
  const { data, loading } = useFetch(urlApiSearchBar);

  return (
    <div className="shop">
      <div>
        <Header user={user} />
        <section className="search-section">
          <SearchBar setSearchInput={setSearchInput} />
          <BtnNutriScore setSelectedNutriScore={setSelectedNutriScore} />
          <CategorySelect setCategory={setSearchInput} />
        </section>
      </div>
      <section className="itemCard-section">
        {loading && <div className="fill-section" />}
        {loading && <Loader />}
        {data &&
          data
            .filter(
              (product) =>
                selectedNutriScore === null ||
                product.nutriscore_grade === selectedNutriScore
            )
            .map((product) => {
              let cleanIngredientsText = "";
              if (product.ingredients_text_fr) {
                cleanIngredientsText = product.ingredients_text_fr.replaceAll(
                  "_",
                  " "
                );
              }
              return (
                <ItemCard
                  key={product.id}
                  image={product.image_front_thumb_url}
                  productName={product.product_name_fr}
                  ingredientsText={cleanIngredientsText}
                  nutriScoreGrade={product.nutriscore_grade}
                  setItemQuantity={setItemQuantity}
                  itemQuantity={itemQuantity}
                  setOpenModal={setOpenModal}
                  openModal={openModal}
                  product={product}
                  setDataModal={setDataModal}
                  handleRemoveItem={handleRemoveItem}
                  handleAddItem={handleAddItem}
                  handleFavoriteItem={handleFavoriteItem}
                  cartItems={cartItems}
                  cartItemsFavorite={cartItemsFavorite}
                />
              );
            })}
        {openModal && (
          <ItemCardDetailsModal
            image={dataModal.image_front_small_url}
            productName={dataModal.product_name_fr}
            genericName={dataModal.generic_name_fr}
            productDetails={
              dataModal.ingredients_text_fr &&
              dataModal.ingredients_text_fr.replaceAll("_", " ")
            }
            nutriScore={dataModal.nutriscore_grade}
            setOpenModal={setOpenModal}
            openModal={openModal}
          />
        )}
      </section>
      <NetworkFooter />
    </div>
  );
}

Shop.propTypes = {
  user: PropTypes.string.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleFavoriteItem: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  cartItemsFavorite: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default Shop;
