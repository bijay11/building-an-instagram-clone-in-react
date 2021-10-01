import React from "react";
import ReactDOM from "react-dom";
import { firebase, FieldValue } from "./lib/firebase";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
