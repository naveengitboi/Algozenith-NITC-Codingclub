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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/placementtalks">Placement Talks</NavLink>
          </li>
          {/* <li><NavLink to='/events'>Events</NavLink></li> */}
          <li>
            <NavLink to="/opportunities">Job Opportunities</NavLink>
          </li>
          <li>
            <NavLink to="/potd">PotD, E&C</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <div className="gradMidLine"></div>
    </div>
  );
}

export default Navbar;
