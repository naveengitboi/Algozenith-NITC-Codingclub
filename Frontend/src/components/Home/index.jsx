import React, { useState } from "react";
import "./index.css";
import Counter from "../../elements/Counter";
import JobsHome from "../homeElements/JobsHome";
import UCHome from "../homeElements/UCHome";
import GridEffect from "../homeElements/GridEffect";
import InfiniteScroller from "../../elements/InfiniteScroller";
import MVision from "../homeElements/MVision";
import potdlogo from "../Pics/potdlogo.png";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import url from "../url.js"
import Loader from "../../elements/Loader.jsx";

const counterData = [
  {
    count: 30,
    description: "Editorials, Contests",
  },
  {
    count: 70,
    description: "Job Posts",
  },
  {
    count: 500,
    description: "Students Community",
  },
];

export default function Home() {
  const [UCdata, setUCdata] = useState([]);
  const [jobsdata, setjobsdata] = useState([]);
  const [loading, setloader] = useState(false);

  useEffect(() => {
    setloader(true);
    axios
      .get(url + "/upcontest")
      .then((res) => {
        setUCdata(res.data);
        setloader(false);
      })
      .catch((err) => console.error(err));

      setloader(true);
      axios.get(url + "/opportunities")
      .then((res) =>{
        setjobsdata(res.data.reverse());
        setloader(false);
      })
      .catch((err) => {
        console.error(err);
      })

  }, []);
  
  return (
    <>
    {loading ? <Loader/> :(
    <div className="pagePadding commonPadding
    ">
      <div className="homeHeroContainer ">
        <div className="heroDetails">
          <h1 className="medLSize md:text-6xl text-2xl">
            Stop <br />{" "}
            <span className="largerSize md:text-7xl text-3xl">Chaos</span>{" "}
            roadmaps
          </h1>
          <p className="paraSmall w-28 md:w-[300px] paraText text-md">
            We believe that coding is not just about writing lines of code; it's
            about unlocking the potential to innovate, create, and
            problem-solve.
          </p>

          <div className="numbersCount">
            {counterData.map((item, index) => (
              <Counter key={index} data={item} />
            ))}
          </div>
        </div>

        <div className="heroImg ">
          <img src="/images/algogrid.png" alt="algogrid" />
        </div>
        <Link to="/potd">
        <div className="shining-container md:mt-80 mt-64 mr-2 md:mr-0">
          <img src={potdlogo} alt="POTD" className="potd-image" />
        </div>
        </Link>

      </div>

      <div className="gapBtwSection">
        <UCHome UCdata={UCdata}/>
      </div>

      <div className="jobsHomePageContainer gapBtwSection">
        <JobsHome jobsdata={jobsdata}/>
      </div>

      <div className="gapBtwSection">
        <MVision />
      </div>

      <div className="gridLinesEffect gapBtwSection">
        <GridEffect />
      </div>

      <div className="resourcesPage gapBtwSection">
        <InfiniteScroller />
      </div>
    </div>)}
    </>
  );
}
