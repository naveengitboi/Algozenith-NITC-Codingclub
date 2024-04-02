import React from "react";
import "./index.css";
import { motion } from "framer-motion";
import JoinUs from "../../elements/JoinUs";

import { goalsData, b22mem, b21mem, b20mem } from "./membersData";
import Members from "./Members";


function About() {


  return (
    <div className="pagePadding commonPadding">
      <div className="aboutTopContainer">
        <div className="aboutHeader">
          <h1 className="paraLarge">Our Goals</h1>
          <div className="gradOneSidePurpleLine"></div>
        </div>

        <div className="goalsContainer">
          {goalsData.map((goal, idx) => {
            return (
              <div className="goal" key={idx}>
                <div className="goalImg">
                  <img src={goal.goalImg} alt={goal.sLine} />
                </div>
                <div className="goalInfo">
                  <p className="paraMedium">{goal.fLine}</p>
                  <h1 className="smallLSize">{goal.sLine}</h1>
                </div>
              </div>
            );
          })}
        </div>

        <div className="aimsfor">
          <p className="paraSmall">
            We at <span>AlgoZenith</span> strive to cultivate a thriving
            software development ecosystem at NIT Calicut. Every student, in our
            opinion, has the capacity to succeed in the fast-paced field of
            software. Our goal is to give students the tools, direction, and
            encouragement they need to turn their potential into the abilities
            to pursue a career in software.
            <br />
            AlgoZenith aspires to empower NIT Calicut students to not only excel
            in the competitive world of software development but also become the
            future leaders and innovators in the field. We strongly believe that{" "}
            <span>AlgoZenith is the place where code meets ambition.</span>
          </p>
        </div>
      </div>

      <div className="clubMem gapBwSections">
      
        <Members batch={b22mem} batchYear={'Our B22'} />
        <Members batch={b21mem} batchYear={'Our B21'} />
        <Members batch={b20mem} batchYear={'Our B20'} />
      
      </div>

      <div className="joinUsContainer gapBwSections">
        <JoinUs />
      </div>
    </div>
  );
}

export default About;
