import React, { useState } from "react";

function Potd() {
  const [potdData, setPotdData] = useState({
    platform: "leetcode",
    questionLink: "",
    questionName: "",
    concepts: "",
    companies: "",
    level: "",
    solutionLink: "",
  });

  const onChangeHandler = (e) => {
    const nameVal = e.target.name;
    const inputVal = e.target.value;
    console.log(nameVal);
    setPotdData((prev) => ({ ...prev, [nameVal]: inputVal }));
  };
  const onSumbitHandler = (e) => {
    e.preventDefault();
    let flag = false;
    const dataValues = Object.values(potdData);
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
      console.log(potdData);
    }
  };

  //add fetching only

  //add delete options

  //add Update option

  return (
    <div className="page">
      <h1 className="pageHeading">potd</h1>
      <div className="pageFormContainer">
        <form className="commonForm" action="">
          <div className="inputSection">
            <label htmlFor="platform">Platform</label>
            <select
              type="text"
              id="platform"
              name="platform"
              onChange={onChangeHandler}
            >
              <option value="leetcode" selected>
                Leetcode
              </option>
              <option value={"codechef"}>Codechef</option>
              <option value={"gfg"}>Gfg</option>
              <option value="codeforces">Codeforce</option>
              <option value={"atcoder"}>Atcoder</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Question Link"
            name="questionLink"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="question name"
            name="questionName"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="concepts and topics"
            name="concepts"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="companies"
            name="companies"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Level"
            name="level"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="solution link"
            name="solutionLink"
            onChange={onChangeHandler}
          />
          <button className="button green" onClick={onSumbitHandler}>
            {" "}
            Add POTD{" "}
          </button>
        </form>
      </div>

      <div className="addedContents">
        <div className="listHeader">
          <p className="listHeading">1</p>
          <p className="listHeading questionName">question Name</p>
          <p className="listHeading">Posted Date</p>
          <p className="listHeading">Platform</p>
          <div className="actionsBtn">Update</div>
          <div className="actionsBtn">Delete</div>
        </div>
        <ul className="listContainer">
          <li className="listHeader">
            <p className="listHeading">1</p>
            <p className="listHeading questionName">Question Name</p>
            <p className="listHeading">Posted At</p>
            <p className="listHeading">GFG</p>

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

export default Potd;
