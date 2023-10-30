import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <h1 className="navbar-brand">LegalPulse</h1>
        <div className="navbar--right-side">
          <a className="nav-link">Learn</a>
          <a className="nav-link">About</a>
          <a className="nav-link">My Profile</a>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to='/getting-started/join' className="btn btn-primary">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

