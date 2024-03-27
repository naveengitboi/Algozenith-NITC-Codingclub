import React, { useEffect, useState } from "react";
import axios from "axios";
import url from "../url.js";
import "../JobPosts/index.css";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { LiaArrowRightSolid } from "react-icons/lia";

// import { jobsPosts } from "../JobPosts";
import JobCard from "../../elements/JobCard";



function JobsHome() {
  const [jobsdata, setjobsdata] = useState([]);

  useEffect (() => {
    axios.get(url + "/opportunities")
    .then((res) =>{
      setjobsdata(res.data);
      console.log(res.data[0]);

    })
    .catch((err) => {
      console.error(err);
    })
  },[]);
  return (
    <div className="jobsHome">
      <div className="jobsHeader">
        <div className="titles">
          <p className="paraLarge">Jobs and Interns</p>
          <div className="titleSvg">
            <Link to="/opportunities">
              <LiaArrowRightSolid />
            </Link>
          </div>
        </div>
        <div className="gradCompleteLine"></div>
      </div>

      <div className="jobsHomesCards space-x-8">
        {
            jobsdata.slice(0,3).map((item, idx) => {
                return(
                    <JobCard key={idx} job={item} />
                )
            })
        }
      </div>
    </div>
  );
}

export default JobsHome;
