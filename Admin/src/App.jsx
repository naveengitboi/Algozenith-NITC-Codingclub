import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {

  const [name, setn] = useState();
  const [question, setq] = useState();
  const [concept, setc] = useState();
  const [companies, setcom] = useState();
  const [level, setlvl] = useState();
  const [solution, sets] = useState();
  const [notify, setNotify] = useState("");

  const onsubhand = (e)=>{
      e.preventDefault();

      axios.post('http://localhost:8000/admin', {name,question,concept,companies,level,solution})
      .then(result => {
        if(result.data === "Posted")
        {
          setNotify("Posted question")
        }
        else if(result.data === "Question already exists")
        {
            setNotify("Question already posted")
        }
        else{
          console.log(result);
        }
      })
      .catch(err =>{
        console.log(err)
      })
  }

  return (
    <div className='flex justify-center p-24'>
    <div className='w-64 rounded-lg bg-slate-300'> 
      <form
      className='space-y-5 space-x-8 py-5' onSubmit={onsubhand}>
        <input type="text" placeholder='Platform name' onChange={(e)=>setn(e.target.value)}
        className='ml-8' />
        <input type="url"  placeholder='Question Link' onChange={(e)=>setq(e.target.value)}
        />
        <input type="text" placeholder='Concepts and topics'onChange={(e)=>setc(e.target.value)}/>
        <input type="text" placeholder='Companies' onChange={(e)=>setcom(e.target.value)}/>
        <input type="text" placeholder='Difficulty Level' onChange={(e)=>setlvl(e.target.value)}/>
        <input type="url" placeholder='Solution Link' onChange={(e)=>sets(e.target.value)}/>
        <button type='submit' className='block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'>
            Submit
          </button>
      </form>
      <h1 className='text-red-500'>{notify}</h1>
    </div>
    </div>
  )
}

export default App
