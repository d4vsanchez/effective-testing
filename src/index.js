import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "twin.macro";

import App from "./App";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
