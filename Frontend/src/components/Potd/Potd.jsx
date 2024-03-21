import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import url from "../url.js";
import {
  faBarsStaggered,
  faSquareArrowUpRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import lcdark from "../Pics/lcdark.png";
import lclight from "../Pics/lclight.png";
import gfgdark from "../Pics/gfgdark.png";
import gfglight from "../Pics/gfglight.png";

function Potd() {
  const [lcdata, setLcData] = useState([]);
  const [gfgdata, setgfgdata] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [hoveredIndexgfg, setHoveredIndexgfg] = useState(null);
  const [flippedIndexgfg, setFlippedIndexgfg] = useState(null);
  const [openfilter, setopenfilter] = useState(false);

  const datenow = new Date();
  const datt = datenow.toDateString().substring(4, 7);
  const curmonth = lcdata.filter((dat) => dat.date.substring(0, 3) === datt);
  const curmonthgfg = gfgdata.filter(
    (dat) => dat.date.substring(0, 3) === datt
  );
  const [month, setmonth] = useState(datt);
  const [monthdata, setmonthdata] = useState(curmonth);
  const [monthdatagfg, setmonthdatagfg] = useState(curmonthgfg);

  useEffect(() => {
    axios
      .get(url + "/leetcode")
      .then((res) => {
        setLcData(res.data.reverse());
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get(url + "/gfg")
      .then((res) => {
        setgfgdata(res.data.reverse());
      })
      .catch((err) => console.error(err));

    const val = lcdata.filter((dat) => dat.date.substring(0, 3) === month);
    setmonthdata(val.reverse());

    const gfgval = gfgdata.filter((dat) => dat.date.substring(0, 3) === month);
    setmonthdatagfg(gfgval.reverse());
  }, []);

  useEffect(() => {
    const val = lcdata.filter((dat) => dat.date.substring(0, 3) === month);
    setmonthdata(val.reverse());
    const gfgval = gfgdata.filter((dat) => dat.date.substring(0, 3) === month);
    setmonthdatagfg(gfgval.reverse());
  }, [month]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleCardClick = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  const handleMouseEntergfg = (index) => {
    setHoveredIndexgfg(index);
  };

  const handleMouseLeavegfg = () => {
    setHoveredIndexgfg(null);
  };

  const handleCardClickgfg = (index) => {
    setFlippedIndexgfg(index === flippedIndexgfg ? null : index);
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-5">
        <div className="w-3/4 flex justify-between">
          <h1 className="text-[#003f7e] font-bold text-2xl">
            Problem Of The Day
          </h1>
          <div>
            <FontAwesomeIcon
              icon={faBarsStaggered}
              onClick={() => {
                setopenfilter(!openfilter);
              }}
              className="cursor-pointer rounded-full px-2 py-2 border border-[#003f7e]"
            />
            <div className="flex justify-end">
              {openfilter && (
                <div className="absolute z-10 w-52 h-36 flex flex-col justify-center bg-slate-100 rounded-xl">
                  <div className="flex mx-2 justify-between">
                    <h1 className="text-[#2167ac] font-bold">
                      Choose by Month
                    </h1>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="h-6 text-[#2167ac] hover:text-black cursor-pointer"
                      onClick={() => {
                        setopenfilter(!openfilter);
                      }}
                    />
                  </div>
                  <div className="mt-2 items-center ml-2 mr-2 grid gap-2 grid-cols-4 ">
                    <div
                      onClick={() => setmonth("Jan")}
                      className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                    >
                      Jan
                    </div>
                    <div
                      onClick={() => setmonth("Feb")}
                      className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                    >
                      Feb
                    </div>
                    <div
                      onClick={() => setmonth("Mar")}
                      className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                    >
                      Mar
                    </div>
                    <div
                      onClick={() => setmonth("Apr")}
                      className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                    >
                      Apr
                    </div>
                    <div
                      onClick={() => setmonth("May")}
                      className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                    >
                      May
                    </div>
                    <div
                      onClick={() => setmonth("Jun")}
                      className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                    >
                      Jun
                    </div>
                    <div
                      onClick={() => setmonth("Jul")}
                      className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                    >
                      Jul
                    </div>
                    <div
                      onClick={() => setmonth("Aug")}
                      className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                    >
                      Aug
                    </div>
                    <div
                      onClick={() => setmonth("Sep")}
                      className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                    >
                      Sep
                    </div>
                    <div
                      onClick={() => setmonth("Oct")}
                      className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                    >
                      Oct
                    </div>
                    <div
                      onClick={() => setmonth("Nov")}
                      className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                    >
                      Nov
                    </div>
                    <div
                      onClick={() => setmonth("Dec")}
                      className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                    >
                      Dec
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <hr className="h-0.5 w-3/4 bg-gradient-to-r from-[#4E6378] to-[#CCE4FF] mt-0.5 rounded-full"></hr>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-[#003f7e] font-bold mt-5 text-2xl">Leetcode</h1>
        <div className="mt-2 lg:mx-20 mx-6 grid grid-cols-1 md:mt-4 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
          {monthdata.map((data, index) => (
            <ReactCardFlip
              key={index}
              flipDirection="horizontal"
              isFlipped={index === flippedIndex}
            >
              <div
                key="front"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleCardClick(index)}
                className="h-36 shadow-lg cursor-pointer rounded-2xl flex justify-between bg-gradient-to-r from-[#95ACC5] via-[#90a6bf] via-[#8096AE] via-[#7489a0] to-[#64778C]"
              >
                <div className="flex flex-col items-center ml-2 mt-4">
                  <h1
                    className={`font-bold ${
                      hoveredIndex === index ? "text-[#EBA340]" : "text-white"
                    } text-8xl`}
                  >
                    {data.date.substring(4, 6)}
                  </h1>
                  <h1
                    className={`${
                      hoveredIndex === index ? "text-[#EBA340]" : "text-white"
                    } text-sm font-bold`}
                  >
                    {data.date.substring(0, 3).toUpperCase()}
                  </h1>
                </div>
                <div>
                  <img
                    src={hoveredIndex === index ? lclight : lcdark}
                    className="h-32 mt-2 ml-6 mr-2"
                  />
                </div>
              </div>
              <div
                key="back"
                onMouseLeave={() => {
                  handleMouseLeave();
                  handleCardClick(index);
                }}
                className="h-36 shadow-lg rounded-2xl flex justify-between bg-gradient-to-r from-[#95ACC5] via-[#90a6bf] via-[#8096AE] via-[#7489a0] to-[#64778C]"
              >
                <div className="p-2 text-sm font-semibold flex flex-col space-y-2 text-white">
                  <a className="flex" href={data.question}>
                    Question:
                    {
                      <div className="ml-1 flex">
                        <h1>{data.quesname}</h1>
                        <FontAwesomeIcon
                          icon={faSquareArrowUpRight}
                          className="mt-1.5 ml-1"
                        />
                      </div>
                    }
                  </a>
                  <h1>Concepts: {data.concept}</h1>
                  <h1>Companies: {data.companies}</h1>
                  <p>
                    Difficulty level:
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
                  <a href={data.solution}>
                    Solution: Click Here
                    {
                      <FontAwesomeIcon
                        icon={faSquareArrowUpRight}
                        className="mt-0 ml-1"
                      />
                    }
                  </a>
                </div>
              </div>
            </ReactCardFlip>
          ))}
        </div>
        <hr className="h-0.5 mt-8 w-3/4 bg-gradient-to-r via-[#4E6378] from-[#CCE4FF] to-[#CCE4FF] rounded-full"></hr>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-[#003f7e] font-bold mt-5 text-2xl">
          GeeksforGeeks
        </h1>
        <div className="mt-2 lg:mx-20 mx-6 grid grid-cols-1 md:mt-4 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
          {monthdatagfg.map((data, index) => (
            <ReactCardFlip
              key={index}
              flipDirection="horizontal"
              isFlipped={index === flippedIndexgfg}
            >
              <div
                key="front"
                onMouseEnter={() => handleMouseEntergfg(index)}
                onMouseLeave={handleMouseLeavegfg}
                onClick={() => handleCardClickgfg(index)}
                className="h-36 shadow-lg cursor-pointer rounded-2xl flex justify-between bg-gradient-to-r to-[#95ACC5] via-[#90a6bf] via-[#8096AE] via-[#7489a0] from-[#64778C]"
              >
                <div className="flex flex-col items-center ml-2 mt-4">
                  <h1
                    className={`font-bold ${
                      hoveredIndexgfg === index
                        ? "text-[#2F8D46]"
                        : "text-white"
                    } text-8xl`}
                  >
                    {data.date.substring(4, 6)}
                  </h1>
                  <h1
                    className={`${
                      hoveredIndexgfg === index
                        ? "text-[#2F8D46]"
                        : "text-white"
                    } text-sm font-bold`}
                  >
                    {data.date.substring(0, 3).toUpperCase()}
                  </h1>
                </div>
                <div>
                  <img
                    src={hoveredIndexgfg === index ? gfglight : gfgdark}
                    className="h-20 mt-8"
                  />
                </div>
              </div>
              <div
                key="back"
                onMouseLeave={() => {
                  handleMouseLeavegfg();
                  handleCardClickgfg(index);
                }}
                className="h-36 w-60 shadow-lg rounded-2xl flex justify-between bg-gradient-to-r from-[#95ACC5] via-[#90a6bf] via-[#8096AE] via-[#7489a0] to-[#64778C]"
              >
                <div className="p-2 text-sm font-semibold flex flex-col space-y-2 text-white">
                  <a className="flex" href={data.question}>
                    Question:
                    {
                      <div className="ml-1 flex">
                        <h1>{data.quesname}</h1>
                        <FontAwesomeIcon
                          icon={faSquareArrowUpRight}
                          className="mt-1.5 ml-1"
                        />
                      </div>
                    }
                  </a>
                  <h1>Concepts: {data.concept}</h1>
                  <h1>Companies: {data.companies}</h1>
                  <p>
                    Difficulty level:
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
                  <a href={data.solution}>
                    Solution: Click Here
                    {
                      <FontAwesomeIcon
                        icon={faSquareArrowUpRight}
                        className="mt-0 ml-1"
                      />
                    }
                  </a>
                </div>
              </div>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Potd;
