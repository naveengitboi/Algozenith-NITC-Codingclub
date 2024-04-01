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
                      className=" w-64 h-72 ecdata mx-4 shadow-xl rounded-2xl my-1 bg-gradient-to-br from-[#69a2dd] to-[#42576e] via-[#567fa9]"
                    >
                      {data.platformname === "Leetcode" ||
                      data.platformname === "leetcode" ? (
                        <div className="absolute ml-[89px] ">
                          <img
                            src={hoveredIndexec === index ? lclight : lcdark}
                            className="h-52"
                          />
                        </div>
                      ) : data.platformname === "Codeforces" ||
                        data.platformname === "codeforces" ? (
                        <div className="absolute ml-20 mt-16 ">
                          <img
                            src={hoveredIndexec === index ? cflight : cfdark}
                            className="h-32"
                          />
                        </div>
                      ) : (
                        <div className="absolute ml-24 ">
                          <img
                            src={hoveredIndexec === index ? cclight : ccdark}
                            className="h-52"
                          />
                        </div>
                      )}
                      <div className="absolute w-64 border-b h-20 rounded-xl bg-opacity-100 backdrop-filter backdrop-blur-sm">
                        <div className="flex mt-1 text-white justify-between mx-2">
                          <h1 className="font-extrabold text-3xl">
                            {data.contestnumber}
                          </h1>
                          <h6 className="font-bold text-sm mt-3">4 Ques</h6>
                        </div>
                        <div className="flex text-white justify-between mx-2 mt-3">
                          <h1 className="font-bold font-mono text-base">
                            {data.platformname}
                          </h1>
                          <h1 className="font-medium text-sm">Beginner lvl</h1>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="mt-[205px] ml-4">
                          <h5 className="text-white font-sans font-extrabold text-6xl">
                            {data.date.substring(8)}
                          </h5>
                          <h5 className="text-white font-sans font-semibold text-sm">
                            {
                              monthconversion[
                                parseInt(data.date.substring(5, 7))
                              ]
                            }{" "}
                            {data.date.substring(2, 4)}
                          </h5>
                        </div>
                        <div>
                          <div className="w-28 mt-[215px] flex">
                            <a
                              href={data.contestlink}
                              target="_blank"
                              className="ml-5 text-white font-bold font-mono text-lg"
                            >
                              ContestLink
                            </a>
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="mt-1 text-white ml-1.5 h-5"
                            />
                          </div>
                          <div className="w-28 mt-2 flex">
                            <a
                              href={data.solutionlink}
                              target="_blank"
                              className="ml-10 text-white font-bold font-mono text-lg"
                            >
                              EDITORIAL
                            </a>
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="mt-1 text-white ml-1.5 h-5"
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