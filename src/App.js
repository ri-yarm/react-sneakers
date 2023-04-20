import React from "react";

import Header from "./component/Header";
import Main from "./component/Main";
import AsideCart from "./component/AsideCart";

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
