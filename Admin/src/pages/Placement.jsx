import React, { useState } from "react";
import axios from "axios";

const questionArray = [
  "Your academic Profile",
  "Eligibility Criteria for applying?",
  "What all branches could apply?",
  "What was the selection procedure?",
  "When did you start preparing for placements?",
  "Did your internship and project experience give an edge to your selection?",
  "How did you prepare for tests and Interviews?",
  "Interview experience in brief",
  "Any advice for 1st, 2nd, 3rd years respectively?",
  "How do you think students especially 1st and 2nd years could utilize their summer vacation?",
  "What are the important subjects and topics that this particular company expects the candidates to know well?",
  "What offline and online resources did you refer?",
  "Tips for non-CS & challenges faced during prep?",
  "Message to students?",
];

function Placement() {

  const url = "http://localhost:8000";

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
    overview: "",
    results: [],
  });

  const questionHandlerAdder = (e, indexChange) => {
    e.preventDefault();

    const newItem = {
      qId: indexChange,
      que: questionArray[indexChange],
      val: answer.text,
    };

    setFullTalk((prev) => {
      const existingItemIndex = prev.results.findIndex(
        (item) => item.qId === indexChange
      );

      if (existingItemIndex !== -1) {
        const updatedResults = [...prev.results];
        updatedResults[existingItemIndex] = newItem;
        return {
          ...prev,
          results: updatedResults,
        };
      } else {
        return {
          ...prev,
          results: [...prev.results, newItem],
        };
      }
    });
  };

  const onChangeHandler = (e) => {
    const nameVal = e.target.name;
    const inputVal = e.target.value;
    setFullTalk((prev) => ({ ...prev, [nameVal]: inputVal }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const dataValues = Object.values(fullTalk).slice(0, -1); // Exclude results array
    const isEmpty = dataValues.some((val) => val === undefined || val === "");

    if (isEmpty) {
      // alert("Please enter all data");
      axios.post(url + "/admin", {
        formdata: fullTalk,
        formType: "Talks",
      })
      .then((res) => {
        console.log(res.data);
      });
      console.log(fullTalk);
    } else {
      // Add to backend
      axios.post(url + "/admin", {
        formdata: fullTalk,
        formType: "Talks",
      })
      .then((res) => {
        console.log(res.data);
      });
      console.log(fullTalk);
    }
  };

  return (
    <div className="page">
      <h1 className="pageHeading">Placement Talks</h1>
      <div className="pageFormContainer">
        <form className="commonForm" onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Student Name"
            name="candidName"
            onChange={onChangeHandler}
          />
          <input
            type="file"
            placeholder="Company Logo"
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
            name="candidUniversity"
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
            placeholder="Company placed"
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
          {questionArray.map((que, idx) => (
            <div className="labelAndInput" key={idx}>
              <label htmlFor="question">{idx + 1 + " " + que}</label>
              <textarea
                rows="4"
                cols="50"
                type="text"
                onChange={(e) => {
                  setAnswer({
                    index: idx,
                    text: e.target.value,
                  });
                }}
                className="answerText"
                placeholder={"answer" + (idx + 1)}
              />
              <button
                className="addBtn green"
                onClick={(e) => questionHandlerAdder(e, idx)}
              >
                Add [ + ]
              </button>
            </div>
          ))}
          <button className="button bg-blue-600" type="submit"
          >
            Add Talk
          </button>
        </form>
      </div>
    </div>
  );
}

export default Placement;
