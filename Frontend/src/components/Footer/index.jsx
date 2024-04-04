import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FaInstagram, FaGithub } from "react-icons/fa6";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="gradMidLine"></div>
      <footer className="commonPadding">
        <div className="logoSection">
          <p className="thickFont">AlgoZenith</p>
          <p className="paraSmall">NIT Calicut</p>
          <p className="tinySize laptopOnly">All Copy Rights Reserved.</p>
        </div>
        <div className="socialLinks">
          <a href="https://github.com/AlgoZenithNITC" target="_blank">
            <FaGithub />
          </a>
          <a href="" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="" target="_blank">
            <FaInstagram />
          </a>
          <a href="" target="_blank">
            <FaDiscord />
          </a>
        </div>
        <div className="navigateBtn laptopOnly">
          <a
            href="https://drive.google.com/drive/folders/1w0gSw7rI5rZpOMb2E-VNcYHVpPpccbg6?usp=sharing"
            target="_blank"
            className="paraSmall"
          >
            Resources
          </a>
        </div>

        <div className="mobileOnly navLinksMobileOnly">
          <ul className="paraMedium">
            <li>
           
              <a
                href="https://drive.google.com/drive/folders/1w0gSw7rI5rZpOMb2E-VNcYHVpPpccbg6?usp=sharing"
                target="_blank"
                className="paraMedium"
              >
                Resources
              </a>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/placementtalks">Placement Talks</Link>
            </li>
            {/* <li><Link to='/events'>Events</Link></li> */}
            <li>
              <Link to="/opportunities">Job Posts</Link>
            </li>
            <li>
              <Link to="/potd">PotD, E&C</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <p className="tinySize mobileOnly">All Copy Rights Reserved.</p>
      </footer>
    </div>
  );
}
