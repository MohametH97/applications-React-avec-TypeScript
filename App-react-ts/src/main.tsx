import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Le "!" indique à TypeScript que l'élément #root existe bien dans index.html.
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
