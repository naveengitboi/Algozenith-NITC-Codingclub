import React from "react";
import ReactCardFlip from "react-card-flip";
import gfgdark from "../components/Pics/gfgdark.png";
import gfglight from "../components/Pics/gfglight.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css"; 
import "@fontsource/poppins/400-italic.css";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

function GFGCard({
  index,
  data,
  flippedIndexgfg,
  setFlippedIndexgfg,
  hoveredIndexgfg,
  setHoveredIndexgfg,
}) {
  const month = {
    "JAN" : "JANUARY",
    "FEB" : "FEBRUARY",
    "MAR" : "MARCH",
    "APR" : "APRIL",
    "MAY" : "MAY",
    "JUN" : "JUNE",
    "JUL": "JULY",
    "AUG" : "AUGUST",
    "SEP" : "SEPTEMBER",
    "OCT" : "OCTOBER",
    "NOV" : "NOVEMBER",
    "DEC" : "DECEMBER"
  }
  return (
    <ReactCardFlip
      key={index}
      flipDirection="vertical"
      isFlipped={index === flippedIndexgfg}
    >
      <div
        key="front"
        onMouseEnter={() => setHoveredIndexgfg(index)}
        onMouseLeave={() => setHoveredIndexgfg(null)}
        onClick={() =>
          setFlippedIndexgfg(index === flippedIndexgfg ? null : index)
        }
        className="h-48 mx-2 shadow-lg cursor-pointer rounded-2xl flex justify-between bg-gradient-to-r to-[#95ACC5] via-[#90a6bf] via-[#8096AE] via-[#7489a0] from-[#64778C]/90"
      >
        <div className="flex flex-col items-center ml-2 mt-8">
          <h1
            className={`font-bold ${
              hoveredIndexgfg === index ? "text-[#2F8D46]" : "text-white"
            } text-8xl`}
          >
            {data.date.substring(4, 6)}
          </h1>
          <h1
            className={`${
              hoveredIndexgfg === index ? "text-black" : "text-white"
            } text-lg font-bold`}
          >
            {month[data.date.substring(0, 3).toUpperCase()]}
          </h1>
        </div>
        <div>
          <img
            src={hoveredIndexgfg === index ? gfglight : gfgdark}
            className="h-36 mt-6 w-40"
          />
        </div>
      </div>
      <div
        key="back"
        onMouseLeave={() => {
          setHoveredIndexgfg(null);
          setFlippedIndexgfg(index === flippedIndexgfg ? null : index);
        }}
        className="h-48 shadow-lg rounded-2xl flex justify-between bg-gradient-to-r from-[#95ACC5] via-[#90a6bf] via-[#8096AE] via-[#7489a0] to-[#64778C]"
      >
        <div className="p-2 text-sm font-semibold flex flex-col popins space-y-2 text-white ">
        <a className="flex scrollableText" href={data.question}>
            <h1 className="text-black font-extrabold">Question:</h1>
            {
              <div className="ml-1 flex">
                <h1>{data.quesname} hbonhnuhbjn</h1>
                {/* <FontAwesomeIcon
                  icon={faSquareArrowUpRight}
                  className="mt-1.5 ml-1"
                /> */}
              </div>
            }
          </a>
          <h1>
            <span className="text-black">Concepts: </span>
            {data.concept}
          </h1>
          <h1>
            <span className="text-black">Companies: </span>
            {data.companies}
          </h1>
          <p>
            <span className="text-black font-extrabold">Difficulty level:</span>
            {data.level === "Easy" || data.level === "easy" ? (
              <span className="bg-green-500 text-white ml-2 text-xs px-2 pb-0.5 rounded-xl">
                Easy
              </span>
            ) : data.level === "Medium" || data.level === "medium" ? (
              <span className="bg-[#f6cd52] text-white ml-2 text-xs px-2 pb-0.5 rounded-xl">
                Medium
              </span>
            ) : (
              <span className="bg-red-500 text-white ml-2 text-xs px-2 pb-0.5 rounded-xl">
                Hard
              </span>
            )}
          </p>
          <a href={data.solution}></a>
          <div className="relative">
            <div className="border-2 border-black rounded-md px-2 h-14 w-[300px]">
              <div className="mt-3 h-10 flex justify-around px-3">
                <a href="" target="_blank" className="hover:text-black">
                  <div className="flex text-base mt-1">
                    Code <FaGithub className="ml-2 mt-0.5 h-5 w-5"/>
                  </div>
                </a>
                <a href="" target="_blank" className="hover:text-red-500">
                  <div className="flex text-base mt-1">
                    Video <FaYoutube className="ml-2 mt-0.5 h-5 w-6 "/>
                  </div>
                </a>
              </div>
            </div>
            <label className="absolute text-base -top-2.5 left-3 px-2 bg-[#95ACC5] text-black ">
              Solution
            </label>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default GFGCard;
