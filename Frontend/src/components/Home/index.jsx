import React, { useState } from "react";
import "./index.css";
import Counter from "../../elements/Counter";
import JobsHome from "../homeElements/JobsHome";
import UCHome from "../homeElements/UCHome";
import GridEffect from "../homeElements/GridEffect";
import InfiniteScroller from "../../elements/InfiniteScroller";
import MVision from "../homeElements/MVision";
import PotdHome from "../homeElements/PotdHome";
import potdlogo from "../Pics/potdlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const counterData = [
  {
    count: 30,
    description: "Editorials & Contests",
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
  const [showMessage, setShowMessage] = useState(false);
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    // Set bounce to true after a delay to trigger the animation
    const timeout = setTimeout(() => {
      setBounce(true);
    }, 1000); // Adjust the delay time as needed

    return () => clearTimeout(timeout); // Clear timeout on component unmount
  }, []);
  return (
    <div className="pagePadding commonPadding">
      <div className="homeHeroContainer">
        <div className="heroDetails">
          <h1 className="medLSize">
            Stop <br /> <span className="largerSize">Chaos</span> roadmaps
          </h1>
          <p className="paraSmall paraText">
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

        <div className="heroImg">
          <img src="/images/algogrid.png" alt="algogrid" />
        </div>
        <NavLink to="/potd" 
        // className={`navLinkContainer ${bounce ? "bounceAnimation" : ""}`}
        >
        <img
          src={potdlogo}
          alt=""
          className="hov cursor-pointer h-40 fixed bottom-16 right-10 z-50"
          onMouseEnter={() => setShowMessage(true)}
          onMouseLeave={() => setShowMessage(false)}
        />
        </NavLink>
        {/* <div className="flex fixed bottom-64 right-32 z-50">
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="h-[23px] info-icon ml-1 mt-2 text-blue-700 "
          />
          {showMessage && <div className="bg-slate-600 w-52 mt-[70px]">P.</div>}
        </div> */}
      </div>

      <div className="gapBwSections">
        <MVision />
      </div>

      <div className="jobsHomePageContainer gapBwSections">
        <JobsHome />
      </div>

      <div className="gapBwSections">
        <UCHome />
      </div>

      <div className="gridLinesEffect gapBwSections">
        <GridEffect />
      </div>

      <div className="resourcesPage gapBwSections">
        <InfiniteScroller />
      </div>
    </div>
  );
}
