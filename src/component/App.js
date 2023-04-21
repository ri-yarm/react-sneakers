import React from "react";

import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { AsideCart } from "./AsideCart";

function App() {
  return (
    <div className="page clear">
      <div className="page__container">
        <AsideCart />
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
