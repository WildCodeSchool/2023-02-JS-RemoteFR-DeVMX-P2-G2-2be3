import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Basket from "./pages/Basket";

import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsFavorite, setCartItemsFavorite] = useState([]);

  const handleClickUser = (event) => {
    setUser(event);
  };

  const handleAddItem = (clickedItem) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, quantity: 1 }];
    });
  };

  const handleRemoveItem = (clickedItem) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === clickedItem.id) {
          if (item.quantity === 1) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        }
        return [...ack, item];
      }, [])
    );
  };

  const handleFavoriteItem = (clickedItem) => {
    setCartItemsFavorite((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        if (isItemInCart.isFavorite) {
          return prev.map((item) =>
            item.id === clickedItem.id ? { ...item, isFavorite: false } : item
          );
        }
        return prev.map((item) =>
          item.id === clickedItem.id ? { ...item, isFavorite: true } : item
        );
      }
      return [...prev, { ...clickedItem, isFavorite: true }];
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Home handleClickUser={handleClickUser} />} />
      <Route
        path="/shop"
        element={
          <Shop
            user={user}
            setUser={setUser}
            handleRemoveItem={handleRemoveItem}
            handleAddItem={handleAddItem}
            handleFavoriteItem={handleFavoriteItem}
            cartItems={cartItems}
            cartItemsFavorite={cartItemsFavorite}
          />
        }
      />
      <Route
        path="/basket"
        element={
          <Basket
            user={user}
            setUser={setUser}
            cartItems={cartItems}
            handleRemoveItem={handleRemoveItem}
            handleAddItem={handleAddItem}
          />
        }
      />
    </Routes>
  );
}

export default App;
