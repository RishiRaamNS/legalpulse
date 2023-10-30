import React , {Component} from "react";
import { ReactDOM } from "react";
import { CiCircleMore } from "react-icons/ci";
import Navbar from "../components/Navbar";

export default function Message(){
return ( 
  <div>
    <Navbar />
    <div className="message">
      <div className="message-left-side">
      <div className="message-flex-container">
      <h1 className="message-left-heading">All messages</h1>
<CiCircleMore />
      </div>

<input className="message-search-bar" type="text"></input>
      </div>
      <div className="message-right-side">
<h1 className="message-right-heading">Welcome to messages</h1>
      </div>
    </div>
  </div> 
)

}