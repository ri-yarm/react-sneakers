import React from "react";

import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  return (
    <div className="page clear">
      <div className="page__container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
