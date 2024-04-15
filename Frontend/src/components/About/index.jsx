import React from "react";
import "./index.css";
import { motion } from "framer-motion";
import JoinUs from "../../elements/JoinUs";
import { animatePresenceVarients } from "../../Layout";
import { FaLinkedinIn } from "react-icons/fa";
import { goalsData, b22mem, b21mem, b20mem } from "./membersData";
import Members from "./Members";

function About() {
  return (
    <motion.div className="commonPadding"
       variants={animatePresenceVarients}
      initial="initial"
      animate="animate"
      exit="exit">
    <div className="pagePadding">
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

      <div className="aboutHeader aboutTopContainer">
        <h1 className="paraLarge">Faculty Co-ordinator</h1>
        <div className="gradOneSidePurpleLine"></div>
      </div>

      <div className=" gapBwSections">
        <Members batch={b22mem} batchYear={"B22"} />
        <Members batch={b21mem} batchYear={"B21"} />
        <Members batch={b20mem} batchYear={"B20"} />
        {/* <Members batch={founders} batchYear={"Founder's"}/> */}
        <div className="aboutHeader ml-4">
          <h1 className="paraLarge">Founder's</h1>
          <div className="gradOneSidePurpleLine"></div>
        </div>
        <div className="flex px-10 justify-center space-x-8">
          <div className="mt-5 flex">
            <a
              href="https://in.linkedin.com/in/kattamurikowshiq"
              target="_blank"
            >
              <FaLinkedinIn className="absolute mt-1 bg-blue-600 text-white h-7 w-7 p-1 ml-[136px] rounded-sm rounded-bl-xl"/>
              <img
                src="/images/clubmem/b20/kowshiq_b20.jpg"
                className="h-[220px] rounded-md border-gradient border-gradient-lead"
              />
              <div className="personProf">
                  <h1 className="roleDet text-sm">Algozenith Lead</h1>
                </div>
            </a>
            <div className="w-[320px]">
              <h1 className="founder ml-5"> K Kowshiq</h1>
              <p className="paraSmall text-sm px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                voluptatem debitis eaque laboriosam aut esse nemo culpa dolore
                consequuntur mollitia neque vitae unde sunt exercitationem
                reiciendis harum, fugiat consequatur illum!
              </p>
            </div>
          </div>
          <div className="mt-5 flex">
            <div className="w-[320px] ">
              <h1 className="founder ml-5">D Rahul</h1>
              <p className="paraSmall text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                voluptatem debitis eaque laboriosam aut esse nemo culpa dolore
                consequuntur mollitia neque vitae unde sunt exercitationem
                reiciendis harum, fugiat consequatur illum!
              </p>
            </div>
            <a
              href="https://in.linkedin.com/in/dasari-rahul-7a0830219"
              target="_blank"
            >
              <FaLinkedinIn className="absolute mt-1 bg-blue-600 text-white h-7 w-7 p-1 ml-[136px] rounded-sm rounded-bl-xl"/>
              <img
                src="/images/clubmem/b20/rahul_b20.jpg"
                className="h-[220px] w-[180px] rounded-md border-gradient border-gradient-lead"
              />
              <div className="personProf">
                  <h1 className="roleDet text-sm">Algozenith DSA Lead</h1>
                </div>
            </a>
          </div>
        </div>
      </div>

      <div className="joinUsContainer gapBwSections">
        <JoinUs />
      </div>
      </div>
    </motion.div>
  );
}

export default About;
