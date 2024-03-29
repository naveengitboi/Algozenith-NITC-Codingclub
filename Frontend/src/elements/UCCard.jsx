import React from 'react';
import ReactCardFlip from "react-card-flip";
import ccdark from ".././components/Pics/ccdark.png";
import cclight from ".././components/Pics/cclight.png";
import lcdark from ".././components/Pics/lcdark.png";
import lclight from ".././components/Pics/lclight.png";
import cfdark from ".././components/Pics/cfdark.png";
import cflight from ".././components/Pics/cflight.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowRight } from "@fortawesome/free-solid-svg-icons";


function UCCard({index, data , hoveredIndexuc, setHoveredIndexuc, monthconversion}) {

  return (
    <ReactCardFlip key={index}>
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndexuc(index)}
                  onMouseLeave={() => setHoveredIndexuc(null)}
                  onClick={() => handleCardClick(index)}
                  className="flex ucdata w-64 h-72 mx-4 shadow-xl rounded-2xl bg-gradient-to-br from-[#69a2dd] to-[#42576e] via-[#567fa9]"
                >
                  {data.upplatform === "Leetcode" ||
                  data.upplatform === "leetcode" ? (
                    <div className="absolute ml-20 ">
                      <img
                        src={hoveredIndexuc === index ? lclight : lcdark}
                        className="h-56"
                      />
                    </div>
                  ) : data.upplatform === "Codeforces" ||
                    data.upplatform === "codeforces" ? (
                    <div className="absolute ml-20 mt-16">
                      <img
                        src={hoveredIndexuc === index ? cflight : cfdark}
                        className="h-32"
                      />
                    </div>
                  ) : (
                    <div className="absolute ml-24 ">
                      <img
                        src={hoveredIndexuc === index ? cclight : ccdark}
                        className="h-52"
                      />
                    </div>
                  )}
                  <div className="absolute w-64 border-b h-20 rounded-xl bg-opacity-100 backdrop-filter backdrop-blur-sm">
                    <div className="flex mt-1 text-white justify-between mx-2">
                      <h1 className="font-extrabold text-3xl">
                        {data.contesttype}
                      </h1>
                      <h6 className="font-bold text-sm mt-3">4 Ques</h6>
                    </div>
                    <div className="flex text-white justify-between mx-2 mt-3">
                      <h1 className="font-bold font-mono text-base">
                        {data.upplatform.toUpperCase()}
                      </h1>
                      <h1 className="font-medium text-sm">Beginner lvl</h1>
                    </div>
                  </div>
                  <div className="w-20">
                    <div className="mt-[185px] ml-4">
                      <h5 className="text-white font-sans font-semibold ml-1 text-sm">
                        8:00 PM
                      </h5>
                      <h5 className="text-white font-sans font-extrabold text-6xl">
                        {data.update.substring(8)}
                      </h5>
                      <h5 className="text-white font-sans font-semibold text-sm ">
                        {monthconversion[parseInt(data.update.substring(5, 7))]}{" "}
                        {data.update.substring(2, 4)}
                      </h5>
                    </div>
                  </div>
                  <div className=" w-28">
                    <div className="flex mt-60">
                      <a
                        href={data.uplink}
                        target="_blank"
                        className="ml-12 text-white font-bold font-mono text-lg"
                      >
                        REGISTER
                      </a>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="mt-1 text-white ml-1.5 h-5"
                      />
                    </div>
                  </div>
                </div>
                <div></div>
              </ReactCardFlip>
  )
}

export default UCCard;
