// import { PropTypes } from "prop-types;";

function CategorySelect() {
  return (
    <div>
      <select>
        <option value="french-cheeses">Fromages Français</option>
        <option value="coffees">Cafe</option>
        <option value="pizzas">Pizzas</option>
        <option value="rices">Produit Laitiers</option>
        <option value="bonbons">Bonbons</option>
        <option value="brioches">Fruits de mer</option>
      </select>
    </div>
  );
}

CategorySelect.propTypes = {};

export default CategorySelect;
