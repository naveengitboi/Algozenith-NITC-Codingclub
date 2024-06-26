import React, { useEffect, useState } from "react";
import axios from "axios";
import UCCard from "../../elements/UCCard.jsx";
import ECCard from "../../elements/ECCard.jsx";
import LCCard from "../../elements/LCCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import url from "../url.js";
import {
  faBarsStaggered,
  faChevronLeft,
  faChevronRight,
  faFilter,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import errorpage from "../Pics/nodatafound.png";
import "../Potd/potd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import GFGCard from "../../elements/GFGCard.jsx";
import { FaFilter } from "react-icons/fa6";

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
        setECdata(res.data.reverse());
      })
      .catch((err) => console.error(err));

    axios
      .get(url + "/upcontest")
      .then((res) => {
        setUCdata(res.data.reverse());
        console.log(UCdata);
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
    <button
      className="custom-arrow custom-prev-arrow"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );

  const Customnext = ({ onClick }) => (
    <button
      className="custom-arrow custom-next-arrow"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );

  const Customprevcontest = ({ onClick }) => (
    <button
      className="custom-arrow-contest custom-prev-arrow-contest"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );

  const Customnextcontest = ({ onClick }) => (
    <button
      className="custom-arrow-contest custom-next-arrow-contest"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );

  var PotdSettings = {
    swipeToSlide: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.1,
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
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var ContestSettings = {
    swipeToSlide: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4.1,
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
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {notfound && (
        <div className="pagePadding commonPadding">
          <img src={errorpage} className="" />
        </div>
      )}
      {!notfound && (
        <div className="pagePadding md:mt-0 mt-10">
          <div className="flex flex-col items-center mt-5">
            <div className="md:w-3/4 w-11/12 flex justify-between">
              <p className="text-[#003f7e] font-bold paraLarge md:text-3xl text-[28px]">
                Problem Of The Day
              </p>
              <div>
                <FontAwesomeIcon
                  icon={faFilter}
                  onClick={() => {
                    setopenfilter(!openfilter);
                  }}
                  className="filtericon text-[#003f7e] md:mt-[-5px] cursor-pointer rounded-full md:px-3.5 px-2.5 py-2.5 md:py-3.5 border border-[#003f7e]"
                />
                <div className="flex justify-end">
                  {openfilter && (
                    <div className="absolute py-0 z-10 w-52 h-36 mt-[-38px] flex flex-col justify-center bg-slate-100 rounded-xl ">
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
            <div className="md:w-3/4 w-11/12 gradCompleteLine"></div>
            {/* <hr className="h-0.5 w-3/4 bg-gradient-to-r from-[#4E6378] to-[#CCE4FF] mt-0.5 rounded-full"></hr> */}
          </div>
          <div className="flex flex-col items-center">
            <div className="w-3/4">
              <h1 className="text-[#003f7e] font-bold paraSmall text-2xl my-5">
                Leetcode
              </h1>
            </div>
          </div>
          {/* <div className="flex flex-col items-center"> */}
          {/* <div className="slider-width mt-5 bg-black"> */}
          <Slider
            {...PotdSettings}
            prevArrow={<Customprev />}
            nextArrow={<Customnext />}
            className="md:mx-36 mx-5 lc-slider"
          >
            {monthdata.map((data, index) => (
              <LCCard
                key={index}
                index={index}
                data={data}
                flippedIndex={flippedIndex}
                setFlippedIndex={setFlippedIndex}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </Slider>
          {/* </div> */}
          {/* <hr className="h-0.5 mt-8 w-3/4 bg-gradient-to-r via-[#4E6378] from-[#CCE4FF] to-[#CCE4FF] rounded-full"></hr> */}
          {/* </div> */}

          <div className="flex flex-col md:ml-44 ml-12 ">
            <div className="">
              <h1 className="text-[#003f7e] font-bold text-2xl mt-10 mb-5 ">
                GeeksforGeeks
              </h1>
            </div>
          </div>
          {/* <div className="flex flex-col items-center"> */}
          {/* <div className="w-11/12 mt-5"> */}
          <Slider
            {...PotdSettings}
            prevArrow={<Customprev />}
            nextArrow={<Customnext />}
            className="md:mx-36 mx-5 lc-slider"
          >
            {monthdatagfg.map((data, index) => (
              <GFGCard
                key={index}
                index={index}
                data={data}
                flippedIndexgfg={flippedIndexgfg}
                setFlippedIndexgfg={setFlippedIndexgfg}
                hoveredIndexgfg={hoveredIndexgfg}
                setHoveredIndexgfg={setHoveredIndexgfg}
              />
            ))}
          </Slider>
          {/* </div> */}
          {/* <hr className="h-0.5 mt-8 mb-10 w-3/4 bg-gradient-to-r to-[#4E6378] from-[#CCE4FF] rounded-full"></hr> */}
          {/* </div> */}

          <div className="flex flex-col items-center mt-20">
            <div className="md:w-3/4 w-11/12 flex justify-between">
              <h1 className="text-[#003f7e] font-bold paraLarge md:text-3xl text-[28px]">
                Contests and Editorials
              </h1>
            </div>
            <div className="md:w-3/4 w-11/12 h-[2.5px] gradCompleteLine"></div>
            {/* <hr className="h-0.5 w-3/4 bg-gradient-to-r from-[#4E6378] to-[#CCE4FF] mt-0.5 rounded-full"></hr> */}
          </div>

          <div className="flex flex-col items-center">
            <div className="md:w-3/4 w-10/12">
              <h1 className="text-[#003f7e] upc-mobile font-bold text-2xl my-5">
                Upcoming Contests
              </h1>
            </div>
          </div>

          {/* <div className="flex flex-col mx-20 items-center"> */}
          {/* <div
            onMouseEnter={() => setIsHov(true)}
            onMouseLeave={() => setIsHov(false)}
          > */}
            <Slider
              {...ContestSettings}
              prevArrow={<Customprevcontest />}
              nextArrow={<Customnextcontest />}
              className="contest-slider md:mx-36 mx-16"
            >
              {UCdata.map((data, index) => {
                return (
                  <UCCard
                    key={index}
                    index={index}
                    data={data}
                    hoveredIndexuc={hoveredIndexuc}
                    setHoveredIndexuc={setHoveredIndexuc}
                    monthconversion={monthconversion}
                  />
                );
              })}
            </Slider>
          {/* </div> */}
          {/* </div> */}

          <div className="flex flex-col items-center">
            <div className="md:w-3/4 w-10/12">
              <h1 className="text-[#003f7e] pe-mobile font-bold text-2xl mt-10 mb-5">
                Previous Contests and Editorials
              </h1>
            </div>
          </div>
          {/* <div className="flex flex-col mx-20 items-center"> */}
          {/* <div className="w-11/12 mt-5 mb-10 bg-white/10"> */}
          <Slider
            {...ContestSettings}
            prevArrow={<Customprevcontest />}
            nextArrow={<Customnextcontest />}
            className="contest-slider md:mx-36 mx-16 mb-16"
          >
            {ECdata.map((data, index) => (
              <ECCard
                key={index}
                index={index}
                data={data}
                hoveredIndexec={hoveredIndexec}
                setHoveredIndexec={setHoveredIndexec}
                monthconversion={monthconversion}
              />
            ))}
          </Slider>
        </div>
        // </div>
        // </div>
      )}
    </>
  );
}

export default Potd;
