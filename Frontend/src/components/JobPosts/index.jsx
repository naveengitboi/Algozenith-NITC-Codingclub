import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../../elements/JobCard";
import url from "../url.js";

function JobPosts() {
  const [jobsdata, setjobsdata] = useState([]);
  const [jobtype, setjobstype] = useState("All");

  useEffect(() => {
    axios
      .get(url + "/opportunities")
      .then((res) => {
        setjobsdata(res.data);
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
    <div className="pagePadding mx-16 md:mx-28">
      <div className="jobsHeader mt-5">
        <div className="titles">
          <p className="paraLarge">Jobs and Interns</p>
          <div className="space-x-8">
            <button
              onClick={() => setjobstype("All")}
              className={`paraSmall ${
                jobtype === "All" ? "bg-[#003f7e]/90 text-white" : ""
              } font-semibold px-2.5 py-0.5 rounded-xl text-[#003f7e]`}
            >
              ALL
            </button>
            <button
              onClick={() => setjobstype("Fulltime")}
              className={`paraSmall ${
                jobtype === "Fulltime" ? "bg-[#003f7e]/90 text-white" : ""
              } font-semibold px-2.5 py-0.5 rounded-xl text-[#003f7e]`}
            >
              Fulltime
            </button>
            <button
              onClick={() => setjobstype("Internship")}
              className={`paraSmall ${
                jobtype === "Internship" ? "bg-[#003f7e]/90 text-white" : ""
              } font-semibold px-2.5 py-0.5 rounded-xl text-[#003f7e]`}
            >
              Intern
            </button>
            <button
              onClick={() => setjobstype("Hackathon")}
              className={`paraSmall ${
                jobtype === "Hackathon" ? "bg-[#003f7e]/90 text-white" : ""
              } font-semibold px-2.5 py-0.5 rounded-xl text-[#003f7e]`}
            >
              Hackathon
            </button>
          </div>
        </div>
        <div className="gradCompleteLine"></div>
      </div>

      <div className="mt-8 items-center ml-2 mr-2 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((item, idx) => {
          return <JobCard key={idx} job={item} />;
        })}
      </div>
    </div>
  );
}

export default JobPosts;
