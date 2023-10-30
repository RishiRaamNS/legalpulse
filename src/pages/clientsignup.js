import React from "react";
import { Link } from "react-router-dom";
export default function Clientsignup() {
  return (
    <div className="Signup">
      <div className="login--flex-wrapper">
        <div className="login--left-container">
          <img src="/login.svg" className="login--hero-img" />
        </div>
        <div className="login--right-container">
          <div className="Container login--right-container">
            <h1 className="container--heading">Sign up</h1>
            <p className="para">Enter your details to get started</p>
            <input type="email" className="input first-input"></input>
            <span class="floating-label floating-label-1">Email</span>
            <input type="password" className="input second-input"></input>
            <span class="floating-label floating-label-2">Password</span>
            <p className="left-align">Have trouble sigining in?</p>
            <Link to="/" className="btn btn-primary container--btn">
              Sign up
            </Link>
            <p className="container--footer-text">
              Already have an account?
              <Link to="/login" className="container--footer-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
