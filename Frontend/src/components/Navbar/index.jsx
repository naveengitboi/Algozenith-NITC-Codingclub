import React, { useState, useRef } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaFont, FaLine, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const navLinksRef = useRef();

  const handleHamburger = () => {
    if (!isActive) {
      navLinksRef.current.addEventListener("click", (e) => {
        setIsActive(false);
      });
    }
    setIsActive((prev) => !prev);
  };

  return (
    <div className="navbarContainer">
      <nav className={`navbar ${isActive ? "bg-[#96bfca] nav-mobile":""}commonPadding`}>
        <div className="logo">
          <NavLink to="/">
            <img src="/images/logo.png" alt="AZ logo" />
          </NavLink>
        </div>
        <div
          className={isActive ? "hamburgerMenu hamActive" : "hamburgerMenu"}
          onClick={handleHamburger}
        >
          {isActive ? <FaXmark className="w-10 h-7"/> : <FaBars className="w-10 h-6"/>}
        </div>
        <ul
          ref={navLinksRef}
          className={isActive ? "navLinks navActive" : "navLinks"}
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
