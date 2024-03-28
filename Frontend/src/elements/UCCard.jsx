import React from 'react'
import ReactCardFlip from "react-card-flip";
import ccdark from ".././components/Pics/ccdark.png";
import cclight from ".././components/Pics/cclight.png";
import lcdark from ".././components/Pics/lcdark.png";
import lclight from ".././components/Pics/lclight.png";
import cfdark from ".././components/Pics/cfdark.png";
import cflight from ".././components/Pics/cflight.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBarsStaggered,
  faChevronCircleRight,
  faChevronLeft,
  faChevronRight,
  faSquareArrowUpRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";


function UCCard({index, data , hoveredIndexuc, setHoveredIndexuc, monthconversion}) {

  return (
    <ReactCardFlip key={index}>
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndexuc(index)}
                  onMouseLeave={() => setHoveredIndexuc(null)}
                  onClick={() => handleCardClick(index)}
                  className="flex ucdata w-52 h-60 mx-4 shadow-xl rounded-2xl bg-gradient-to-br from-[#69a2dd] to-[#42576e] via-[#567fa9]"
                >
                  {data.upplatform === "Leetcode" ||
                  data.upplatform === "leetcode" ? (
                    <div className="absolute ml-16 ">
                      <img
                        src={hoveredIndexuc === index ? lclight : lcdark}
                        className="h-44"
                      />
                    </div>
                  ) : data.upplatform === "Codeforces" ||
                    data.upplatform === "codeforces" ? (
                    <div className="absolute ml-16 mt-14 ">
                      <img
                        src={hoveredIndexuc === index ? cflight : cfdark}
                        className="h-24"
                      />
                    </div>
                  ) : (
                    <div className="absolute ml-[75px] ">
                      <img
                        src={hoveredIndexuc === index ? cclight : ccdark}
                        className="h-44"
                      />
                    </div>
                  )}
                  <div className="absolute w-52 border-b h-16 rounded-xl bg-opacity-100 backdrop-filter backdrop-blur-sm">
                    <div className="flex mt-1 text-white justify-between mx-2">
                      <h1 className="font-extrabold text-2xl">
                        {data.contesttype}
                      </h1>
                      <h6 className="font-bold text-xs mt-3">4 Ques</h6>
                    </div>
                    <div className="flex text-white justify-between mx-2 mt-1.5">
                      <h1 className="font-bold font-mono text-sm">
                        {data.upplatform.toUpperCase()}
                      </h1>
                      <h1 className="font-medium text-xs">Beginner lvl</h1>
                    </div>
                  </div>
                  <div className="w-20">
                    <div className="mt-36 ml-2">
                      <h5 className="text-white font-sans font-semibold text-xs">
                        8:00 PM
                      </h5>
                      <h5 className="text-white font-sans font-extrabold text-6xl">
                        {data.update.substring(8)}
                      </h5>
                      <h5 className="text-white font-sans font-semibold text-xs">
                        {monthconversion[parseInt(data.update.substring(5, 7))]}{" "}
                        {data.update.substring(2, 4)}
                      </h5>
                    </div>
                  </div>
                  <div className=" w-28">
                    <div className="flex mt-52">
                      <a
                        href={data.uplink}
                        target="_blank"
                        className="ml-8 text-white font-bold font-mono text-sm"
                      >
                        REGISTER
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="mt-0.5 text-white ml-1.5"
                      />
                    </div>
                  </div>
                </div>
                <div></div>
              </ReactCardFlip>
  )
}

export default UCCard;
