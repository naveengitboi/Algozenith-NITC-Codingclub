import React, { useState } from "react";

const questionArray = [
  "Your academic Profile",
  "Eligibility Criteria for applying?",
  "What all branches could apply?",
  "What was the selection procedure?",
  "When did you start preparing for placements?",
  "Did your internship and project experinece gave an edge to your selection?",
  "How did you prepare for tests and Interviews?",
  "Interview experince in breif",
  "Any advice for 1st, 2nd, 3rd years respectively?",
  "How do you think students especially 1st and 2nd years could utilise their summer vacation?",
  "What are the important subjects and topics that this particular company expects the candidates to know well?",
  "What offline and online resources did you refer?",
  "Tips for non-cs & challanges faced during prep?",
  "Message to students?",
];

// let arr = []
// for(let i =0; i<14;i++){
//   arr.push('')
// }
// console.log(arr)
function Placement() {
  const [answer, setAnswer] = useState({
    index: 0,
    text: "",
  });
  const [fullTalk, setFullTalk] = useState({
    image: "",
    candidName: "",
    candidCourse: "",
    candidUniversity: "NIT, Calicut",
    company: "",
    roleInCompany: "",
    heading: "",
    description: "",
    type: "",
    questions: questionArray,
    answers: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    overview: "",
    results: [],
  });

  const questionHandlerAdder = (e, indexChange) => {
    e.preventDefault();
    // console.log(fullTalk.results)

    if (!fullTalk.results.length) {
      let newItem = {
        qId: indexChange,
        que: questionArray[indexChange],
        val: answer.text,
      };
      setFullTalk((prev) => ({
        ...prev,
        results: [...prev.results, newItem],
      }));
    } else {
      setFullTalk((prev) => {
        return{
          ...prev,
          results : prev.results.map((each) => {
          if (each.qId == indexChange) {
            let newItem = {
              qId: indexChange,
              que: questionArray[indexChange],
              val: answer.text,
            };
            return newItem;
          }
          return each;
        })
        }
      });
    }

    
  };

  const onChangeHandler = (e) => {
    const nameVal = e.target.name;
    const inputVal = e.target.value;
    console.log(nameVal);
    console.log(inputVal);
    setFullTalk((prev) => ({ ...prev, [nameVal]: inputVal }));
  };
  const onSumbitHandler = (e) => {
    e.preventDefault();
    let flag = false;
    const dataValues = Object.values(fullTalk);
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
      console.log(fullTalk);
    }
  };
  return (
    <div className="page">
      <h1 className="pageHeading">Placement Talks</h1>
      <div className="pageFormContainer">
        <form className="commonForm" action="">
          <input
            type="text"
            placeholder="Student Name"
            name="candidName"
            onChange={onChangeHandler}
          />
          <input
            type="file"
            placeholder="Compnay Logo"
            name="image"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Course"
            name="candidCourse"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="University"
            name="university"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Placement/Intern"
            name="type"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="company placed"
            name="company"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Role in placed Company"
            name="roleInCompany"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Talk Heading"
            name="heading"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Description in 1 or 2 lines"
            name="description"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Overview"
            name="overview"
            onChange={onChangeHandler}
          />
          {fullTalk.questions.map((que, idx) => {
            console.log("map idx ", idx);
            return (
              <div className="labelAndInput">
                <label htmlFor="question">{idx + 1 + " " + que}</label>
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  onChange={(e) => {
                    setAnswer((prev) => ({
                      index: idx,
                      text: e.target.value,
                    }));
                  }}
                  className="answerText"
                  placeholder={"answer" + idx}
                />

                <button
                  className="addBtn green"
                  onClick={(e) => questionHandlerAdder(e, idx)}
                >
                  Add
                </button>
              </div>
            );
          })}
          <button className="button green" onClick={onSumbitHandler}>
            Add Talk
          </button>
        </form>
      </div>
    </div>
  );
}

export default Placement;
