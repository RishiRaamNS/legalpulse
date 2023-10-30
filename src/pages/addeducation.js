import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import Getstartnavbar from '../components/getstartnavbar'
import Getstartbottomnav from "../components/getstartbottomnav"
import { Link } from 'react-router-dom';

function Education() {
  return (
    <div className="Education">
      <Getstartnavbar />
      <div className="content">
        <h1 className="heading">
          Clients like to know what you know - add your education here.{' '}
        </h1>
        <p>
          You don't have to have a degree. Adding any relevant education helps make your profile more visible.
        </p>
      </div>
      <div className="add-experience">
        <AiFillPlusCircle className="icon" />
        <p>Add Experience</p>
      </div>
      <div className="check-box-div">
      <label className="checkbox">
        <input type="checkbox" className="check-box" />
        Nothing to add? Check the box and keep going
        <span className="checkmark"></span>
      </label>
    </div>
    <Link to='/getting-started/experience'>
    <Getstartbottomnav botButton="Add Your Experience" />
    </Link>
    </div>
  )
}

export default Education