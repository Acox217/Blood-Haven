import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/design.css";
import './styles/theme-direct.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Get root element from index.html
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);