import React from "react";
import { CgDetailsMore } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa6";
import "./index.css";
import JobCard from "../../elements/JobCard";

export const jobsPosts = [
  {
    companyName: "Associate",
    batches: "B-23,24,25 and before",
    jobRole: "Associate Web Developer",
    location: "OnSite",
    pay: "Rs 25000/-",
    type: "internship",
    through: <FaLinkedin />,
    link: "https://www.figma.com/",
  },
  {
    companyName: "Accenture",
    batches: "B-23,24 ",
    jobRole: "SDE 1",
    location: "bengaluru, hyderabad",
    pay: "Rs 25000/-",
    type: "Fulltime",
    through: <FaLinkedin />,
    link: "https://www.figma.com/",
  },
  {
    companyName: "Accenture",
    batches: "B-23,24,25",
    jobRole: "SDE 1",
    location: "OnSite",
    pay: "Rs 25000/-",
    type: "internship",
    through: <FaLinkedin />,
    link: "https://www.figma.com/",
  },
  {
    companyName: "Accenture",
    batches: "B-23,24,25",
    jobRole: "SDE 1",
    location: "OnSite",
    pay: "Rs 25000/-",
    type: "internship",
    through: <FaLinkedin />,
    link: "https://www.figma.com/",
  },
];

function JobPosts() {
  return (
    <div className="pagePadding mx-10">
      <div className="jobsHeader">
        <div className="titles">
          <p className="paraLarge">Jobs and Interns</p>
          <div className="titleSvg">
            <CgDetailsMore />
          </div>
        </div>
        <div className="gradCompleteLine"></div>
      </div>

      <div className="jobsCardsContainer">
        {jobsPosts.map((item, idx) => {
          return <JobCard key={idx} job={item} />;
        })}
      </div>
    </div>
  );
}

export default JobPosts;
