import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <h1>Sai</h1>
      </Link>
      <ul>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/services">Services</Link>
        <Link className="link" to="/contact">Contact</Link>
      </ul>
    </div>
  );
};

export default Navbar;
