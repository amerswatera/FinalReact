import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "react-toastify/dist/ReactToastify.css";

//axios
import axios from "axios";
//add this url before every axios request
//if the url is relative
//if the url has http it will not add baseUrl
axios.defaults.baseURL = "http://localhost:8181/api";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("tokenKey");
  if (token) {
    //if token saved in localStorage
    config.headers["token"] = token;
  }
  config.headers["Content-Type"] = "application/json";
  return config;
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
