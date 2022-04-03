import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/LogIn";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/log-in" component={LogIn} />
          <Route path="/Cart" component={Cart} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
