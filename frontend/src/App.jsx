/* eslint-disable import/no-unresolved */
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Shop from "@pages/Shop";
import Basket from "@pages/Basket";
import { BasketQuantityProductProvider } from "./services/context";

import "./App.css";

function App() {
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <BasketQuantityProductProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BasketQuantityProductProvider>
  );
}

export default App;
