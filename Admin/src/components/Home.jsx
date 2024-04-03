import React from 'react'
import { Link } from 'react-router-dom'
import '../pagesCss/Home.css'
function Home() {
  return (
    <div className='page homePage'>
        <div className="links">
            <Link to='/potd' >POTD</Link>
            <Link to='/jobs' >Job Opportunity</Link>
            <Link to='/editorials' >Editorial</Link>
            <Link to='/upcoming' >Upcoming Contests</Link>
            <Link to='/placementtalks' >Placement talks</Link>
        </div>
    </div>
  )
}

export default Home