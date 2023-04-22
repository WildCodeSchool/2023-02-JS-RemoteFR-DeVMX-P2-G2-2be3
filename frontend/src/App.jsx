/* eslint-disable import/no-unresolved */
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Shop from "@pages/Shop";
import Basket from "@pages/Basket";
import QuantityContext from "./services/context";

import "./App.css";

function App() {
  const [basketProduct, setBasketProduct] = useState({
    productName: "",
    quantityProduct: 0,
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <QuantityContext.Provider value={{ basketProduct, setBasketProduct }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </QuantityContext.Provider>
  );
}

export default App;
