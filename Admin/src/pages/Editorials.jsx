import React, {useState} from 'react'

function Editorials() {
   const [potdData, setPotdData] = useState({
  platformname: "",
  contestnumber: "",
  date: "",
  contestlink: "",
  solutionlink: "",
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
              name="platformname"
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
            placeholder="Contest Number"
            name="contestnumber"
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
            name="contestlink"
            onChange={onChangeHandler}
          />

          <input
            type="text"
            placeholder="solution link"
            name="solutionlink"
            onChange={onChangeHandler}
          />

          <button className="button green" onClick={onSumbitHandler}>
            Add Editorial
          </button>
        </form>
      </div>

      <div className="addedContents">
        <div className="listHeader">
          <p className="listHeading">contest number</p>
          <p className="listHeading questionName">Editorial</p>
          <p className="listHeading">Posted Date</p>
          <p className="listHeading">Platform</p>
          <div className="actionsBtn">solution</div>
          <div className="actionsBtn">Delete</div>
        </div>
        <ul className="listContainer">
          <li className="listHeader">
            <p className="listHeading">1</p>
            <p className="listHeading questionName">Contest Type</p>
            <p className="listHeading">10/10/23</p>
            <p className="listHeading">GFG</p>
            <p className="listHeading">solution link</p>

            
            <div className="actionsBtn">
              <button className="red">Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Editorials