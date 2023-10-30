import React from 'react';

function Join() {
  return (
    <div className="join">
 <div className="join-navbar">
      <div className="join-navbar-brand">
        <a href="/">Legal Pulse</a>
      </div>
    </div>
        <div className='join-main'>
        <div className="Head">
      <h1>Join as a Client or Freelancer</h1>
      <p>Choose one of the following options:</p>
      <div className="horizontal-options">
        <label className="option client">
          <div className="image-container">
            <img src="/client.svg" alt="Client" />
          </div>
          <input type="radio" name="joinOption" value="client" />
          <p>I'm a client, hiring for a project</p>
        </label>
        <label className="option freelancer">
          <div className="image-container">
            <img src="/Legal.svg" alt="Freelancer" />
          </div>
          <input type="radio" name="joinOption" value="freelancer" />
          <p>I'm a freelancer, looking for work</p>
        </label>
      </div>
      <button>Apply</button>
      <p>Already have an account? <a href="#">Log In</a></p>
    </div>
    </div>
  </div>
  )
}

export default Join