import React from "react";

function JobCard({ job }) {
  return (
    <div className="jobCard">
      <div className="jobInfoContainer">
        <div className="typeAndFrom">
          <p className="type paraMedium">{job.type}</p>
          <div className="type svg">{job.through}</div>
        </div>
        <div className="details">
          <h1 className="thickFont">JP Morgan and Chase</h1>
          <p className="paraMedium">{job.jobRole}</p>
        </div>
        <div className="">
          <p className="">{job.location}</p>
          <p className="">{job.pay}</p>
        </div>
        <div className="">
          <p className="">{job.batches}</p>
        </div>
      </div>
      <div className="jobAction">
        <a href={job.link} target="_blank" className="paraMedium">
          Read & Apply
        </a>
      </div>
    </div>
  );
}

export default JobCard;
