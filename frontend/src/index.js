import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// redux
import { Provider } from "react-redux";
import store from "./store.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
