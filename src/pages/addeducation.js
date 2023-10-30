import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import Getstartnavbar from '../components/getstartnavbar'
import Getstartbottomnav from "../components/getstartbottomnav"
import { Link } from 'react-router-dom';

function Education() {
  return (
    <div className="Education">
      <Getstartnavbar />
      <div className='bb'> 
      <div className="content">
        <h1 className="heading">
          Clients like to know what you know - add your education here.{' '}
        </h1>
        <p style={{fontWeight: "500"}}>
          You don't have to have a degree. Adding any relevant education helps make your profile more visible.
        </p>
      </div>

      <div className="add-experience">
      <div className='inside-Box1'> 
      <div className='inside-Box'>
      <AiFillPlusCircle className="icon" />
       <p>Add Education</p>
      </div>
     
      </div>
      </div>
      <div className="check-box-div kk">
         <label className="checkbox">
        <input type="checkbox" className="check-box" />
        Nothing to add? Check the box and keep going
        <span className="checkmark"></span>
         </label>
      </div></div>
      
    <Link to='/getting-started/certification'>
    <Getstartbottomnav botButton="Next, add your certifications" />
    </Link>
    </div>
  )
}

export default Education