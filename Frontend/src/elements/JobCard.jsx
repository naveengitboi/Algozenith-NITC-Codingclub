import { faLocationDot, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function JobCard({ job }) {
  return (
    <div className="jobCard">
      <div className="jobInfoContainer">
        <div className="typeAndFrom">
          <p className="type paraMedium">{job.jobtype}</p>
          <img src={job.logo} className="type svg h-16"/>
        </div>
        <div className="details overflow-x-hidden">
          <h1 className="thickFont scrollableText">{job.companyname}</h1>
          <p className="paraMedium ml-2">{job.jobrole}</p>
        </div>
        <div className="ml-5 space-y-2">
          <div className="flex">
            <FontAwesomeIcon icon={faLocationDot} className="mt-1 mr-3" />
            <p className="">{job.location}</p>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faSackDollar} className="mt-1 mr-3"/>
            <p className="">{job.salary}</p>
          </div>
          <p className="">Batch Passout : {job.batch}</p>
        </div>
      </div>
      <div className="jobAction">
        <a href={job.apply} target="_blank" className="paraMedium">
          Read & Apply
        </a>
      </div>
    </div>
  );
}

export default JobCard;
