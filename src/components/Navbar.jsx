import React, { useState, useEffect } from "react";
import { Button } from "./buttons/Button";
import { LogInButton } from "./buttons/LogInButton";
import { CartButton } from "./buttons/CartButton";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            RobotTech
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="/log-in"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                to="/Cart"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Cart
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
          {button && (
            <LogInButton buttonStyle="btn--outline">lOG IN</LogInButton>
          )}
          {button && <CartButton buttonStyle="btn--outline">Cart</CartButton>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
