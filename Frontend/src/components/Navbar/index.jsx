import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'



function Navbar() {
 

  return (
    <div className='navbarContainer'>
        <nav className='navbar commonPadding'>
        <div className="logo">
            <img src="/images/logo.png" alt="AZ logo" />
        </div>
        <ul className='navLinks'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/placementTalks'>Placement Talks</NavLink></li>
            <li><NavLink to='/events'>Events</NavLink></li>
            <li><NavLink to='/opportunities'>Job Posts</NavLink></li>
            <li><NavLink to='/potd'>PotD, E&C</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
        </ul>
    </nav>
    <div className='gradMidLine'></div>
    </div>
  )
}

export default Navbar