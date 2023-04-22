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
        <option value="fromage">Fromages</option>
        <option value="cafe">Cafe</option>
        <option value="pizzas">Pizzas</option>
        <option value="ris">Ris</option>
        <option value="bananes">Bananes</option>
        <option value="lait">Lait</option>
      </select>
    </div>
  );
}

CategorySelect.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default CategorySelect;
