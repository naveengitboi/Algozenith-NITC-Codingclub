import React from "react";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import { listItemVarients } from "../PlacementTalks";
import { useLocation, useNavigate } from "react-router-dom";

function FullTalk() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.talk) {
    // Redirect to the PlacementTalks page if there's no state
    navigate("/placementtalks", { replace: true });
    return null;
  }

  const talk = state.talk;
  const uniq = state.uniq;
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
          <div className="commonPadding md:mt-1 mt-5">
            <h1 className="paraLarge">{talk.type}</h1>
            <div className="gradCompleteLine"></div>
          </div>

          <div className="flex md:flex-row flex-col mt-10 md:ml-72">
            <div className="bigTextContainerFt md:ml-10 ml-7">
              <h1 className="largerSize bgTextFt"># {uniq + 1}</h1>
              <img
                src={talk.image}
                alt={talk.candidName}
                className="md:h-[350px] h-[200px] ml-7 w-auto md:ml-20"
              />
            </div>
            <div className="ftOverViewContainer mt-[50px]">
              <div className="ftoDetails space-y-4">
                <div className="ftodSection">
                  <h1 className="thickFont">Name</h1>
                  <p className="paraSmall md:ml-[62px] ml-[51px]">{talk.candidName}</p>
                </div>
                <div className="ftodSection">
                  <h1 className="thickFont">Branch</h1>
                  <p className="paraSmall md:ml-[48px] ml-[40px]">{talk.candidCourse}</p>
                </div>
                <div className="ftodSection">
                  <h1 className="thickFont">University</h1>
                  <p className="paraSmall md:ml-5 ml-[22px]">{talk.candidUniversity}</p>
                </div>
                <div className="ftodSection">
                  <h1 className="thickFont">Company</h1>
                  <p className="paraSmall ml-7">{talk.company}</p>
                </div>
                <div className="ftodSection">
                  <h1 className="thickFont">Role</h1>
                  <p className="paraSmall md:ml-[75px] ml-[61px]">{talk.roleInCompany}</p>
                </div>
                <div className="ftodSection">
                  <h1 className="thickFont">CTC</h1>
                  <p className="paraSmall md:ml-[81px] ml-[65px]">{talk.ctc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ftContentContainer commonPadding">
          {/* <div className="ftOverViewContainer ">
            <div className="ftoDetails space-y-3">
              <div className="ftodSection">
                <h1 className="thickFont">Name</h1>
                <p className="paraSmall">{talk.candidName}</p>
              </div>
              <div className="ftodSection">
                <h1 className="thickFont">Branch</h1>
                <p className="paraSmall">{talk.candidCourse}</p>
              </div>
              <div className="ftodSection">
                <h1 className="thickFont">University</h1>
                <p className="paraSmall">{talk.candidUniversity}</p>
              </div>
              <div className="ftodSection">
                <h1 className="thickFont">Company</h1>
                <p className="paraSmall">{talk.company}</p>
              </div>
              <div className="ftodSection">
                <h1 className="thickFont">Role</h1>
                <p className="paraSmall">{talk.roleInCompany}</p>
              </div>
              <div className="ftodSection">
                <h1 className="thickFont">CTC</h1>
                <p className="paraSmall">{talk.ctc}</p>
              </div>
            </div>

            <div className="ftOverviewRight">
              {/* <h1 className="thickFont">OverView</h1>
              <p className="paraSmall">{talk.overview}</p> 
              <img
                src={talk.image}
                alt={talk.candidName}
                className="h-[350px] w-auto"
              />
            </div>
          </div> */}

          <div className="questionAndAnsContainer">
            {talk.results.map((data, index) => (
              <div className="questionItem md:mb-16 mb-12" key={index}>
                <h1 className="thickFont mr-10">{data.que}</h1>
                <p
                  className="paraSmall answer"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {data.val}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default FullTalk;
