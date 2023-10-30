import React from 'react'
import Navbar from '../components/Navbar'
import {FiSearch} from "react-icons/fi"
export default function Home({hide}) {
  return (
    <div className='home'>
        <Navbar hide={hide} />
        <div className='home-flex'>
          <div className='home-left'>
            <h1 className='home-heading'>Welcome! Let's hire your first Legal Service Provider</h1>
            <p className='home-paragraph'>It's the fastest way to access quality legal help in India</p>
            <input className='home-search' type='text'></input>
            <FiSearch className='home-searchicon' />
          </div>
          <div className='home-right'>
            <img src='/home-image.svg' alt='illustration' className='home-image' />
          </div>
        </div>
    </div>
  )
}
