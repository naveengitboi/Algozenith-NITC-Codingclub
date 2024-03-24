import React from "react";
import { Link } from "react-router-dom";
import { LiaArrowRightSolid } from "react-icons/lia";
import "./index.css";
import { motion } from "framer-motion";
import {useSelector, useDispatch} from 'react-redux'
import { addViewTalk, removeViewTalk } from '../../Redux/ImageHoverSlicer'

const placementTalksData = [
  {
    image: "/images/clubMem.png",
    candidName: "Ravan",
    heading: "Story Talks",
    description: "Story Description",
  },
  {
    image: "/images/clubMem.png",
    heading: "Story Talks",
    candidName: "Ravan",
    description: "Story Description",
  },
  {
    image: "/images/clubMem.png",
    heading: "Story Talks",
    candidName: "Ravan",
    description: "Story Description",
  },
  {
    image: "/images/clubMem.png",
    heading: "Story Talks",
    candidName: "Ravan",
    description: "Story Description",
  },
  {
    image: "/images/clubMem.png",
    heading: "Story Talks",
    candidName: "Ravan",
    description: "Story Description",
  },
];

function LinkItem({ talk }) {

    const dispatch = useDispatch()

  return (
    <Link to="/placementtalks/2">
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
          onMouseEnter={() => dispatch(addViewTalk())} onMouseLeave={() => dispatch(removeViewTalk())} 
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
    <div className="pagePadding commonPadding">
      <div className="linksContainer">
        {placementTalksData.map((item, idx) => {
          return (
            <div className="talkItem" key={idx}>
              <LinkItem talk={item} />
              <div className="gradCompleteLine"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlacementTalks;
