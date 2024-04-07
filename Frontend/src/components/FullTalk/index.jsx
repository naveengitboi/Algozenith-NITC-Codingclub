import React from "react";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import { listItemVarients } from "../PlacementTalks";
function FullTalk() {
  return (
    <AnimatePresence>
      <motion.div
        className="pagePadding"
        variants={listItemVarients}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="ftHeroSection">
          <div className="commonPadding">
            <h1 className="paraLarge">Intern</h1>
            <div className="gradCompleteLine"></div>
          </div>

          <div className="ftimageContainer">
            <div className="bigTextContainerFt">
              <h1 className="largerSize bgTextFt">#07</h1>
              <div className="shortTextFt">
                <p className="paraMedium">#DONOT STOP</p>
                <p className="paraMedium">#until you done it</p>
                <a href="" target="_blank" className="paraSmall">
                  Instagram
                </a>
              </div>
            </div>
            <div className="imageContainerFt">
              <img src="/images/clubMem.png" alt="" />
            </div>
          </div>
        </div>

        <div className="ftContentContainer commonPadding">
          <div className="ftOverViewContainer">
            <div className="ftoDetails">
              <div className="ftodSection">
                <h1 className="thickFont">Name</h1>
                <p className="paraSmall">P Soma Shekar</p>
              </div>
              <div className="ftodSection">
                <h1 className="thickFont">Branch</h1>
                <p className="paraSmall">CS Engineering</p>
              </div>
              <div className="ftodSection">
                <h1 className="thickFont">University</h1>
                <p className="paraSmall">P Soma Shekar</p>
              </div>
              <div className="ftodSection">
                <h1 className="thickFont">Company</h1>
                <p className="paraSmall">P Soma Shekar</p>
              </div>
              <div className="ftodSection">
                <h1 className="thickFont">Role</h1>
                <p className="paraSmall">P Soma Shekar</p>
              </div>
              <div className="ftodSection">
                <h1 className="thickFont">CTC</h1>
                <p className="paraSmall">P Soma Shekar</p>
              </div>
            </div>

            <div className="ftOverviewRight">
              <h1 className="thickFont">OverView</h1>
              <p className="paraSmall">
                Following the announcement of Stadia’s shutdown, questions
                remained on what would happen with the platform’s Wi-Fi
                proprietary controller — whether they could still be used
                wirelessly, or become e-waste.I led the end-to-end design
                direction of the web experience for enabling Bluetooth on the
                controllers and played process.I led the end-to-end design
                direction of the web experience for enabling Bluetooth on the
                controllers and played process.
              </p>
            </div>
          </div>

          <div className="questionAndAnsContainer">
            <div className="questionItem">
              <h1 className="thickFont">Academics percentsage</h1>
              <p className="paraSmall answer">
                Following the announcement of Stadia’s shutdown, questions
                remained on what would happen with the platform’s Wi-Fi
                proprietary controller — whether they could still be used
                wirelessly, or become e-waste.8.95 CGPA
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default FullTalk;
