import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Placementtalks from "../pages/Placement";
function App() {
  const url = "http://localhost:8000";
  // const url = "https://algozenith-nitc-codingclub-2.onrender.com";
  const [name, setn] = useState();
  const [question, setq] = useState();
  const [quesname, setqn] = useState();
  const [concept, setc] = useState();
  const [companies, setcom] = useState();
  const [level, setlvl] = useState();
  const [solution, sets] = useState("");
  const [videolink, setsv] = useState("");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleLogout = () => {
    axios
      .post(url + "/logout")
      .then((res) => {
        console.log(res.data.message);
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };
  useEffect(() => {
    axios
      .get(url + "/admin")
      .then((res) => {
        if (res.data.valid) {
          console.log(res.data.message);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const onsubhand = (e) => {
    e.preventDefault();

    const potd_details = {
      name,
      question,
      quesname,
      concept,
      companies,
      level,
      solution,
      videolink,
    };
    const typed = name === "leetcode" ? "leetcode" : "gfg";
    axios
      .post(url + "/admin", {
        formdata: potd_details,
        formType: typed,
      })
      .then((result) => {
        if (result.data === "Posted") {
          toast.success("Posted question");
        } else if (result.data === "Question already exists") {
          toast.info("Question already posted");
        } else {
          console.log(result);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error while posting question");
      });
  };

  const [companyname, setcompanyname] = useState("Company name");
  const [logo, setlogo] = useState();
  const [jobtype, setjobtype] = useState("Job type");
  const [jobrole, setjobrole] = useState("Job Role");
  const [location, setlocation] = useState("India");
  const [salary, setsalary] = useState();
  const [batch, setbatch] = useState("2024");
  const [apply, setapply] = useState("");
  const [notify2, setNotify2] = useState("");
  const [time2, settime2] = useState(false);

  const companysubmit = (e) => {
    e.preventDefault();

    const datenow = new Date();
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const postdate = datenow.toLocaleDateString("en-IN", options);

    const companydetails = {
      postdate,
      companyname,
      logo,
      jobtype,
      jobrole,
      location,
      salary,
      batch,
      apply,
    };

    axios
      .post(url + "/admin", {
        formdata: companydetails,
        formType: "oppo",
      })
      .then((res) => {
        toast.success("Job opportunity posted");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error in posting job opportunity");
      });
  };

  const [platformname, setplatformname] = useState();
  const [contestnumber, setcontestnumber] = useState();
  const [date, setdate] = useState();
  const [contestlink, setcontestlink] = useState();
  const [solutionlink, setsolutionlink] = useState();
  const [notify3, setNotify3] = useState("");
  const [time3, settime3] = useState(false);

  const editorialsubmit = (e) => {
    e.preventDefault();

    const editorials = {
      platformname,
      contestnumber,
      date,
      contestlink,
      solutionlink,
    };

    axios
      .post(url + "/admin", {
        formdata: editorials,
        formType: "editorials",
      })
      .then((result) => {
        toast.success("Editorial Posted");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error in posting editorial");
      });
  };

  const [upplatform, setupplatform] = useState();
  const [contesttype, setcontesttype] = useState();
  const [update, setupdate] = useState();
  const [uplink, setuplink] = useState();
  const upcomingsubmit = (e) => {
    e.preventDefault();

    const upcontest = {
      upplatform,
      contesttype,
      update,
      uplink,
    };

    axios
      .post(url + "/admin", { formdata: upcontest, formType: "upcontest" })
      .then((result) => {
        if (result.data === "upcontest posted")
          toast.success("Posted Upcoming contest");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error in posting upcoming contest");
      });
  };

  const deletelc = (e) => {
    e.preventDefault();

    axios
      .delete(url + "/admin", { data: { meta: "leetcode" } })
      .then((res) => {
        if (res.data == "leetcode del")
          toast.success("Deleted today's Leetcode potd");
        else if (res.data == "Not posted leetcode potd yet")
          toast.info("Not posted leetcode potd yet");
        else toast.error("Error in deleting (Backend)");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error in deleting (Frontend)");
      });
  };

  const deletegfg = (e) => {
    e.preventDefault();

    axios
      .delete(url + "/admin", { data: { meta: "gfg" } })
      .then((res) => {
        if (res.data == "gfg del") toast.success("Deleted today's GFG potd");
        else if (res.data == "Not posted gfg potd yet")
          toast.info("Not posted gfg potd yet");
        else toast.error("Error in deleting (Backend)");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error in deleting (Frontend)");
      });
  };

  const deleteoppo = (e) => {
    e.preventDefault();

    axios
      .delete(url + "/admin", { data: { meta: "oppo" } })
      .then((res) => {
        if (res.data === "oppo del") toast.success("Deleted Previous JOB");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error in deleting job");
      });
  };

  const deleteeditorial = (e) => {
    e.preventDefault();

    axios
      .delete(url + "/admin", { data: { meta: "editorial" } })
      .then((res) => {
        if (res.data === "editorial del")
          toast.success("Deleted Previously Posted Editorial");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteupcontest = (e) => {
    e.preventDefault();

    axios
      .delete(url + "/admin", { data: { meta: "upcoming" } })
      .then((res) => {
        if (res.data === "upcoming contest del")
          toast.success("Deleted Upcoming contest");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteexpired = (e) => {
    e.preventDefault();

    axios
      .delete(url + "/admin", { data: { meta: "expired" } })
      .then((res) => {
        if (res.data === "Success")
          toast.success("Deleted all expired contests");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error in deleting expired contests");
      });
  };


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

  const [answer, setAnswer] = useState({
    index: 0,
    text: "",
  });

  const [fullTalk, setFullTalk] = useState({
    image: "",
    companylogo: "",
    candidName: "",
    candidCourse: "",
    candidUniversity: "NIT, Calicut",
    company: "",
    roleInCompany: "",
    ctc: "",
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
    <div>
      <div className="flex justify-between">
        <div className="flex justify-center w-1/3  ml-50 mt-10 font-bold bg-blue-600 text-white py-2 rounded-r-full">
          ALGOZENITH ADMIN PAGE
        </div>
        <div>
          <button
            className="flex justify-center ml-50 mt-10 font-bold bg-blue-600 text-white px-4 py-2 rounded-l-full"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex justify-center p-10">
        <div className="w-64 rounded-lg bg-slate-300">
          <h1 className="ml-8 font-bold mt-2">POTD</h1>
          <form className="space-y-5 space-x-6 py-2  " onSubmit={onsubhand}>
            <input
              type="text"
              placeholder="Platform name"
              onChange={(e) => setn(e.target.value)}
              className="ml-6 outline-none w-52"
            />
            <input
              type="url"
              placeholder="Question Link"
              onChange={(e) => setq(e.target.value)}
              className="outline-none w-52"
            />
            <input
              type="text"
              placeholder="Question name"
              onChange={(e) => setqn(e.target.value)}
              className="outline-none w-52"
            />
            <input
              type="text"
              placeholder="Concepts and topics"
              onChange={(e) => setc(e.target.value)}
              className="outline-none w-52"
            />
            <input
              type="text"
              placeholder="Companies"
              onChange={(e) => setcom(e.target.value)}
              className="outline-none w-52"
            />
            <input
              type="text"
              placeholder="Difficulty Level"
              onChange={(e) => setlvl(e.target.value)}
              className="outline-none w-52"
            />
            <input
              type="url"
              placeholder="Textual Code Link"
              onChange={(e) => sets(e.target.value)}
              className="outline-none w-52"
            />
            <input
              type="url"
              placeholder="video Link"
              onChange={(e) => setsv(e.target.value)}
              className="outline-none w-52"
            />
            <div className="flex ml-52">
              <button
                type="submit"
                className=" ml-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-16 rounded"
              >
                Submit
              </button>
            </div>
            <button
              className="bg-red-400 hover:bg-red-500 text-white py-1 px-4 rounded"
              onClick={deletelc}
            >
              Delete LC
            </button>
            <button
              className="bg-red-400 hover:bg-red-500 text-white py-1 px-1 rounded"
              onClick={deletegfg}
            >
              Delete GFG
            </button>
          </form>
        </div>
        <div className="w-64 bg-slate-200 ml-5">
          <h1 className="ml-8 font-bold mt-2">Job Opportunities</h1>
          <form className="space-y-4 space-x-8 py-2" onSubmit={companysubmit}>
            <input
              type="text"
              placeholder="Company Name"
              className="ml-8 outline-none"
              onChange={(e) => setcompanyname(e.target.value)}
            />
            <input
              type="url"
              placeholder="Logo Link"
              onChange={(e) => setlogo(e.target.value)}
              className="outline-none"
            />
            <input
              type="text"
              placeholder="Job Type"
              onChange={(e) => setjobtype(e.target.value)}
              className="outline-none"
            />
            <input
              type="text"
              placeholder="Job Role"
              onChange={(e) => setjobrole(e.target.value)}
              className="outline-none"
            />
            <input
              type="text"
              placeholder="Location"
              onChange={(e) => setlocation(e.target.value)}
              className="outline-none"
            />
            <input
              type="text"
              placeholder="Salary or CTC"
              onChange={(e) => setsalary(e.target.value)}
              className="outline-none"
            />
            <input
              type="text"
              placeholder="Batches eg(2024,2025...)"
              onChange={(e) => setbatch(e.target.value)}
              className="outline-none"
            />
            <input
              type="url"
              placeholder="Apply Link"
              onChange={(e) => setapply(e.target.value)}
              className="outline-none"
            />
            <div className="flex space-x-5">
              <button
                type="submit"
                className="block bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
              >
                Submit
              </button>
              <button
                className="bg-red-400 hover:bg-red-500 text-white py-1 px-4 rounded"
                onClick={deleteoppo}
              >
                Delete
              </button>
            </div>
          </form>
          {time2 && <h1 className="text-purple-500 mx-10">{notify2}</h1>}
        </div>
        <div className="w-64 bg-slate-200 ml-5">
          <h1 className="ml-8 font-bold mt-2">Editorials</h1>
          <form className="space-y-4 space-x-8 py-2" onSubmit={editorialsubmit}>
            <input
              type="text"
              placeholder="Platform Name"
              className="ml-8 outline-none"
              onChange={(e) => setplatformname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Contest Number"
              onChange={(e) => setcontestnumber(e.target.value)}
              className="outline-none"
            />
            <input type="date" onChange={(e) => setdate(e.target.value)} />
            <input
              type="url"
              placeholder="Contest Link"
              onChange={(e) => setcontestlink(e.target.value)}
              className="outline-none"
            />
            <input
              type="url"
              placeholder="Solutions Link"
              onChange={(e) => setsolutionlink(e.target.value)}
              className="outline-none"
            />
            <div className="flex space-x-5">
              <button
                type="submit"
                className="block bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
              >
                Submit
              </button>
              <button
                className="bg-red-400 hover:bg-red-500 text-white py-1 px-4 rounded"
                onClick={deleteeditorial}
              >
                Delete
              </button>
            </div>
          </form>
          {time3 && <h1 className="text-purple-500 mx-10">{notify3}</h1>}
        </div>

        <div className="w-64 bg-slate-200 ml-5">
          <h1 className="ml-8 font-bold mt-2">Upcoming Contests</h1>
          <form className="space-y-4 space-x-8 py-2" onSubmit={upcomingsubmit}>
            <input
              type="text"
              placeholder="Platform Name"
              className="ml-8 outline-none"
              onChange={(e) => setupplatform(e.target.value)}
            />
            <input
              type="text"
              placeholder="Contest type or number"
              onChange={(e) => setcontesttype(e.target.value)}
              className="outline-none"
            />
            <input type="date" onChange={(e) => setupdate(e.target.value)} />
            <input
              type="url"
              placeholder="Contest Link"
              onChange={(e) => setuplink(e.target.value)}
              className="outline-none"
            />
            <div className="flex space-x-5">
              <button
                type="submit"
                className="block bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
              >
                Submit
              </button>
              <button
                className="bg-red-400 hover:bg-red-500 text-white py-1 px-4 rounded"
                onClick={deleteupcontest}
              >
                Delete
              </button>
            </div>
            <button
              className="bg-red-400 hover:bg-red-500 text-white py-1 px-4 rounded"
              onClick={deleteexpired}
            >
              Delete Expired
            </button>
          </form>
          {/* {time3 && <h1 className="text-purple-500 mx-10">{notify3}</h1>} */}
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition:Bounce
      />
      <div className="page">
      <h1 className="pageHeading">Placement Talks</h1>
      <div className="pageFormContainer">
        <div className="absolute text-8xl top-40"> hi</div>
        <form className="commonForm" onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Student Name"
            name="candidName"
            onChange={onChangeHandler}
          />
          <input
            type="url"
            placeholder="Student Photo link"
            name="image"
            onChange={onChangeHandler}
          />
          <input
            type="url"
            placeholder="Company logo link"
            name="companylogo"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Course (Branch)"
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
            placeholder="CTC Offered"
            name="ctc"
            onChange={onChangeHandler}
          />
          {/* <input
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
          /> */}
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
    </div>
  );
}

export default App;
