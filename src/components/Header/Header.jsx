import React from "react";
import "./Header.css";
import logo from "../../../../ema-john/src/assets/images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <img src={logo} alt="logo" />
        <div>
          <Link to="/">Shop</Link>
          <Link to="/orders">Order Review</Link>
          <Link to="/inventory">Manage Inventory</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
