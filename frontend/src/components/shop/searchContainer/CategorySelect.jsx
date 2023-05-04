import { PropTypes } from "prop-types";

import "../../../style/shopStyle/CategorySelect.css";

function CategorySelect({ setCategory }) {
  const handleOnChangeCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  return (
    <div>
      <select
        onChange={(event) => {
          handleOnChangeCategorySelect(event.target.value);
        }}
      >
        <option value="">Toutes Categories</option>
        <option value="abricot">Abricot</option>
        <option value="agneau">Agneau</option>
        <option value="bananes">Bananes</option>
        <option value="beignets">Beignets</option>
        <option value="biscuits">Biscuits</option>
        <option value="boeuf">Boeuf</option>
        <option value="bonbons">Bonbons</option>
        <option value="cafe">Cafe</option>
        <option value="canard">Canard</option>
        <option value="carottes">Carottes</option>
        <option value="cereales">Céréales</option>
        <option value="champignons">Champignons</option>
        <option value="chips">Chips</option>
        <option value="compote">Compote</option>
        <option value="concombre">Concombre</option>
        <option value="crevettes">Crevettes</option>
        <option value="croissants">Croissants</option>
        <option value="dinde">Dinde</option>
        <option value="fraises">Fraises</option>
        <option value="fromage">Fromages</option>
        <option value="gateau">Gateaux</option>
        <option value="lait">Lait</option>
        <option value="melon">Melon</option>
        <option value="pain">Pain</option>
        <option value="pizzas">Pizzas</option>
        <option value="poisson">Poisson</option>
        <option value="porc">Porc</option>
        <option value="poulet">Poulet</option>
        <option value="riz">Riz</option>
        <option value="salade">Salade</option>
        <option value="sorbet">Glaces, Sorbets</option>
        <option value="veau">Veau</option>
        <option value="yaourts">Yaourts</option>
      </select>
    </div>
  );
}

CategorySelect.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default CategorySelect;
