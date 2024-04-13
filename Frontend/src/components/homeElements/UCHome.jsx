import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "../url";
import { Link } from "react-router-dom";
import { LiaArrowRightSolid } from "react-icons/lia";
import UCCard from "../../elements/UCCard";

function UCHome() {
  const [UCdata, setUCdata] = useState([]);
  const [hoveredIndexuc, setHoveredIndexuc] = useState(null);

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

  useEffect(() => {
    axios
      .get(url + "/upcontest")
      .then((res) => {
        setUCdata(res.data);
        console.log(UCdata);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div className="jobsHeader">
        <div className="titles">
          <p className="paraLarge">Upcoming Contests</p>
          <div className="titleSvg">
            <Link to="/potd">
              <LiaArrowRightSolid />
            </Link>
          </div>
        </div>
        <div className="gradCompleteLine"></div>
      </div>

      <div className="UCcardHome space-y-10 md:space-y-0">
        {UCdata.slice(0,4).map((item, idx) => {
          return (
            <UCCard
              key={idx}
              index={idx}
              data={item}
              hoveredIndexuc={hoveredIndexuc}
              setHoveredIndexuc={setHoveredIndexuc}
              monthconversion={monthconversion}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UCHome;
