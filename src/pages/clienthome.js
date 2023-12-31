import React from 'react'
import Navbar from '../components/Navbar'
import {FiSearch} from "react-icons/fi"
import { Link } from 'react-router-dom'
export default function Home({hide}) {
  return (
    <div className='home'>
        <Navbar hide={hide} show={{display: 'inline'}}/>
        <div className='home-flex'>
          <div className='home-left'>
            <h1 className='home-heading'>Welcome! Let's hire your first Legal Service Provider</h1>
            <p className='home-paragraph'>It's the fastest way to access quality legal help in India</p>
            <input className='home-search' type='text'></input>
            <FiSearch className='home-searchicon' />
            <Link to="/search" className='btn btn-primary home-searchbtn'>Search</Link>
          </div>
          <div className='home-right'>
            <img src='/home-image.svg' alt='illustration' className='home-image' />
            <img src='/home-blob.svg' className='home-blob' />  
          </div>
        </div>
    </div>
  )
}
