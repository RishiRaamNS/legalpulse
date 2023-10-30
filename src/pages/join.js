import React , {useState} from 'react';
import Getstartnavbar from '../components/getstartnavbar';
import { Link, useNavigate } from 'react-router-dom';



function Join() {
  const [selectedOption, setSelectedOption] = useState("Join as a Client");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const navigate = useNavigate();

function handleClick(){
   if (selectedOption === "Join as a Client") {
      navigate("/signup-client")
    } else {
     navigate("/signup-provider")
    }
}

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
          <input 
           type="radio"
           name="joinOption" 
           value="Join as a Client"
           checked={selectedOption === "Join as a Client"}
            onChange={handleOptionChange}/>
          <p>I'm a client, hiring for a project</p>
        </label>
        <label className="option freelancer">
          <div className="image-container">
            <img src="/Legal.svg" alt="Freelancer" />
          </div>
          <input 
                 type="radio" 
                 name="joinOption" 
                 value="Join as a Freelancer"
                 checked={selectedOption === "Join as a Freelancer"}
                 onChange={handleOptionChange} />
          <p>I'm a freelancer, looking for work</p>
        </label>
      </div>
      <p>Already have an account? <Link  to="/login">Log In</Link></p>
      <div>
      <button type="submit" onClick={handleClick} >{selectedOption }</button>
  </div>
    </div>
    </div>
    
  </div>
  )
}

export default Join;