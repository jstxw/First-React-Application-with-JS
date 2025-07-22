import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/Home.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//gives the entire app the ability to use slash routes
