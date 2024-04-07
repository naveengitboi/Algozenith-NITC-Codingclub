import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import lcdark from "../Pics/lcdark.png";
import lclight from "../Pics/lclight.png";
import axios from "axios";
import url from "../url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

function LCCardHome() {
  const [flippedIndex, setFlippedIndex] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(false);
  const [data, setLcData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(url + "/leetcode")
      .then((res) => {
        const v = res.data.reverse();
        setLcData(v[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ReactCardFlip
      flipDirection="vertical"
      isFlipped={flippedIndex}
      className="card"
    >
      <div
        key="front"
        onMouseEnter={() => setHoveredIndex(true)}
        onMouseLeave={() => setHoveredIndex(false)}
        onClick={() => setFlippedIndex(true)}
        className="h-40 w-72 mx-2 shadow-lg cursor-pointer rounded-2xl flex justify-between bg-gradient-to-r from-[#95ACC5] via-[#90a6bf] via-[#8096AE] via-[#7489a0] to-[#64778C]"
      >
        <div className="flex flex-col items-center ml-2 mt-4">
          <h1
            className={`font-bold ${
              hoveredIndex === true ? "text-[#EBA340]" : "text-white"
            } text-8xl`}
          >
            {data ? data.date.substring(4, 6) : "--"}
          </h1>
          <h1
            className={`${
              hoveredIndex === true ? "text-[#EBA340]" : "text-white"
            } text-sm font-bold`}
          >
            {data ? data.date.substring(0, 3).toUpperCase() : "--"}
          </h1>
        </div>
        <div>
          <img
            src={hoveredIndex === true ? lclight : lcdark}
            className="h-40 ml-6 mr-2"
            alt="LC Image"
          />
        </div>
      </div>
      <div
        key="back"
        onMouseLeave={() => {
          setHoveredIndex(false);
          setFlippedIndex(false);
        }}
        className="h-40 w-72 shadow-lg rounded-2xl flex justify-between bg-gradient-to-r from-[#95ACC5] via-[#90a6bf] via-[#8096AE] via-[#7489a0] to-[#64778C]"
      >
        <div className="p-2 text-sm font-semibold flex flex-col space-y-2 text-white">
          <a className="flex" href={data ? data.question : "#"}>
            Question:
            <div className="ml-1 flex">
              <h1>{data ? data.quesname : "--"}</h1>
              <FontAwesomeIcon
                icon={faSquareArrowUpRight}
                className="mt-1.5 ml-1"
              />
            </div>
          </a>
          <h1>Concepts: {data ? data.concept : "--"}</h1>
          <h1>Companies: {data ? data.companies : "--"}</h1>
          <p>
            Difficulty level:
            {data ? (
              data.level === "Easy" || data.level === "easy" ? (
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
              )
            ) : (
              "--"
            )}
          </p>
          <a href={data ? data.solution : "#"}>
            Solution: Click Here
            <FontAwesomeIcon
              icon={faSquareArrowUpRight}
              className="mt-0 ml-1"
            />
          </a>
        </div>
      </div>
    </ReactCardFlip>
  );
}

export default LCCardHome;
