import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./index.css";
import Counter from "../../elements/Counter";
import JobsHome from "../homeElements/JobsHome";
import UCHome from "../homeElements/UCHome";
import GridEffect from "../homeElements/GridEffect";
import InfiniteScroller from "../../elements/InfiniteScroller";
import MVision from "../homeElements/MVision";
import { motion } from "framer-motion";
import { animatePresenceVarients } from "../../Layout";
import axios from "axios";
import url from "../url";
import LCCardHome from "../../components/homeElements/LCCardHome";
// import { motion, animate, useMotionValue, useTransform, } from "framer-motion";

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
  return (
    <motion.div className="pagePadding  commonPadding"
      variants={animatePresenceVarients}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="homeHeroContainer">
        <div className="heroDetails">
          <h1 className="medLSize">
            Stop <br /> <span className="largerSize">Chaos</span> roadmaps
          </h1>
          <p className="paraSmall paraText">
            we believe that coding is not just about writing lines of code; it's
            about unlocking the potential to innovate, create, and
            problem-solve.
          </p>

          <div className="numbersCount">
            <Counter data={counterData[0]} />
            <Counter data={counterData[1]} />
            <Counter data={counterData[2]} duration={5} />
          </div>
        </div>

        <div className="heroImg">
          <img src="/images/algogrid.png" alt="algogrid" />
        </div>
        <div className="fixed bottom-4 right-0 z-50">
          <LCCardHome />
        </div>
      </div>

      {/* <div className="gradMidLine"></div> */}

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

      <div className="algoHeroImg gapBwSections">
        <img src="/images/algohero.png" alt="code classic" />
      </div>

      <div className="resourcesPage gapBwSections">
        <InfiniteScroller />
      </div>
    </motion.div>
  );
}
