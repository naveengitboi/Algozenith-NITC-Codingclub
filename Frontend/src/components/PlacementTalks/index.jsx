import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LiaArrowRightSolid } from "react-icons/lia";
import "./index.css";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { withCursor, removeCursorChange } from "../../Redux/ImageHoverSlicer";
import { animatePresenceVarients } from "../../Layout";
import axios from "axios";
import url from "../url";

export const listItemVarients = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function LinkItem({ talk, uniq }) {
  const dispatch = useDispatch();
  return (
    <Link to={`/placementtalks/fulltalk/${uniq + 1}`} state={{ talk, uniq }}>
      <motion.div
        className="storyLink"
        initial="initial"
        whileHover="whileHover"
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
            {talk.candidName.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: l === " " ? 0 : 16 },
                }}
                transition={{ type: "spring" }}
                key={i}
              >
                {l === " " ? "\u00A0" : l}
              </motion.span>
            ))}
          </motion.span>
          <p className="paraMedium flex md:flex-row flex-col">
            <div>
              {talk.roleInCompany} {" | "}
            </div>
            <div className="md:ml-2 ml-0 md:mt-0 mt-3 flex">
            {talk.company}{" "}
              <img src={talk.companylogo} alt="" className="h-5 ml-3" />
            </div>
          </p>
        </div>

        <motion.img
          src={talk.image}
          alt={talk.candidName}
          className="storyImg h-48 w-44"
          variants={{
            initial: {
              scale: 0,
              opacity: 0,
              rotate: 10,
            },
            whileHover: {
              scale: 1,
              opacity: 1,
              rotate: 0,
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
  const [Talksdata, setTalksdata] = useState([]);

  useEffect(() => {
    axios
      .get(url + "/talks")
      .then((res) => {
        setTalksdata(res.data.reverse());
      })
      .catch((err) => console.error(err));
  }, []);

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
        {Talksdata.map((item, idx) => (
          <div className="talkItem" key={idx}>
            <LinkItem talk={item} uniq={idx} />
            <div className="gradCompleteLine"></div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default PlacementTalks;
