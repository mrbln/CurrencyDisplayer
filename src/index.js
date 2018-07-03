import React from "react";
import ReactDOM from "react-dom";

import { FetchCurrenciesContainer } from "./FetchCurrenciesContainer";

import "./styles.css";

const App = () => {
  return <FetchCurrenciesContainer />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
