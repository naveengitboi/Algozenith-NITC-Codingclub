import React from "react";
import { Link } from "react-router-dom";
import { LiaArrowRightSolid } from "react-icons/lia";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { withCursor, removeCursorChange } from "../../Redux/ImageHoverSlicer";
import { animatePresenceVarients } from "../../Layout";
export const placementTalksData = [
  {
    image: "/images/clubMem.png",
    candidName: "Ravan",
    candidCourse: "CS Engineering",
    candidUniversity: "NIT, Calicut",
    company: "Google",
    roleInCompany: "Associate",
    heading: "Story Talks",
    description: "Story Description",
    type: "placement",
    questions: ["Academics", "Academics"],
    answers: [
      `Following the announcement of Stadia’s shutdown, questions remained on what would happen with the platform’s Wi-Fi proprietary controller — whether they could still be used wirelessly, or become e-waste.8.95 CGPA`,
      "Following the announcement of Stadia’s",
    ],
    overview:
      "Following the announcement of Stadia’s shutdown, questions remained on what would happen with the platform’s Wi-Fi proprietary controller — whether they could still be used wirelessly, or become e-waste.8.95 CGPA",
  },
  {
    image: "/images/clubMem.png",
    heading: "Story Talks",
    candidName: "Ravan",
    candidCourse: "CS Engineering",
    candidUniversity: "NIT, Calicut",
    company: "Google",
    roleInCompany: "Associate",
    description: "Story Description",
    type: "placement",
    questions: ["Academics", "Academics"],
    answers: [
      `Following the announcement of Stadia’s shutdown, questions remained on what would happen with the platform’s Wi-Fi proprietary controller — whether they could still be used wirelessly, or become e-waste.8.95 CGPA`,
      "Following the announcement of Stadia’s",
    ],
    overview:
      "Following the announcement of Stadia’s shutdown, questions remained on what would happen with the platform’s Wi-Fi proprietary controller — whether they could still be used wirelessly, or become e-waste.8.95 CGPA",
  },
  {
    image: "/images/clubMem.png",
    heading: "Story Talks",
    candidName: "Ravan",
    candidCourse: "CS Engineering",
    candidUniversity: "NIT, Calicut",
    company: "Google",
    roleInCompany: "Associate",
    description: "Story Description",
    type: "placement",
    questions: ["Academics", "Academics"],
    answers: [
      `Following the announcement of Stadia’s shutdown, questions remained on what would happen with the platform’s Wi-Fi proprietary controller — whether they could still be used wirelessly, or become e-waste.8.95 CGPA`,
      "Following the announcement of Stadia’s",
    ],
    overview:
      "Following the announcement of Stadia’s shutdown, questions remained on what would happen with the platform’s Wi-Fi proprietary controller — whether they could still be used wirelessly, or become e-waste.8.95 CGPA",
  },
  {
    image: "/images/clubMem.png",
    heading: "Story Talks",
    candidName: "Ravan",
    candidCourse: "CS Engineering",
    candidUniversity: "NIT, Calicut",
    company: "Google",
    roleInCompany: "Associate",
    description: "Story Description",
    type: "placement",
    questions: ["Academics", "Academics"],
    answers: [
      `Following the announcement of Stadia’s shutdown, questions remained on what would happen with the platform’s Wi-Fi proprietary controller — whether they could still be used wirelessly, or become e-waste.8.95 CGPA`,
      "Following the announcement of Stadia’s",
    ],
    overview:
      "Following the announcement of Stadia’s shutdown, questions remained on what would happen with the platform’s Wi-Fi proprietary controller — whether they could still be used wirelessly, or become e-waste.8.95 CGPA",
  },
  {
    image: "/images/clubMem.png",
    heading: "Story Talks",
    candidName: "Ravan",
    candidCourse: "CS Engineering",
    candidUniversity: "NIT, Calicut",
    company: "Google",
    roleInCompany: "Associate",
    description: "Story Description",
    type: "placement",
    questions: ["Academics", "Academics"],
    answers: [
      `Following the announcement of Stadia’s shutdown, questions remained on what would happen with the platform’s Wi-Fi proprietary controller — whether they could still be used wirelessly, or become e-waste.8.95 CGPA`,
      "Following the announcement of Stadia’s",
    ],
    overview:
      "Following the announcement of Stadia’s shutdown, questions remained on what would happen with the platform’s Wi-Fi proprietary controller — whether they could still be used wirelessly, or become e-waste.8.95 CGPA",
  },
];

export const listItemVarients = {
  initial: {
    opacity: 0,
    y:100
  },
  animate: {
    opacity: 1,
    y:0,
    transition:{
      duration:0.5,
      ease:"easeInOut"
    }
  },
  exit: {
    opacity: 0,
    x: -100,
    transition:{
      duration:1,
      ease:"easeInOut"
    }
  },
};

function LinkItem({ talk, uniq }) {
  const dispatch = useDispatch();
  return (
    <Link to={`/placementtalks/fulltalk/${uniq + 1}`}>
      <motion.div
        className="storyLink"
        initial="initial"
        whileHover={"whileHover"}
      >
        <div className="storyDetails">
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.05,
              delayChildren: 0.05,
            }}
            className="largerSize thickFont"
          >
            {talk.heading.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
          <p className="paraMedium">{talk.description}</p>
        </div>

        <motion.img
          src={talk.image}
          alt={talk.candidName}
          className="storyImg"
          variants={{
            initial: {
              scale: 0,
              opacity: 0,
              rotate: 10,
            },
            whileHover: {
              scale: 1,
              opacity: 1,
              rotate: 5,
            },
          }}
          transition={{ duration: 1, type: "spring" }}
          onMouseEnter={() => dispatch(withCursor("viewTalk"))}
          onMouseLeave={() => dispatch(removeCursorChange())}
          onClick={() => dispatch(removeCursorChange())}
        />

        <motion.div
          variants={{
            initial: {
              x: "25%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{ type: "spring" }}
          className="storyArrow"
        >
          <LiaArrowRightSolid />
        </motion.div>
      </motion.div>
    </Link>
  );
}

function PlacementTalks() {
  return (
    <motion.div
      className="pagePadding commonPadding"
      variants={animatePresenceVarients}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="linksContainer gapBwSections">
        <div className="aboutHeader">
          <h1 className="paraLarge">Inspirations</h1>
          <div className="gradOneSidePurpleLine"></div>
        </div>
        {placementTalksData.map((item, idx) => {
          return (
            
              <div
                className="talkItem"
                key={idx}>
                <LinkItem talk={item} uniq={idx} />
                <div className="gradCompleteLine"></div>
              </div>
          
          );
        })}
      </div>
    </motion.div>
  );
}

export default PlacementTalks;
