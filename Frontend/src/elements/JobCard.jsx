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
          <h1 className="thickFont">{job.companyName}</h1>
          <div className="batcheAndRole">
            <p className="paraSmall batches">{job.batches}</p>
            <p className="paraSmall jbRole">{job.jobRole}</p>
          </div>

          <div className="locationAndPay">
            <p className="paraSmall">{job.location}</p>
            <p className="paraSmall">{job.pay}</p>
          </div>
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
