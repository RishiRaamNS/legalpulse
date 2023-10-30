import Container from "../components/Container";
import React from "react";

export default function Login() {
    return (
      <div className="Login">
        
        <div className="login--flex-wrapper">
          <div className="login--left-container">
            <img src="/login.svg" className="login--hero-img" />
          </div>
          <div className="login--right-container">
            <Container heading={"Welcome back"} btn={"Log In"} link={"/"}/>
          </div>
        </div>
      </div>
    );
  }
  