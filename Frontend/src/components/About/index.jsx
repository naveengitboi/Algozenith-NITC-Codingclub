import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { motion } from "framer-motion";
import JoinUs from "../../elements/JoinUs";
const goalsData = [
  {
    goalImg: "/images/goals/ideas.png",
    fLine: "Elevate Your",
    sLine: "Ideas",
  },
  {
    goalImg: "/images/goals/community.png",
    fLine: "Grow With",
    sLine: "Group",
  },
  {
    goalImg: "/images/goals/success.png",
    fLine: "Fuel Your",
    sLine: "Path",
  },
];

const clubGuides = [
    {
        image: '/images/clubMem.png',
        name:'J Naveen',
        role:'Graphic Designer',
        batch:'B21',
        position:'Head'
    },
      {
        image: '/images/clubMem.png',
        name:'J Naveen',
        role:'Graphic Designer',
        batch:'B21',
          position:'Head'
    },
      {
        image: '/images/clubMem.png',
        name:'J Naveen',
        role:'Graphic Designer',
        batch:'B21',
          position:'Head'
    },
      {
        image: '/images/clubMem.png',
        name:'J Naveen',
        role:'Graphic Designer',
        batch:'B21',
        position:'Head'
    },
]

const clubPillars = [
    {
        image: '/images/clubMem.png',
        name:'J Naveen',
        role:'Graphic Designer',
        batch:'B21',
    },
      {
        image: '/images/clubMem.png',
        name:'J Naveen',
        role:'Graphic Designer',
        batch:'B21',
    },
      {
        image: '/images/clubMem.png',
        name:'J Naveen',
        role:'Graphic Designer',
        batch:'B21',
    },
      {
        image: '/images/clubMem.png',
        name:'J Naveen',
        role:'Graphic Designer',
        batch:'B21',
    },
       {
        image: '/images/clubMem.png',
        name:'J Naveen',
        role:'Graphic Designer',
        batch:'B21',
    },
      {
        image: '/images/clubMem.png',
        name:'J Naveen',
        role:'Graphic Designer',
        batch:'B21',
    },
]

function About() {
    const [dragWidth, setDragWidth] = useState(0)
    const [clubPillarDrag, setClubPillarDrag] = useState(0)
    const clubGuidesRef = useRef()
    const clubPillarsRef = useRef()

    useEffect(() => {
        setDragWidth(clubGuidesRef.current.scrollWidth - clubGuidesRef.current.offsetWidth)
        setClubPillarDrag(clubPillarsRef.current.scrollWidth - clubPillarsRef.current.offsetWidth)
    }, [])

  return (
    <div className="pagePadding commonPadding">
      <div className="aboutHeader">
        <h1 className="paraLarge">Our Goals</h1>
        <div className="gradOneSidePurpleLine"></div>
      </div>

      <div className="goalsContainer">
        {goalsData.map((goal, idx) => {
          return (
            <div className="goal">
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
          We at <span>AlgoZenith</span> strive to cultivate a thriving software
          development ecosystem at NIT Calicut. Every student, in our opinion,
          has the capacity to succeed in the fast-paced field of software. Our
          goal is to give students the tools, direction, and encouragement they
          need to turn their potential into the abilities to pursue a career in
          software.
          <br />
          AlgoZenith aspires to empower NIT Calicut students to not only excel
          in the competitive world of software development but also become the
          future leaders and innovators in the field. We strongly believe that{" "}
          <span>AlgoZenith is the place where code meets ambition.</span>
        </p>
      </div>

      <div className="clubMem">
        <div className="guides">
          <div className="aboutHeader">
            <h1 className="paraLarge">Club Guides</h1>
            <div className="gradOneSidePurpleLine"></div>
          </div>

          <motion.div ref={clubGuidesRef} className="imagesOuter">
            <motion.div drag='x'  
                dragConstraints={{left:-dragWidth, right:0}}
            className="imagesInner">
                {
                    clubGuides.map((mem, idx) => {
                        return(
                           <motion.div className="memContainer">
                             <div className="imageContainer">
                                <img src={mem.image} alt={mem.name} />
                            </div>
                            <div className="personProf">
                                <p className="tinySize batchDet">{idx + 1<10? `0${idx+1}`: `${idx}`} <span></span> {mem.batch}</p>
                                <p className="tinySize roleDet">
                                    {mem.role} <span>{mem.position}</span>
                                </p>
                            </div>
                           </motion.div>
                        )
                    })
                }
            </motion.div>
          </motion.div>
        </div>

        <div className="guides">
          <div className="aboutHeader">
            <h1 className="paraLarge">Club Pillars</h1>
            <div className="gradOneSidePurpleLine"></div>
          </div>

          <motion.div ref={clubPillarsRef} className="imagesOuter">
            <motion.div drag='x'  
                 dragConstraints={{left:-clubPillarDrag, right:0}}
            className="imagesInner">
                {
                    clubPillars.map((mem, idx) => {
                        return(
                           <motion.div className="memContainer clubPillars">
                             <div className="imageContainer">
                                <img src={mem.image} alt={mem.name} />
                            </div>
                            <div className="personProf">
                                <p className="tinySize batchDet">{idx + 1<10? `0${idx+1}`: `${idx}`} <span></span> {mem.batch} </p>
                                <p className="tinySize roleDet">
                                    {mem.role} 
                                </p>
                            </div>
                           </motion.div>
                        )
                    })
                }
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="joinUsContainer">
        <JoinUs/>
      </div>
    </div>
  );
}

export default About;
