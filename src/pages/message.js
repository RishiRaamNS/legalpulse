import React, { Component } from "react";
import { ReactDOM } from "react";
import { CiCircleMore } from "react-icons/ci";
import Navbar from "../components/Navbar";
import { LuMessagesSquare, LuSettings2 } from "react-icons/lu";
import {FiSearch} from "react-icons/fi"

export default function Message() {
  return (
    <div>
      <Navbar hide={{display: 'none'}}/>
      <div className="message">
        <div className="message-left-side ">
          <div>
            <h1 className="message-left-heading">Messages</h1>
            <CiCircleMore className="message-more-icon" />
          </div>
          <div className="inputwithicon">
          <FiSearch className="message-search-icon"/>
          <input
            className="message-search-bar"
            type="text"
            placeholder="      Search"
          />
          </div>
          
          <div className="message-left-bottom">
            <div className="message-flex-container">
              <LuMessagesSquare className="message-icon" />
              <h1>All Conversations</h1>
              <LuSettings2 className="message-setting-icon" />
            </div>
            <p className="message-left-paragraph">Conversation will appear here</p>
          </div>
        </div>

        <div className="message-right-side">
          <img src="/message-img.svg" className="message-image"/>
          <h1 className="message-right-heading">Welcome to messages</h1>
          <p className="message-right-paragraph">Once you connect with a professional, you'll be able to chat and collaborate here</p>
       <button className="message-search-btn btn btn-primary">Search for talent</button>
        </div>
      </div>
    </div>
  );
}
