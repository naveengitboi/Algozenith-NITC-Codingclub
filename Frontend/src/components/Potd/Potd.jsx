import React, { useEffect, useState } from 'react';
import axios from 'axios';
import gfgl from '../Pics/gfglogo.png';
import lcl from '../Pics/leetcodelogo.png';
import alg from '../Pics/logo.png'

function Potd() {
  const [nameg, setng] = useState();
  const [questiong, setqg] = useState();
  const [conceptg, setcg] = useState();
  const [companiesg, setcomg] = useState();
  const [levelg, setlvlg] = useState();
  const [solutiong, setsg] = useState();
  const [loading, setLoading] = useState(true);

  const [namel, setnl] = useState();
  const [questionl, setql] = useState();
  const [conceptl, setcl] = useState();
  const [companiesl, setcoml] = useState();
  const [levell, setlvll] = useState();
  const [solutionl, setsl] = useState();

  useEffect(() => {
    axios.get('http://localhost:8000/potd')
      .then(result => {
        const data1 = result.data[0];
        const data2 = result.data[1];
        (data1.name === "gfg")?(setng(data1.name)):(setnl(data1.name));
        (data1.name === "gfg")?(setqg(data1.question)):(setql(data1.question));
        (data1.name === "gfg")?(setcg(data1.concept)):(setcl(data1.concept));
        (data1.name === "gfg")?(setcomg(data1.companies)):(setcoml(data1.companies));
        (data1.name === "gfg")?(setlvlg(data1.level)):(setlvll(data1.level));
        (data1.name === "gfg")?(setsg(data1.solution)):(setsl(data1.solution));

        (data2.name === "gfg")?(setng(data2.name)):(setnl(data2.name));
        (data2.name === "gfg")?(setqg(data2.question)):(setql(data2.question));
        (data2.name === "gfg")?(setcg(data2.concept)):(setcl(data2.concept));
        (data2.name === "gfg")?(setcomg(data2.companies)):(setcoml(data2.companies));
        (data2.name === "gfg")?(setlvlg(data2.level)):(setlvll(data2.level));
        (data2.name === "gfg")?(setsg(data2.solution)):(setsl(data2.solution));
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

  return (
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
  );
}

export default Potd;
