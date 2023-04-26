/* eslint-disable import/no-unresolved */
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "@pages/Home";
import Shop from "@pages/Shop";
import Basket from "@pages/Basket";

import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const handleClickUser = (event) => {
    setUser(event);
  };
  return (
    <Routes>
      <Route path="/" element={<Home handleClickUser={handleClickUser} />} />
      <Route path="/shop" element={<Shop user={user} />} />
      <Route
        path="/basket"
        element={<Basket user={user} setUser={setUser} />}
      />
    </Routes>
  );
}

export default App;
