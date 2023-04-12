import pizza from "@assets/pizza.png";

function ItemCard() {
  return (
    <div className="item-container">
      <img className="img-details-container" src={pizza} alt="Pizza" />
      <div className="description-details-container">
        <h2>La pizza tomate</h2>
        <p>Mozzarella, Pesto ...</p>
      </div>
      <span className="nutriScore-icon">A</span>
      <div className="icons-details-container">
        <span className="">A</span>

        <span className="quantity">Quantité =&gt; 200</span>
        <span className="material-symbols-outlined">star</span>
      </div>
    </div>
  );
}

export default ItemCard;
