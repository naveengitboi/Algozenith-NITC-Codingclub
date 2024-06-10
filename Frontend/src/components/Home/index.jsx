import React, { useState } from "react";
import "./index.css";
import Counter from "../../elements/Counter";
import JobsHome from "../homeElements/JobsHome";
import UCHome from "../homeElements/UCHome";
import GridEffect from "../homeElements/GridEffect";
import InfiniteScroller from "../../elements/InfiniteScroller";
import MVision from "../homeElements/MVision";
// import PotdHome from "../homeElements/PotdHome";
import potdlogo from "../Pics/potdlogo.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";

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
        <UCHome />
      </div>

      <div className="jobsHomePageContainer gapBtwSection">
        <JobsHome />
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
    </div>
  );
}
