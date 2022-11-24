import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import React from "react";
import { AuthContextProvider } from "./components/Store/auth-context";
import { BrowserRouter } from "react-router-dom";
import "./components/http/axiosinstance"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
);
