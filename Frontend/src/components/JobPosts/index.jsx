import React, { useEffect, useState } from "react";
import { CgDetailsMore } from "react-icons/cg";
import axios from "axios";
import { FaLinkedin } from "react-icons/fa6";
import "./index.css";
import JobCard from "../../elements/JobCard";
import url from "../url.js";


function JobPosts() {
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
    <div className="pagePadding mx-16 md:mx-28">
      <div className="jobsHeader">
        <div className="titles">
          <p className="paraLarge">Jobs and Interns</p>
          <div className="titleSvg">
            <CgDetailsMore />
          </div>
        </div>
        <div className="gradCompleteLine"></div>
      </div>

      <div className="mt-8 items-center ml-2 mr-2 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobsdata.map((item, idx) => {
          return <JobCard key={idx} job={item} />;
        })}
      </div>
    </div>
  );
}

export default JobPosts;
