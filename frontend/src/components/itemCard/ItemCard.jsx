import pizza from "@assets/pizza.png";
import { useState } from "react";

function ItemCard() {
  const [quantity, setQuantity] = useState(0);

  const handleClickAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleClickRemove = () => {
    setQuantity(quantity - 1);
  };

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

  

        <span className="quantity">Quantité =&gt; {quantity}</span>
        <span className="material-symbols-outlined">star</span>
      </div>
    </div>
  );
}

export default ItemCard;
