import React, { useState } from "react";

function JobOppertunity() {
  const [jobPost, setJobPost] = useState({
    companyName: "",
    logo: "",
    jobType: "",
    jobRole: "",
    location: "",
    salary: "",
    batch: "",
    apply: "",
  });
  const onChangeHandler = (e) => {
    const nameVal = e.target.name;
    const inputVal = e.target.value;
    console.log(nameVal);
    console.log(inputVal);
    setJobPost((prev) => ({ ...prev, [nameVal]: inputVal }));
  };
  const onSumbitHandler = (e) => {
    e.preventDefault();
    let flag = false;
    const dataValues = Object.values(jobPost);
    for (let val of dataValues) {
      if (val == undefined || val == "") {
        flag = true;
        break;
      }
    }
    if (flag) {
      alert("Enter all data");
    } else {
      //add to backend
      console.log(jobPost);
    }
  };

  return (
    <div className="page">
      <h1 className="pageHeading">Job Opportunity</h1>
      <div className="pageFormContainer">
        <form className="commonForm" action="">
          <input
            type="text"
            placeholder="Compnay Name"
            name="companyName"
            onChange={onChangeHandler}
          />
          <input
            type="file"
            placeholder="Compnay Logo"
            name="logo"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="batch"
            name="batch"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Role"
            name="jobRole"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="salary"
            name="salary"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Job Type"
            name="jobType"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Apply link"
            name="applyLink"
            onChange={onChangeHandler}
          />
          <button className="button green" onClick={onSumbitHandler}>
            {" "}
            Add POTD{" "}
          </button>
        </form>
      </div>

      <div className="addedContents jobsPageContainer">
        <div className="listHeader">
          <p className="listHeading">Sl Number</p>
          <p className="listHeading questionName">Job Name</p>
          <p className="listHeading">Posted Date</p>
          <p className="listHeading">Deadline</p>
          <div className="actionsBtn">Update</div>
          <div className="actionsBtn">Delete</div>
        </div>
        <ul className="listContainer">
          <li className="listHeader">
            <p className="listHeading">1</p>
            <p className="listHeading questionName">Accenture Enginner</p>
            <p className="listHeading">12/10/23</p>
            <p className="listHeading">15/10/23</p>

            <div className="actionsBtn">
              <button className="orange">Update</button>
            </div>
            <div className="actionsBtn">
              <button className="red">Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default JobOppertunity;
