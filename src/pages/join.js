import React from 'react';
import Getstartnavbar from '../components/getstartnavbar';
import Getstartbottomnav from '../components/getstartbottomnav';
import { Link } from 'react-router-dom';

function Submit(){

}

function Join() {
  var isRegistered;
  return (
    <div className="join">
      <Getstartnavbar />
        <div className='join-main'>
        <div className="Head">
      <h1>Join as a Client or Freelancer</h1>
      <p>Choose one of the following options:</p>
      <div className="horizontal-options">
        <label className="option client">
          <div className="image-container">
            <img src="/client.svg" alt="Client" />
          </div>
          <input type="radio" name="joinOption" value="client" isRegistered="true"/>
          <p>I'm a client, hiring for a project</p>
        </label>
        <label className="option freelancer">
          <div className="image-container">
            <img src="/Legal.svg" alt="Freelancer" />
          </div>
          <input type="radio" name="joinOption" value="freelancer" isRegistered="true"/>
          <p>I'm a freelancer, looking for work</p>
        </label>
      </div>
      <p>Already have an account? <Link  to="/login">Log In</Link></p>
      <div>
      <button type="submit">{ isRegistered ? "Join as a Client" : "Apply as a Freelancer"}</button>
  </div>
    </div>
    </div>
    
  </div>
  )
}

export default Join;