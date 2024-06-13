import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import UCCard from "../../elements/UCCard.jsx";
import ECCard from "../../elements/ECCard.jsx";
import LCCard from "../../elements/LCCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
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
import Loader from "../../elements/Loader.jsx";

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
  const elementRef = useRef(null);
  const gfgRef = useRef(null);
  const ucRef = useRef(null);
  const pceRef = useRef(null);

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
  const [loading, setloading] = useState(false);

  useEffect(() => {

    setloading(true);
    axios
      .get(url + "/leetcode")
      .then((res) => {
        setLcData(res.data.reverse());
        setloading(false);
      })
      .catch((err) => {
        console.error(err);
      });

    setloading(true);
    axios
      .get(url + "/gfg")
      .then((res) => {
        setgfgdata(res.data.reverse());
        setloading(false);
      })
      .catch((err) => console.error(err));


    setloading(true);
    axios
      .get(url + "/editorials")
      .then((res) => {
        setECdata(res.data.reverse());
        setloading(false);
      })
      .catch((err) => console.error(err));

    setloading(true);
    axios
      .get(url + "/upcontest")
      .then((res) => {
        setUCdata(res.data.reverse());
        setloading(false);
      })
      .catch((err) => console.error(err));

    setloading(true);
    const val = lcdata.filter((dat) => dat.date.substring(0, 3) === month);
    setmonthdata(val.reverse());

    const gfgval = gfgdata.filter((dat) => dat.date.substring(0, 3) === month);
    setmonthdatagfg(gfgval.reverse());

    setloading(false);
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

  const [isMediumOrAbove, setIsMediumOrAbove] = useState(
    window.innerWidth >= 768
  );

  const updateMedia = () => {
    setIsMediumOrAbove(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const slideRight = (element) => {
    element.scrollLeft += isMediumOrAbove ? 500 : 355;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= isMediumOrAbove ? 500 : 355;
  };

  const contestslideRight = (element) => {
    element.scrollLeft += isMediumOrAbove ? 500 : 288;
  };
  const contestslideLeft = (element) => {
    element.scrollLeft -= isMediumOrAbove ? 500 : 288;
  };

  return (
    <>
      {loading ? <Loader/> : (
        <div className="pagePadding md:mt-0 mt-10">
          <div className="flex flex-col items-center mt-5">
            <div className="md:w-3/4 w-11/12 flex justify-between">
              <p className="text-[#003f7e] font-bold paraLarge md:text-3xl text-[24px]">
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
                    <div className="absolute py-0 z-20 w-52 h-36 mt-[-38px] flex flex-col justify-center bg-slate-100 rounded-xl ">
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
                          onClick={() => { setmonth("Jan"); setTimeout(() => { setopenfilter(false);}, 300);}}
                          className=" text-[#2167ac] transition-all ease-in-out pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                        >
                          Jan
                        </div>
                        <div
                          onClick={() => { setmonth("Feb"); setTimeout(() => { setopenfilter(false);}, 300);}}
                          className=" text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                        >
                          Feb
                        </div>
                        <div
                          onClick={() => { setmonth("Mar"); setTimeout(() => { setopenfilter(false);}, 300);}}
                          className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                        >
                          Mar
                        </div>
                        <div
                          onClick={() => { setmonth("Apr"); setTimeout(() => { setopenfilter(false);}, 300);}}
                          className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                        >
                          Apr
                        </div>
                        <div
                          onClick={() => { setmonth("May"); setTimeout(() => { setopenfilter(false);}, 300);}}
                          className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                        >
                          May
                        </div>
                        <div
                          onClick={() => { setmonth("Jun"); setTimeout(() => { setopenfilter(false);}, 300);}}
                          className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                        >
                          Jun
                        </div>
                        <div
                          onClick={() => { setmonth("Jul"); setTimeout(() => { setopenfilter(false);}, 300);}}
                          className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                        >
                          Jul
                        </div>
                        <div
                          onClick={() => { setmonth("Aug"); setTimeout(() => { setopenfilter(false);}, 300);}}
                          className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                        >
                          Aug
                        </div>
                        <div
                          onClick={() => { setmonth("Sep"); setTimeout(() => { setopenfilter(false);}, 300);}}
                          className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                        >
                          Sep
                        </div>
                        <div
                          onClick={() => { setmonth("Oct"); setTimeout(() => { setopenfilter(false);}, 300);}}
                          className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                        >
                          Oct
                        </div>
                        <div
                          onClick={() => { setmonth("Nov"); setTimeout(() => { setopenfilter(false);}, 300);}}
                          className="text-[#2167ac] pl-2 hover:text-white hover:bg-[#2167ac]/70 rounded-lg font-semibold cursor-pointer"
                        >
                          Nov
                        </div>
                        <div
                          onClick={() => { setmonth("Dec"); setTimeout(() => { setopenfilter(false);}, 300);}}
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
            <div className="md:w-3/4 w-11/12">
              <h1 className="text-[#003f7e] font-bold paraSmall md:text-2xl text-xl my-5">
                Leetcode
              </h1>
            </div>
          </div>
          {/* <div className="flex flex-col items-center"> */}
          {/* <div className="slider-width mt-5 bg-black"> */}
          {/* <Slider
            {...PotdSettings}
            prevArrow={<Customprev />}
            nextArrow={<Customnext />}
            className="md:mx-36 mx-5 lc-slider"
          > */}
          <div className="relative group">
            <IoChevronBackOutline
              onClick={() => slideLeft(elementRef.current)}
              className={`md:text-[60px] text-[30px] text-black z-10 active:scale-75 transition-all ease-in-out cursor-pointer bg-gray-300 md:h-[185px] md:w-12 rounded-lg md:hidden block md:group-hover:block absolute md:mt-[4px] mt-[-50px] md:left-28 right-20`}
            />
            <div
              className="flex overflow-x-auto md:mx-44 mx-2 gap-4 scrollbar-hide scroll-smooth"
              ref={elementRef}
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
            </div>
            <IoChevronForwardOutline
              onClick={() => slideRight(elementRef.current)}
              className={`md:text-[60px] text-[30px] text-black md:hidden active:scale-75 transition-all ease-in-out block md:group-hover:block cursor-pointer z-10 top-0 bg-gray-300 md:h-[185px] md:w-12 rounded-lg absolute md:right-28 right-8 md:mt-[4px] mt-[-50px]`}
            />
          </div>

          {/* </Slider> */}
          {/* </div> */}
          {/* <hr className="h-0.5 mt-8 w-3/4 bg-gradient-to-r via-[#4E6378] from-[#CCE4FF] to-[#CCE4FF] rounded-full"></hr> */}
          {/* </div> */}

          <div className="flex flex-col md:ml-44 ml-4 ">
            <div className="">
              <h1 className="text-[#003f7e] font-bold md:text-2xl text-xl mt-10 mb-5 ">
                GeeksforGeeks
              </h1>
            </div>
          </div>
          {/* <div className="flex flex-col items-center"> */}
          {/* <div className="w-11/12 mt-5"> */}
          <div className="relative group">
            <IoChevronBackOutline
              onClick={() => slideLeft(gfgRef.current)}
              className={`md:text-[60px] text-[30px] text-black z-10 active:scale-75 transition-all ease-in-out cursor-pointer bg-gray-300 md:h-[185px] md:w-12 rounded-lg md:hidden block md:group-hover:block absolute md:mt-[4px] mt-[-50px] md:left-28 right-20`}
            />
            <div
              className="flex overflow-x-auto md:mx-44 mx-2 gap-4 scrollbar-hide scroll-smooth"
              ref={gfgRef}
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
            </div>
            <IoChevronForwardOutline
              onClick={() => slideRight(gfgRef.current)}
              className={`md:text-[60px] text-[30px] text-black md:hidden active:scale-75 transition-all ease-in-out block md:group-hover:block cursor-pointer z-10 top-0 bg-gray-300 md:h-[185px] md:w-12 rounded-lg absolute md:right-28 right-8 md:mt-[4px] mt-[-50px]`}
            />
          </div>
          {/* </div> */}
          {/* <hr className="h-0.5 mt-8 mb-10 w-3/4 bg-gradient-to-r to-[#4E6378] from-[#CCE4FF] rounded-full"></hr> */}
          {/* </div> */}

          <div className="flex flex-col items-center mt-20">
            <div className="md:w-3/4 w-11/12 flex justify-between">
              <h1 className="text-[#003f7e] font-bold paraLarge md:text-3xl text-[24px]">
                Contests and Editorials
              </h1>
            </div>
            <div className="md:w-3/4 w-11/12 h-[2.5px] gradCompleteLine"></div>
            {/* <hr className="h-0.5 w-3/4 bg-gradient-to-r from-[#4E6378] to-[#CCE4FF] mt-0.5 rounded-full"></hr> */}
          </div>

          <div className="flex flex-col items-center">
            <div className="md:w-3/4 w-11/12">
              <h1 className="text-[#003f7e] upc-mobile font-bold md:text-2xl text-xl my-5">
                Upcoming Contests
              </h1>
            </div>
          </div>

          {/* <div className="flex flex-col mx-20 items-center"> */}
          {/* <div
            onMouseEnter={() => setIsHov(true)}
            onMouseLeave={() => setIsHov(false)}
          > */}
          <div className="relative group">
            <IoChevronBackOutline
              onClick={() => contestslideLeft(ucRef.current)}
              className={`md:text-[60px] text-[30px] text-black z-10 active:scale-75 transition-all ease-in-out cursor-pointer bg-gray-300 md:h-[185px] md:w-12 rounded-lg md:hidden block md:group-hover:block absolute md:mt-[65px] mt-[-50px] md:left-28 right-20`}
            />
            <div
              className="flex overflow-x-auto py-4 md:mx-44 mx-3 md:gap-4 scrollbar-hide scroll-smooth"
              ref={ucRef}
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
            </div>
            <IoChevronForwardOutline
              onClick={() => contestslideRight(ucRef.current)}
              className={`md:text-[60px] text-[30px] text-black md:hidden active:scale-75 transition-all ease-in-out block md:group-hover:block cursor-pointer z-10 top-0 bg-gray-300 md:h-[185px] md:w-12 rounded-lg absolute md:right-28 right-8 md:mt-[65px] mt-[-50px]`}
            />
          </div>
          {/* </div> */}
          {/* </div> */}

          <div className="flex flex-col items-center">
            <div className="md:w-3/4 w-11/12 md:pr-0 pr-20">
              <h1 className="text-[#003f7e] pe-mobile font-bold md:text-2xl text-xl mt-10 mb-5">
                Previous Contests and Editorials
              </h1>
            </div>
          </div>
          {/* <div className="flex flex-col mx-20 items-center"> */}
          {/* <div className="w-11/12 mt-5 mb-10 bg-white/10"> */}
          <div className="relative group mb-10">
            <IoChevronBackOutline
              onClick={() => contestslideLeft(pceRef.current)}
              className={`md:text-[60px] text-[30px] text-black z-10 active:scale-75 transition-all ease-in-out cursor-pointer bg-gray-300 md:h-[185px] md:w-12 rounded-lg md:hidden block md:group-hover:block absolute md:mt-[65px] mt-[-50px] md:left-28 right-20`}
            />
            <div
              className="flex overflow-x-auto py-4 md:mx-44 mx-3 md:gap-4 scrollbar-hide scroll-smooth"
              ref={pceRef}
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
            </div>
            <IoChevronForwardOutline
              onClick={() => contestslideRight(pceRef.current)}
              className={`md:text-[60px] text-[30px] text-black md:hidden active:scale-75 transition-all ease-in-out block md:group-hover:block cursor-pointer z-10 top-0 bg-gray-300 md:h-[185px] md:w-12 rounded-lg absolute md:right-28 right-8 md:mt-[65px] mt-[-50px]`}
            />
          </div>
        </div>
        // </div>
        // </div>
      )}
    </>
  );
}

export default Potd;
