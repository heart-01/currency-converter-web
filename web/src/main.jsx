import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import { getConfig } from "./config/config.js";
import "./index.css";
import App from "./App";

const Auth0ProviderConfig = ({ children }) => {
  const config = getConfig();
  
  const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    redirect_uri: window.location.origin,
    authorizationParams: {
      ...(config.audience ? { audience: config.audience } : null),
    },
  };

  return <Auth0Provider {...providerConfig}>{children}</Auth0Provider>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Auth0ProviderConfig>
      <App />
    </Auth0ProviderConfig>
  </Router>
);
