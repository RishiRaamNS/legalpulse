import React from "react";
import { Link } from "react-router-dom";
import {BiUserCircle} from "react-icons/bi"
export default function Navbar({hide, hide1, show}) {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand navbar-legal">LegalPulse</Link>
        <div className="navbar--right-side">
          <Link to="/learn" className="nav-link">Learn</Link>
          <a className="nav-link">About</a>
          <Link to="/message" className="nav-link nav-linkk" style={show}>Message</Link>
          <Link to="/login" className="nav-link" style={hide}>Login</Link>
          <Link to='/getting-started/join' className="btn btn-primary" style={hide}>Sign up</Link>
<BiUserCircle className="nav-link nav-icon" style={hide1}/>
        </div>
      </div>
    </nav>
  );
}

