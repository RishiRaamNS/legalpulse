import React from "react";
import { Link } from "react-router-dom";
function DropDown(){
 return (<div class="dropdown">
              <a
                class="btn btn-light dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select your state
              </a>

              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Tamilnadu
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Kerala
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                   Karnataka
                  </a>
                </li>
              </ul>
            </div>)
}
export default function Freelancersignup() {
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
            <span className="floating-label floating-label-1">Email</span>
            <input className="input second-input" type="text"></input>
            <span className="floating-label floating-label-2">Full Name</span>
            <input type="password" className="input third-input"></input>
            <span class="floating-label floating-label-3">Password</span>
             <DropDown />

            <Link to="/getting-started/education" className="btn btn-primary container--btn">
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
