import React from 'react';
import ReactCardFlip from "react-card-flip";
import ccdark from ".././components/Pics/ccdark.png";
import cclight from ".././components/Pics/cclight.png";
import lcdark from ".././components/Pics/lcdark.png";
import lclight from ".././components/Pics/lclight.png";
import cfdark from ".././components/Pics/cfdark.png";
import cflight from ".././components/Pics/cflight.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function ECCard({index, data , hoveredIndexec, setHoveredIndexec, monthconversion}) {
  return (
    <ReactCardFlip key={index}>
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredIndexec(index)}
                      onMouseLeave={() => setHoveredIndexec(null)}
                      className=" w-52 h-60 ecdata mx-4 shadow-xl rounded-2xl my-1 bg-gradient-to-br from-[#69a2dd] to-[#42576e] via-[#567fa9]"
                    >
                      {data.platformname === "Leetcode" ||
                      data.platformname === "leetcode" ? (
                        <div className="absolute ml-16 ">
                          <img
                            src={hoveredIndexec === index ? lclight : lcdark}
                            className="h-44"
                          />
                        </div>
                      ) : data.platformname === "Codeforces" ||
                        data.platformname === "codeforces" ? (
                        <div className="absolute ml-16 mt-14 ">
                          <img
                            src={hoveredIndexec === index ? cflight : cfdark}
                            className="h-24"
                          />
                        </div>
                      ) : (
                        <div className="absolute ml-[75px] ">
                          <img
                            src={hoveredIndexec === index ? cclight : ccdark}
                            className="h-44"
                          />
                        </div>
                      )}
                      <div className="absolute w-52 border-b h-16 rounded-xl bg-opacity-100 backdrop-filter backdrop-blur-sm">
                        <div className="flex mt-1 text-white justify-between mx-2">
                          <h1 className="font-extrabold text-2xl">
                            {data.contestnumber}
                          </h1>
                          <h6 className="font-bold text-xs mt-3">4 Ques</h6>
                        </div>
                        <div className="flex text-white justify-between mx-2 mt-1.5">
                          <h1 className="font-bold font-mono text-sm">
                            {data.platformname}
                          </h1>
                          <h1 className="font-medium text-xs">Beginner lvl</h1>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="mt-40 ml-2">
                          <h5 className="text-white font-sans font-extrabold text-6xl">
                            {data.date.substring(8)}
                          </h5>
                          <h5 className="text-white font-sans font-semibold text-xs">
                            {
                              monthconversion[
                                parseInt(data.date.substring(5, 7))
                              ]
                            }{" "}
                            {data.date.substring(2, 4)}
                          </h5>
                        </div>
                        <div>
                          <div className="w-28 mt-[185px] flex">
                            <a
                              href={data.contestlink}
                              target="_blank"
                              className="ml-4 text-white font-bold font-mono text-sm"
                            >
                              ContestLink
                            </a>
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="mt-0.5 text-white ml-1.5"
                            />
                          </div>
                          <div className="w-28 mt-2 flex">
                            <a
                              href={data.solutionlink}
                              target="_blank"
                              className="ml-8 text-white font-bold font-mono text-sm"
                            >
                              EDITORIAL
                            </a>
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="mt-0.5 text-white ml-1.5"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </ReactCardFlip>
  )
}

export default ECCard