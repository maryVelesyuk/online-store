import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { LoginProvider } from "./components/hok/LoginProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LoginProvider>
    <App />
  </LoginProvider>
);
