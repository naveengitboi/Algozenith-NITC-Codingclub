import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Pics/logo.png";

export default function Header() {
  return (
    <header className="shadow z-0 top-0">
      <nav className="flex justify-center max-w-screen-xl bg-yellow-50 border-gray-200 py-2.5">
        <div className="flex flex-wrap max-w-screen-xl">
          <Link to="/" className="flex px-5 items-center">
            <img src={logo} className="mr-3 h-12" alt="Logo" />
          </Link>

          <div
            className=" lg:px-52 justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col md:flex-row font-medium lg:flex-row gap-[3vw]">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-blue-900/90"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-blue-900/90 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/opportunities"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-blue-900/90"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-blue-900/90 lg:p-0`
                  }
                >
                  Opportunities
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/potd"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-blue-900/90"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-blue-900/90 lg:p-0`
                  }
                >
                  POTD
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/editorials"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-blue-900/90"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-blue-900/90 lg:p-0`
                  }
                >
                  Editorials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${
                                          isActive
                                            ? "text-blue-900/90"
                                            : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-blue-900/90 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
