import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithNAvigate from "./auth/Auth0Provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithNAvigate>
        <AppRoutes />
      </Auth0ProviderWithNAvigate>
    </Router>
  </React.StrictMode>
);
