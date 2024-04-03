import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        if(result.data === "upcontest posted")
        toast.success("Posted Upcoming contest")
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error in posting upcoming contest")
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

    axios.delete(url + "/admin" , {data: {meta: "expired"}})
    .then((res)=>{
      if(res.data === "Success")
      toast.success("Deleted all expired contests")
    })
    .catch((err) => {
      console.log(err)
      toast.error("Error in deleting expired contests")
    })
  }

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
              placeholder="Solution Link"
              onChange={(e) => sets(e.target.value)}
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
    </div>
  );
}

export default App;
