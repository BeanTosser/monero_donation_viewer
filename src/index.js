import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import * as monerojs from "monero-javascript";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  rootElement
);
