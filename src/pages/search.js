import React from 'react'
import Navbar from '../components/Navbar'
import Searchprofile from '../components/searchprofile'
import {FiSearch} from "react-icons/fi"
import { Link } from 'react-router-dom'
function search() {
  return (
      <div className='searchlisting'>
        <Navbar hide1={{display: 'none'}} />
        <div className='search--grid-container'>
          <div className='search--left-side'>
            <h1 className='filter--heading'>Filter By</h1>
            <h2 className='filter--subheading'>Location</h2>
            <input className='filter--location'></input>
            <h2 className='filter--subheading'>Languages known</h2>
            <input type='radio' className='filter--option'></input>
            <label>English</label>
            <br></br>
            <input type='radio' className='filter--option'></input>
            <label>Tamil</label>
            <br></br>
            <input type='radio' className='filter--option'></input>
            <label>Hindi</label>
            <h2 className='filter--subheading'>Practice Areas</h2>
            <input type='checkbox' className='filter--option'></input>
            <label>Criminal Lawyer</label>
            <br></br>
            <input type='checkbox' className='filter--option'></input>
            <label>Family Lawyer</label>
            
          </div>
          <div className='search--right-side'>
            <input className='search--search-bar'></input>
            <FiSearch className='search--search-icon'/>
         <Link to="/profile" className='blah-blah'>
  <Searchprofile name={"Tamizhselvan"} />       
            <Searchprofile name={"Nito Tony"} />  </Link>   
          </div>
          </div>
     </div>
  )
}

export default search