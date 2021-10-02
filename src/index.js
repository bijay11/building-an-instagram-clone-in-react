import React from "react";
import ReactDOM from "react-dom";
import { firebase, FieldValue } from "./lib/firebase";
import FirebaseContext from "./context/firebase";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
