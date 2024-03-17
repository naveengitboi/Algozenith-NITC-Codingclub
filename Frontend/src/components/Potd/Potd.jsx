import React, { useEffect, useState } from "react";
import axios from "axios";
import gfgl from "../Pics/gfglogo.png";
import lcl from "../Pics/leetcodelogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import url from "../url.js";

function Potd() {
  const [questiong, setqg] = useState();
  const [quesnameg, setqng] = useState();
  const [conceptg, setcg] = useState();
  const [companiesg, setcomg] = useState();
  const [levelg, setlvlg] = useState();
  const [solutiong, setsg] = useState();
  const [loading, setLoading] = useState(true);

  const [questionl, setql] = useState();
  const [quesnamel, setqnl] = useState();
  const [conceptl, setcl] = useState();
  const [companiesl, setcoml] = useState();
  const [levell, setlvll] = useState();
  const [solutionl, setsl] = useState();

  const [divData, setDiv] = useState([]);
  const [isopen, setopen] = useState(null);

  useEffect(() => {
    axios
      .get(url + "/potd")
      .then((result) => {
        setDiv(result.data.reverse());
        console.log(divData);

        const datenow = new Date();
        const date = datenow.toDateString();
        const ress = result.data.find((obj) => obj.date === date);

        const geeks = ress.geeksforgeeks;
        setqg(geeks.question);
        setqng(geeks.quesname);
        setcg(geeks.concept);
        setcomg(geeks.companies);
        setlvlg(geeks.level);
        setsg(geeks.solution);

        const leet = ress.leetcode;
        setql(leet.question);
        setqnl(leet.quesname);
        setcl(leet.concept);
        setcoml(leet.companies);
        setlvll(leet.level);
        setsl(leet.solution);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  const handlesetopen = (index) => {
    setopen(index === isopen ? null : index);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex px-5 md:px-10 flex-wrap justify-center space-x-0 md:space-x-8">
        <div className="bg-violet-100/50 rounded-3xl shadow-md shadow-gray-400 flex mt-3 w-auto">
          <div className="p-10 font-bold text-black">
            <img src={gfgl} className="w-72 h-20" />
            <a href={questiong}>Question: {quesnameg}</a>
            <h1>Concepts: {conceptg}</h1>
            <h1>Companies: {companiesg}</h1>
            <p>
              Difficulty level:
              {levelg === "Easy" || levelg === "easy" ? (
                <span className="bg-green-500 text-white ml-2 text-sm px-2 pb-0.5 rounded-xl">
                  Easy
                </span>
              ) : levelg === "Medium" || levelg === "medium" ? (
                <span className="bg-[#f6cd52] text-white ml-2 text-sm px-2 pb-0.5 rounded-xl">
                  Medium
                </span>
              ) : (
                <span className="bg-red-500 text-white ml-2 text-sm px-2 pb-0.5 rounded-xl">
                  Hard
                </span>
              )}
            </p>
            <a href={solutiong}>Solution: Link</a>
          </div>
        </div>

        <div className="bg-violet-100/50 rounded-3xl shadow-md shadow-gray-400 flex mt-3 w-auto">
          <div className="p-10 font-bold text-black">
            <img src={lcl} className="w-72 h-16 mb-4" />
            <a href={questionl}>Question: {quesnamel}</a>
            <h1>Concepts: {conceptl}</h1>
            <h1>Companies: {companiesl}</h1>
            <p>
              Difficulty level:
              {levell === "Easy" || levell === "easy" ? (
                <span className="bg-green-500 text-white ml-2 text-sm px-2 pb-0.5 rounded-xl">
                  Easy
                </span>
              ) : levell === "Medium" || levell === "medium" ? (
                <span className="bg-[#f6cd52] text-white ml-2 text-sm px-2 pb-0.5 rounded-xl">
                  Medium
                </span>
              ) : (
                <span className="bg-red-500 text-white ml-2 text-sm px-2 pb-0.5 rounded-xl">
                  Hard
                </span>
              )}
            </p>
            <a href={solutionl}>Solution: Link</a>
          </div>
        </div>
      </div>
      <div className="container">
        {divData.map((data, index) => (
          <>
            <div
              key={index}
              onClick={() => handlesetopen(index)}
              className={`flex justify-between column mx-3 md:mx-20 mt-5 font-serif font-medium pl-5 py-2 border-2 border-blue-500 ${
                isopen === index ? "rounded-t-md" : "rounded-md"
              }`}
            >
              <div>{data.date}</div>
              {isopen === index ? (
                <FontAwesomeIcon icon={faChevronUp} className="mr-5 mt-1" />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} className="mr-5 mt-1" />
              )}
            </div>
            {isopen === index && (
              <div className="flex justify-center space-x-5 column mx-3 md:mx-20 mt-0 font-serif font-medium py-2 border-l-2 border-b-2 border-r-2 border-blue-500 rounded-b-xl">
                <div className="bg-violet-100/50 rounded-3xl shadow-md flex w-auto">
                  <div className="p-5 font-semibold text-xs text-black">
                    <img src={gfgl} className="w-52 h-12" />
                    <a href={data.geeksforgeeks.question}>
                      Question: {data.geeksforgeeks.quesname}
                    </a>
                    <h1>Concepts: {data.geeksforgeeks.concept}</h1>
                    <h1>Companies: {data.geeksforgeeks.companies}</h1>
                    <p>
                      Difficulty level:
                      {data.geeksforgeeks.level === "Easy" ||
                      data.geeksforgeeks.level === "easy" ? (
                        <span className="bg-green-500 text-white ml-2 text-xs px-2 pb-0.5 rounded-xl">
                          Easy
                        </span>
                      ) : data.geeksforgeeks.level === "Medium" ||
                        data.geeksforgeeks.level === "medium" ? (
                        <span className="bg-[#f6cd52] text-white ml-2 text-xs px-2 pb-0.5 rounded-xl">
                          Medium
                        </span>
                      ) : (
                        <span className="bg-red-500 text-white ml-2 text-xs px-2 pb-0.5 rounded-xl">
                          Hard
                        </span>
                      )}
                    </p>
                    <a href={data.geeksforgeeks.solution}>Solution: Link</a>
                  </div>
                </div>

                <div className="bg-violet-100/50 rounded-3xl shadow-md flex w-auto">
                  <div className="p-5 font-semibold text-xs text-black">
                    <img src={lcl} className="w-52 h-12" />
                    <a href={data.leetcode.question}>
                      Question: {data.leetcode.quesname}
                    </a>
                    <h1>Concepts: {data.leetcode.concept}</h1>
                    <h1>Companies: {data.leetcode.companies}</h1>
                    <p>
                      Difficulty level:
                      {data.leetcode.level === "Easy" ||
                      data.leetcode.level === "easy" ? (
                        <span className="bg-green-500 text-white ml-2 text-xs px-2 pb-0.5 rounded-xl">
                          Easy
                        </span>
                      ) : data.leetcode.level === "Medium" ||
                        data.leetcode.level === "medium" ? (
                        <span className="bg-[#f6cd52] text-white ml-2 text-xs px-2 pb-0.5 rounded-xl">
                          Medium
                        </span>
                      ) : (
                        <span className="bg-red-500 text-white ml-2 text-xs px-2 pb-0.5 rounded-xl">
                          Hard
                        </span>
                      )}
                    </p>
                    <a href={data.leetcode.solution}>Solution: Link</a>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default Potd;
