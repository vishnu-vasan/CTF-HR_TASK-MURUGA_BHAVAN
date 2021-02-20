import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  const [click, setclick] = useState(false);
  const handleClick = () => {
    setclick(!click);
  };
  const closeMobileMenu = () => {
    setclick(false);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            HMB <i className="fas fa-utensils-alt"></i>
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
              <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
                Menu
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
