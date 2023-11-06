import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AdminLayout from "./view/admin/layout/layout";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
