import React from 'react'
import Navbar from '../components/Navbar'
import {FiSearch} from "react-icons/fi"
import { Link } from 'react-router-dom'
export default function Providerhome({hide}) {
  return (
    <div className='provider-home'>
        <Navbar hide={hide} />
        <div className='provider-home-flex'>
        <div className='provider-home-left'>
        <h1 className='provider-home-heading'>My jobs(0)</h1>
        <p className='provider-home-paragraph'>No jobs till now.</p>
        </div>
<div className='provider-home-right'>
<h1 className='provider-home-heading'>Messages(0)</h1>
        <p className='provider-home-paragraph'>No messages</p>
</div>
       
        </div>
    </div>
  )
}