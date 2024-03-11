import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [name, setn] = useState();
  const [question, setq] = useState();
  const [quesname, setqn] = useState();
  const [concept, setc] = useState();
  const [companies, setcom] = useState();
  const [level, setlvl] = useState();
  const [solution, sets] = useState("");
  const [notify, setNotify] = useState("");

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
    };

    axios
      .post("http://localhost:8000/admin", {
        formdata: potd_details,
        formType: "potd",
      })
      .then((result) => {
        if (result.data === "Posted") {
          setNotify("Posted question");
        } else if (result.data === "Question already exists") {
          setNotify("Question already posted");
        } else {
          console.log(result);
        }
      })
      .catch((err) => {
        console.log(err);
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

  const companysubmit = (e) => {
    e.preventDefault();

    const companydetails = {
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
      .post("http://localhost:8000/admin", {
        formdata: companydetails,
        formType: "oppo",
      })
      .then((res) => {
        console.log(res);
        setNotify2("Job opportunity posted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [platformname, setplatformname] = useState();
  const [constestnumber, setcontestnumber] = useState();
  const [date, setdate] = useState();
  const [contestlink, setcontestlink] = useState();
  const [solutionlink, setsolutionlink] = useState();

  const editorialsubmit = (e) => {
    e.preventDefault();

    const editorials = {
      platformname,
      constestnumber,
      date,
      contestlink,
      solutionlink,
    };

    axios
      .post("http://localhost:8000/admin", {
        formdata: editorials,
        formType: "editorials",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletehandle = (e) => {
    e.preventDefault();

    axios.delete("http://localhost:8000/admin" , )
  }

  return (
    <div className="flex justify-center p-24">
      <div className="w-64 rounded-lg bg-slate-300">
        <h1 className="ml-8 font-bold mt-2">POTD</h1>
        <form className="space-y-5 space-x-8 py-2" onSubmit={onsubhand}>
          <input
            type="text"
            placeholder="Platform name"
            onChange={(e) => setn(e.target.value)}
            className="ml-8"
          />
          <input
            type="url"
            placeholder="Question Link"
            onChange={(e) => setq(e.target.value)}
          />
          <input
            type="text"
            placeholder="Question name"
            onChange={(e) => setqn(e.target.value)}
          />
          <input
            type="text"
            placeholder="Concepts and topics"
            onChange={(e) => setc(e.target.value)}
          />
          <input
            type="text"
            placeholder="Companies"
            onChange={(e) => setcom(e.target.value)}
          />
          <input
            type="text"
            placeholder="Difficulty Level"
            onChange={(e) => setlvl(e.target.value)}
          />
          <input
            type="url"
            placeholder="Solution Link"
            onChange={(e) => sets(e.target.value)}
          />
          <button
            type="submit"
            className="block bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
          >
            Submit
          </button>
        </form>
        <h1 className="text-green-500">{notify}</h1>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded"
          onClick={deletehandle}
        >
          Delete
        </button>
      </div>
      <div className="w-64 bg-slate-200 ml-5">
        <h1 className="ml-8 font-bold mt-2">Job Opportunities</h1>
        <form className="space-y-4 space-x-8 py-2" onSubmit={companysubmit}>
          <input
            type="text"
            placeholder="Company Name"
            className="ml-8"
            onChange={(e) => setcompanyname(e.target.value)}
          />
          <input
            type="url"
            placeholder="Logo Link"
            onChange={(e) => setlogo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Job Type"
            onChange={(e) => setjobtype(e.target.value)}
          />
          <input
            type="text"
            placeholder="Job Role"
            onChange={(e) => setjobrole(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            onChange={(e) => setlocation(e.target.value)}
          />
          <input
            type="text"
            placeholder="Salary or CTC"
            onChange={(e) => setsalary(e.target.value)}
          />
          <input
            type="text"
            placeholder="Batches eg(2024,2025...)"
            onChange={(e) => setbatch(e.target.value)}
          />
          <input
            type="url"
            placeholder="Apply Link"
            onChange={(e) => setapply(e.target.value)}
          />
          <button
            type="submit"
            className="block bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
          >
            Submit
          </button>
        </form>
        <h1 className="text-green-500">{notify2}</h1>
      </div>
      <div className="w-64 bg-slate-200 ml-5">
        <h1 className="ml-8 font-bold mt-2">Editorials</h1>
        <form className="space-y-4 space-x-8 py-2" onSubmit={editorialsubmit}>
          <input
            type="text"
            placeholder="Platform Name"
            className="ml-8"
            onChange={(e) => setplatformname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Contest Number"
            onChange={(e) => setcontestnumber(e.target.value)}
          />
          <input type="date" onChange={(e) => setdate(e.target.value)} />
          <input
            type="url"
            placeholder="Contest Link"
            onChange={(e) => setcontestlink(e.target.value)}
          />
          <input
            type="url"
            placeholder="Solutions Link"
            onChange={(e) => setsolutionlink(e.target.value)}
          />
          <button
            type="submit"
            className="block bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
          >
            Submit
          </button>
        </form>
        <h1 className="text-green-500">{notify2}</h1>
      </div>
    </div>
  );
}

export default App;
