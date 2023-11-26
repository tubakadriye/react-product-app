import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
// ReactDOM.createRoot()
const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </React.StrictMode>
)