import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import BackendApp from "./BackendApp";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <BackendApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);