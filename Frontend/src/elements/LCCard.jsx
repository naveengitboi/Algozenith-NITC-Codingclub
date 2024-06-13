import React, { useEffect, useState } from "react";
// import React from "react";
import ReactCardFlip from "react-card-flip";
import lcdark from ".././components/Pics/lcdark.png";
import lclight from ".././components/Pics/lclight.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css"; 
import "@fontsource/poppins/400-italic.css";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

function LCCard({
  index,
  data,
  flippedIndex,
  setFlippedIndex,
  hoveredIndex,
  setHoveredIndex,
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
      isFlipped={index === flippedIndex}
      className="card"
    >
      <div
        key="front"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => setFlippedIndex(index === flippedIndex ? null : index)}
        className="h-48 md:w-[400px] w-[340px] shadow-lg cursor-pointer rounded-2xl flex justify-between bg-gradient-to-r from-[#95ACC5] via-[#90a6bf] via-[#8096AE] via-[#7489a0] to-[#64778C]"
      >
        <div className="flex flex-col items-center ml-2 mt-8">
          <h1
            className={`font-bold ${
              hoveredIndex === index ? "text-[#EBA340]" : "text-white"
            } text-8xl`}
          >
            {data.date.substring(4, 6)}
          </h1>
          <h1
            className={`${
              hoveredIndex === index ? "text-black" : "text-white"
            } text-lg font-bold mt-2`}
          >
            {month[data.date.substring(0, 3).toUpperCase()]}
          </h1>
        </div>
        <div>
          <img
            src={hoveredIndex === index ? lclight : lcdark}
            className="h-48 ml-8 mr-2"
          />
        </div>
      </div>
      <div
        key="back"
        onMouseLeave={() => {
          setHoveredIndex(null);
          setFlippedIndex(index === flippedIndex ? null : index);
        }}
        className="h-48 md:w-[400px] w-[340px] shadow-lg rounded-2xl flex justify-between bg-gradient-to-r from-[#95ACC5] via-[#90a6bf] via-[#8096AE] via-[#7489a0] to-[#64778C]"
      >
        <div className="p-2 font-semibold flex flex-col space-y-2 text-xs popin text-white">
          <a className="flex scrollableText" href={data.question}>
            <h1 className="text-black font-extrabold">Question :</h1>
            {
              <div className="ml-1 flex">
                <h1>{data.quesname}</h1>
              </div>
            }
          </a>
          <h1>
            <span className="text-black">Concepts : </span>
            {data.concept}
          </h1>
          <h1>
            <span className="text-black">Companies : </span>
            {data.companies}
          </h1>
          <p>
            <span className="text-black font-extrabold">Level :</span>
            {data.level === "Easy" || data.level === "easy" ? (
              <span className="bg-green-500 text-white ml-2 text-xs px-2 pb-0.5 rounded-xl">
                Easy
              </span>
            ) : data.level === "Medium" || data.level === "medium" ? (
              <span className="bg-[#f6cd52] text-white ml-2 text-xs px-2 pb-0 rounded-xl">
                Medium
              </span>
            ) : (
              <span className="bg-red-500 text-white ml-2 text-xs px-2 pb-0.5 rounded-xl">
                Hard
              </span>
            )}
          </p>
          {/* <a href={data.solution}></a> */}
          <div className="relative ">
            <div className="border-2 mt-4 border-black rounded-md px-2 h-14 w-[320px] md:w-[380px]">
              <div className="mt-3 h-10 flex justify-around px-3">
                <a href={data.solution} target="_blank" className="hover:text-black">
                  <div className="flex text-lg">
                    Code <FaGithub className="ml-2 mt-1 h-5 w-5"/>
                  </div>
                </a>
                <a href={data.videolink} target="_blank" className="hover:text-red-500">
                  <div className="flex text-lg">
                    Video <FaYoutube className="ml-2 mt-1 h-5 w-6 "/>
                  </div>
                </a>
              </div>
            </div>
            <label className="absolute text-base -top-[-2px] left-3 px-2 bg-[#95ACC5] text-black ">
              Solution
            </label>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default LCCard;