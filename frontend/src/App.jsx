/* eslint-disable import/no-unresolved */
import Home from "@pages/Home";
// import Shop from "@pages/Shop"; CLOSE FOR TESTING HOME_PAGE
// import Basket from "@pages/Basket"; CLOSE FOR TESTING HOME_PAGE

import "./App.css";

function App() {
  return (
    <div className="home">
      <Home />
      {/* <Shop /> CLOSE FOR TESTING HOME_PAGE */}
      {/* <Basket /> CLOSE FOR TESTING HOME_PAGE */}
    </div>
  );
}

export default App;
