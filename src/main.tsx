import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Global } from "./global/styles.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Global />
  </React.StrictMode>
);
