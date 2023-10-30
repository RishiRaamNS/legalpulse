import React from "react";
import { Link } from "react-router-dom";
import {BiUserCircle} from "react-icons/bi"
export default function Navbar({hide, hide1}) {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <h1 className="navbar-brand navbar-legal">LegalPulse</h1>
        <div className="navbar--right-side">
          <a className="nav-link">Learn</a>
          <a className="nav-link">About</a>
          <Link to="/login" className="nav-link" style={hide}>Login</Link>
          <Link to='/getting-started/join' className="btn btn-primary" style={hide}>Sign up</Link>
<BiUserCircle className="nav-link nav-icon" style={hide1}/>
        </div>
      </div>
    </nav>
  );
}

