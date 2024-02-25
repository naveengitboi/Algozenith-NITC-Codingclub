import React, { useEffect, useState } from 'react';
import axios from 'axios';
import gfgl from '../Pics/gfglogo.png';
import lcl from '../Pics/leetcodelogo.png';
import alg from '../Pics/logo.png'

function Potd() {

  const [questiong, setqg] = useState();
  const [conceptg, setcg] = useState();
  const [companiesg, setcomg] = useState();
  const [levelg, setlvlg] = useState();
  const [solutiong, setsg] = useState();
  const [loading, setLoading] = useState(true);

  const [questionl, setql] = useState();
  const [conceptl, setcl] = useState();
  const [companiesl, setcoml] = useState();
  const [levell, setlvll] = useState();
  const [solutionl, setsl] = useState();

  const [divData, setDiv] = useState([]);
  const [isopen, setopen] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/potd')
      .then(result => {

        setDiv(result.data.reverse());
        console.log(divData);

        const datenow = new Date();
        const date = datenow.toDateString();
        const ress = result.data.find(obj => obj.date === date);

        const geeks = ress.geeksforgeeks;
        setqg(geeks.question);
        setcg(geeks.concept);
        setcomg(geeks.companies);
        setlvlg(geeks.level);
        setsg(geeks.solution);

        const leet = ress.leetcode;
        setql(leet.question);
        setcl(leet.concept);
        setcoml(leet.companies);
        setlvll(leet.level);
        setsl(leet.solution);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handlesetopen = (index) =>{
    setopen(index === isopen ? null : index)
  }
  return (
    <div>
    <div className='bg-white flex px-10 flex-wrap justify-center space-x-0 md:space-x-8'>
      <div className='bg-white rounded-3xl shadow-md shadow-gray-400 flex mt-3 w-auto'>
        <div className='p-10 font-bold text-black'>
          <img src={(gfgl)} className='w-72 h-20' />
          <a href={questiong} >Question: LINK</a>
          <h1>Concepts: {conceptg}</h1>
          <h1>Companies: {companiesg}</h1>
          <p>Difficulty level: 
          { 
            (levelg === "Easy" || levelg === "easy")?(<span className='bg-green-500 text-white ml-2 text-sm px-2 pb-0.5 rounded-xl'>Easy</span>):
            (levelg === "Medium" || levelg === "medium")?(<span className='bg-[#f6cd52] text-white ml-2 text-sm px-2 pb-0.5 rounded-xl'>Medium</span>) : 
            (<span className='bg-red-500 text-white ml-2 text-sm px-2 pb-0.5 rounded-xl'>Hard</span>)
            }
          </p>
          <a href={solutiong}>Solution: Link</a>
        </div>
      </div>

      <div className='bg-white rounded-3xl shadow-md shadow-gray-400 flex mt-3 w-auto'>
        <div className='p-10 font-bold text-black'>
          <img src={lcl} className='w-72 h-16 mb-4' />
          <a href={questionl} >Question: LINK</a>
          <h1>Concepts: {conceptl}</h1>
          <h1>Companies: {companiesl}</h1>
          <p>Difficulty level:
            { 
            (levell === "Easy" || levell === "easy")?(<span className='bg-green-500 text-white ml-2 text-sm px-2 pb-0.5 rounded-xl'>Easy</span>):
            (levell === "Medium" || levell === "medium")?(<span className='bg-[#f6cd52] text-white ml-2 text-sm px-2 pb-0.5 rounded-xl'>Medium</span>) : 
            (<span className='bg-red-500 text-white ml-2 text-sm px-2 pb-0.5 rounded-xl'>Hard</span>)
            }
            </p>    
          <a href={solutionl}>Solution: Link</a>
        </div>
      </div>
    </div>
    <div className="container">
        {divData.map((data, index) => (
          <div key={index} onClick={()=>handlesetopen(index)} className="column w-4/5 mx-52 mt-5 font-serif font-medium pl-5 py-2 rounded-lg bg-slate-400">
            {data.date}
            {isopen === index && (
            <div className=' flex flex-wrap justify-center space-x-0 md:space-x-5'>
            <div className='bg-white rounded-3xl shadow-md shadow-gray-400 flex mt-5 w-auto'>
              <div className='p-5 font-semibold text-xs text-black'>
                <img src={(gfgl)} className='w-52 h-12' />
                <a href={data.geeksforgeeks.question} >Question: LINK</a>
                <h1>Concepts: {data.geeksforgeeks.concept}</h1>
                <h1>Companies: {data.geeksforgeeks.companies}</h1>
                <p>Difficulty level: 
                { 
                  (data.geeksforgeeks.level === "Easy" || data.geeksforgeeks.level === "easy")?(<span className='bg-green-500 text-white ml-2 text-xs px-2 pb-0.5 rounded-xl'>Easy</span>):
                  (data.geeksforgeeks.level === "Medium" || data.geeksforgeeks.level === "medium")?(<span className='bg-[#f6cd52] text-white ml-2 text-xs px-2 pb-0.5 rounded-xl'>Medium</span>) : 
                  (<span className='bg-red-500 text-white ml-2 text-xs px-2 pb-0.5 rounded-xl'>Hard</span>)
                  }
                </p>
                <a href={data.geeksforgeeks.solution}>Solution: Link</a>
              </div>
            </div>
      
            <div className='bg-white rounded-3xl shadow-md shadow-gray-400 flex mt-5 w-auto'>
              <div className='p-5 font-semibold text-xs text-black'>
                <img src={lcl} className='w-52 h-12' />
                <a href={data.leetcode.question} >Question: LINK</a>
                <h1>Concepts: {data.leetcode.concept}</h1>
                <h1>Companies: {data.leetcode.companies}</h1>
                <p>Difficulty level:
                  { 
                  (data.leetcode.level === "Easy" || data.leetcode.level === "easy")?(<span className='bg-green-500 text-white ml-2 text-xs px-2 pb-0.5 rounded-xl'>Easy</span>):
                  (data.leetcode.level === "Medium" || data.leetcode.level === "medium")?(<span className='bg-[#f6cd52] text-white ml-2 text-xs px-2 pb-0.5 rounded-xl'>Medium</span>) : 
                  (<span className='bg-red-500 text-white ml-2 text-xs px-2 pb-0.5 rounded-xl'>Hard</span>)
                  }
                  </p>    
                <a href={data.leetcode.solution}>Solution: Link</a>
              </div>
            </div>
          </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Potd;
