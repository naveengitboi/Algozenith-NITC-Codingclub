import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import url from "../url.js";
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
import lcdark from "../Pics/lcdark.png";
import lclight from "../Pics/lclight.png";
import gfgdark from "../Pics/gfgdark.png";
import gfglight from "../Pics/gfglight.png";
import ccdark from "../Pics/ccdark.png";
import cclight from "../Pics/cclight.png";
import cfdark from "../Pics/cfdark.png";
import cflight from "../Pics/cflight.png";
import errorpage from "../Pics/nodatafound.png";
import "../Potd/potd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Potd() {
  const [lcdata, setLcData] = useState([]);
  const [gfgdata, setgfgdata] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndexec, setHoveredIndexec] = useState(null);
  const [hoveredIndexuc, setHoveredIndexuc] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [hoveredIndexgfg, setHoveredIndexgfg] = useState(null);
  const [flippedIndexgfg, setFlippedIndexgfg] = useState(null);
  const [openfilter, setopenfilter] = useState(false);
  const [notfound, setnotfound] = useState(false);

  const datenow = new Date();
  const datt = datenow.toDateString().substring(4, 7);
  const curmonth = lcdata.filter((dat) => dat.date.substring(0, 3) === datt);
  const curmonthgfg = gfgdata.filter(
    (dat) => dat.date.substring(0, 3) === datt
  );
  const [month, setmonth] = useState(datt);
  const [monthdata, setmonthdata] = useState(curmonth);
  const [monthdatagfg, setmonthdatagfg] = useState(curmonthgfg);
  const [ECdata, setECdata] = useState([]);
  const [UCdata, setUCdata] = useState([]);

  useEffect(() => {
    axios
      .get(url + "/leetcode")
      .then((res) => {
        setLcData(res.data.reverse());
        setnotfound(false);
      })
      .catch((err) => {
        console.error(err);
        setnotfound(true);
      });

    axios
      .get(url + "/gfg")
      .then((res) => {
        setgfgdata(res.data.reverse());
      })
      .catch((err) => console.error(err));

    axios
      .get(url + "/editorials")
      .then((res) => {
        setECdata(res.data);
      })
      .catch((err) => console.error(err));

    axios
      .get(url + "/upcontest")
      .then((res) => {
        setUCdata(res.data);
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
  }, [month, lcdata, gfgdata]);

  const monthconversion = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const Customprev = ({ onClick }) => (
    <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );

  const Customnext = ({ onClick }) => (
    <div className="custom-arrow custom-next-arrow" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );

  var settings = {
    swipeToSlide: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    {notfound && 
        <div className="pagePadding commonPadding">
          <img src={errorpage} className=""/>
        </div>
      }
    {!notfound && <div className="pagePadding ">
      <div className="flex flex-col items-center mt-5">
        <div className="w-3/4 flex justify-between">
          <p className="text-[#003f7e] font-bold text-2xl">
            Problem Of The Day
          </p>
          <div>
            <FontAwesomeIcon
              icon={faBarsStaggered}
              onClick={() => {
                setopenfilter(!openfilter);
              }}
              className="filtericon cursor-pointer rounded-full px-2 py-2 border border-[#003f7e]"
            />
            <div className="flex justify-end">
              {openfilter && (
                <div className="absolute py-0 z-10 w-52 h-36 flex flex-col justify-center bg-slate-100 rounded-xl ">
                  <div className="flex mx-2 justify-between">
                    <h1 className="text-[#2167ac] font-bold">
                      Choose by Month
                    </h1>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-[#2167ac] hover:text-black cursor-pointer h-6 xmark"
                      onClick={() => {
                        setopenfilter(!openfilter);
                      }}
                    />
                  </div>
                  <div className="mt-2 items-center ml-2 mr-2 grid gap-2 grid-cols-4 ">
                    <div
                      onClick={() => setmonth("Jan")}
                      className=" text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                    >
                      Jan
                    </div>
                    <div
                      onClick={() => setmonth("Feb")}
                      className=" text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
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
        <div className="w-3/4">
          <h1 className="text-[#003f7e] font-bold text-xl mt-5">LEETCODE</h1>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-11/12 mt-5 bg-white">
          <Slider
            {...settings}
            prevArrow={<Customprev />}
            nextArrow={<Customnext />}
          >
            {monthdata.map((data, index) => (
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
                  onClick={() =>
                    setFlippedIndex(index === flippedIndex ? null : index)
                  }
                  className="h-40 mx-2 shadow-lg cursor-pointer rounded-2xl flex justify-between bg-gradient-to-r from-[#95ACC5] via-[#90a6bf] via-[#8096AE] via-[#7489a0] to-[#64778C]"
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
                    setHoveredIndex(null);
                    setFlippedIndex(index === flippedIndex ? null : index);
                  }}
                  className="h-40 shadow-lg rounded-2xl flex justify-between bg-gradient-to-r from-[#95ACC5] via-[#90a6bf] via-[#8096AE] via-[#7489a0] to-[#64778C]"
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
          </Slider>
        </div>
        {/* <hr className="h-0.5 mt-8 w-3/4 bg-gradient-to-r via-[#4E6378] from-[#CCE4FF] to-[#CCE4FF] rounded-full"></hr> */}
      </div>

      <div className="flex flex-col items-end">
        <div className="w-1/4">
          <h1 className="text-[#003f7e] font-bold text-xl mt-10 ">
            GEEKSFORGEEKS
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-11/12 mt-5">
          <Slider
            {...settings}
            prevArrow={<Customprev />}
            nextArrow={<Customnext />}
          >
            {monthdatagfg.map((data, index) => (
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
                  className="h-40 mx-2 shadow-lg cursor-pointer rounded-2xl flex justify-between bg-gradient-to-r to-[#95ACC5] via-[#90a6bf] via-[#8096AE] via-[#7489a0] from-[#64778C]"
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
                    setHoveredIndexgfg(null);
                    setFlippedIndexgfg(
                      index === flippedIndexgfg ? null : index
                    );
                  }}
                  className="h-40 shadow-lg rounded-2xl flex justify-between bg-gradient-to-r from-[#95ACC5] via-[#90a6bf] via-[#8096AE] via-[#7489a0] to-[#64778C]"
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
          </Slider>
        </div>
        {/* <hr className="h-0.5 mt-8 mb-10 w-3/4 bg-gradient-to-r to-[#4E6378] from-[#CCE4FF] rounded-full"></hr> */}
      </div>

      <div className="flex flex-col items-center mt-20">
        <div className="w-3/4 flex justify-between">
          <h1 className="text-[#003f7e] font-bold text-2xl">
            Contests and Editorials
          </h1>
        </div>
        <hr className="h-0.5 w-3/4 bg-gradient-to-r from-[#4E6378] to-[#CCE4FF] mt-0.5 rounded-full"></hr>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-3/4">
          <h1 className="text-[#003f7e] font-bold text-lg mt-5">
            Upcoming Contests
          </h1>
        </div>
      </div>

      <div className="flex flex-col mx-20 items-center">
        <div className="w-11/12  mt-5 bg-white/10 mb-5">
          <Slider
            {...settings}
            prevArrow={<Customprev />}
            nextArrow={<Customnext />}
          >
            {UCdata.map((data, index) => (
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
            ))}
          </Slider>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-3/4">
          <h1 className="text-[#003f7e] font-bold text-lg mt-5">
            Previous Contests and Editorials
          </h1>
        </div>
      </div>
      <div className="flex flex-col mx-20 items-center">
        <div className="w-11/12 mt-5 mb-10 bg-white/10">
          <Slider
            {...settings}
            prevArrow={<Customprev />}
            nextArrow={<Customnext />}
          >
            {ECdata.map((data, index) => (
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
                        {monthconversion[parseInt(data.date.substring(5, 7))]}{" "}
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
            ))}
          </Slider>
        </div>
      </div>
    </div>}
    </>
  );
}

export default Potd;
