import React from "react";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const Signup = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="signup">
      <nav className="signup-navbar">
        <h1>LegalPulse</h1>
        <p>
          Here to hire talent? <a href="">Join as a client</a>
        </p>
      </nav>
      <div className="main">
        <h1>Sign up to get clients</h1>
        <div className="names">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <div className="email-pass">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="dropdown">
          <div
            className="dropbtn"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <p>select state</p>
            <AiFillCaretDown />
          </div>
          <div
            id="myDropdown"
            className={`dropdown-menu ${open ? "active" : "inactive"}`}
          >
            <p>thilak</p>
            <p>thangam</p>
          </div>
        </div>
        <div className="check-box-div">
          <label>
            <input type="checkbox" className="check-box" />
            Send me helpful emails.
            <span></span>
          </label>
          <label>
            <input type="checkbox" className="check-box" />
            Yes, I understand and agree to the{" "}
            <a href="">LegalPulse Terms of Service</a>, including the{" "}
            <a href="">Using Agreement</a> and <a href="">Privacy Policy</a>
          </label>
        </div>
        <div className="create-btn">
          <Link to="/getting-started/join">Create my account</Link>
        </div>
        <div className="alter">
          <p>
            Already have an account? <a href="">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
