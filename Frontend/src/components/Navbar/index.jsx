import React, { useState, useRef } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const navLinksRef = useRef();

  return (
    <div className="navbarContainer">
      <nav>
        <div className="logo">
          <NavLink to="/">
            <img src="/images/logo.png" alt="AZ logo" />
          </NavLink>
        </div>
        <div
          className={"menu"}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? <FaXmark className="w-10 h-8"/> : <FaBars className=" w-10 h-8"/>}
        </div>
        <ul
          className={isActive ? "open" : ""}
        >
          <li>
            <NavLink to="/" onClick={() => setIsActive(flase)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/placementtalks" onClick={() => setIsActive(flase)}>Placement Talks</NavLink>
          </li>
          {/* <li><NavLink to='/events'>Events</NavLink></li> */}
          <li>
            <NavLink to="/opportunities" onClick={() => setIsActive(flase)}>Job Opportunities</NavLink>
          </li>
          <li>
            <NavLink to="/potd" onClick={() => setIsActive(flase)}>POTD & Editorials</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsActive(flase)}>About</NavLink>
          </li>
        </ul>
      </nav>
      <div className="gradMidLine"></div>
    </div>
  );
}

export default Navbar;
