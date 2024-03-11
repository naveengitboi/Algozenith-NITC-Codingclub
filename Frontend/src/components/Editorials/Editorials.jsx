import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import algologo from "../Pics/logo.png";
import codeforces from "../Pics/codeforces.png";
import gfglogo from "../Pics/gfglog.png";

function Editorials() {
  const [editorialdata, seteditorialsdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/editorials")
      .then((result) => {
        seteditorialsdata(result.data.reverse());
        console.log(editorialdata);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="mt-2 mx-6 grid grid-cols-1 md:mt-4 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
        {editorialdata.map((editdata, index) => (
          <div key={index} className="bg-violet-100/50  rounded-xl ">
            <div className="flex mt-3">
              <img
                src={
                  editdata.platformname === "Leetcode"
                    ? "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    : editdata.platformname === "Geeksforgeeks"
                    ? gfglogo
                    : editdata.platformname === "Codechef"
                    ? "https://avatars.githubusercontent.com/u/11960354?v=4"
                    : editdata.platformname === "Codeforces"
                    ? codeforces
                    : algologo
                }
                className="ml-5 h-12 w-15"
              />
              <div className="ml-3 mt-2 font-semibold text-xl">
                {editdata.platformname}
              </div>
            </div>
            <div className="ml-5 mt-2 font-medium">
              <div>Contest : {editdata.constestnumber}</div>
              <div>Date : {editdata.date}</div>
            </div>
            <div className="flex justify-around mt-3">
              <a
                href={editdata.contestlink}
                className="shadow-lg mb-3 bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded-md"
              >
                {" "}
                Contest Link
              </a>
              <a
                href={editdata.solutionlink}
                className="shadow-lg mb-3 bg-green-600 hover:bg-green-700 text-white text-sm py-1 px-3 rounded-md"
              >
                {" "}
                Solution Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Editorials;
