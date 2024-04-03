import React, {useState} from 'react'

function Upcoming() {
   const [potdData, setPotdData] = useState({
    platform: "leetcode",
    contestType: "",
    dateTime: "",
    deadLine: "",
    link: "",
  });

  const onChangeHandler = (e) => {
    const nameVal = e.target.name;
    const inputVal = e.target.value;
    // console.log(nameVal);
    // console.log(inputVal)
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
  return (
    <div className='page'>
        <h1 className='pageHeading'>
          Upcoming Contests
        </h1>

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
            placeholder="Contest Type"
            name="contestType"
            onChange={onChangeHandler}
          />
          <input
            type="date"
            placeholder="Data"
            name="dateTime"
            onChange={onChangeHandler}
          />
    
          <input
            type="text"
            placeholder="contest link"
            name="link"
            onChange={onChangeHandler}
          />
          <button className="button green" onClick={onSumbitHandler}>
            
            Add Upcoming Contest
          </button>
        </form>
      </div>

      <div className="addedContents">
        <div className="listHeader">
          <p className="listHeading">1</p>
          <p className="listHeading questionName">Upcoming</p>
          <p className="listHeading">Posted Date</p>
          <p className="listHeading">Platform</p>
          <div className="actionsBtn">Dead line</div>
          <div className="actionsBtn">Delete</div>
        </div>
        <ul className="listContainer">
          <li className="listHeader">
            <p className="listHeading">1</p>
            <p className="listHeading questionName">Contest Type</p>
            <p className="listHeading">10/10/23</p>
            <p className="listHeading">GFG</p>
            <p className="listHeading">12/10/23</p>

            
            <div className="actionsBtn">
              <button className="red">Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Upcoming