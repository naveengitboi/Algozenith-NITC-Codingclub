import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../../elements/JobCard";
import url from "../url.js";
import { motion } from "framer-motion";
import { animatePresenceVarients } from "../../Layout.jsx";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import "../JobPosts/index.css";
import Loader from "../../elements/Loader.jsx";
function JobPosts() {
  const [jobsdata, setjobsdata] = useState([]);
  const [jobtype, setjobstype] = useState("All");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    axios
      .get(url + "/opportunities")
      .then((res) => {
        setjobsdata(res.data.reverse());
        setloading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filteredJobs =
    jobtype === "All"
      ? jobsdata
      : jobsdata.filter((job) => job.jobtype === jobtype);

  return (
    <>
    {loading ? <Loader/> : (
    <motion.div
      className="pagePadding mx-4 md:mx-28"
      variants={animatePresenceVarients}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="jobsHeader mt-5">
        <div className="titles mt-14 md:mt-0">
          <p className="popins text-[#003f7e]">Jobs and Interns</p>
          <div className="absolute filter-jobs transition-all ease-in h-[40px] md:h-[40px] border-[3px] rounded-2xl border-[#003f7e]/90 justify-between">
            <button
              onClick={() => setjobstype("All")}
              className={`paraSmall filterk ${
                jobtype === "All" ? "bg-[#003f7e]/90 text-white" : ""
              } font-semibold px-2.5 py-[3.5px] md:mr-4 mr-1 rounded-xl text-[#003f7e] mt-0.5 ml-0.5 hover:bg-[#003f7e] hover:text-white`}
            >
              ALL
            </button>
            <button
              onClick={() => setjobstype("Fulltime")}
              className={`paraSmall filterk ${
                jobtype === "Fulltime" ? "bg-[#003f7e]/90 text-white" : ""
              } font-semibold px-2.5 py-[3.5px] md:mx-4 mx-1 rounded-xl text-[#003f7e] hover:bg-[#003f7e] hover:text-white`}
            >
              Fulltime
            </button>
            <button
              onClick={() => setjobstype("Internship")}
              className={`paraSmall filterk ${
                jobtype === "Internship" ? "bg-[#003f7e]/90 text-white" : ""
              } font-semibold px-2.5 py-[3.5px] md:mx-4 mx-1 rounded-xl text-[#003f7e] hover:bg-[#003f7e] hover:text-white`}
            >
              Intern
            </button>
            <button
              onClick={() => setjobstype("Hackathon")}
              className={`paraSmall filterk ${
                jobtype === "Hackathon" ? "bg-[#003f7e]/90 text-white" : ""
              } font-semibold px-2.5 py-[3.5px] md:ml-4 ml-1 mr-0.5 rounded-xl text-[#003f7e] hover:bg-[#003f7e] hover:text-white`}
            >
              Hackathon
            </button>
          </div>
        </div>
        <div className="gradCompleteLine"></div>
      </div>

      <div className="md:mt-8 mt-16 mb-10 items-center md:ml-2 md:mr-2 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((item, idx) => {
          return <JobCard key={idx} job={item} />;
        })}
      </div>
    </motion.div>
      )}
      </>
  );
}

export default JobPosts;
