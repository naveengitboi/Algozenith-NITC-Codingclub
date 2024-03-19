import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Opportunities from './components/Opportunities/Opportunities.jsx'
import Editorials from './components/Editorials/Editorials.jsx'
import Members from './components/Members/Members.jsx'
import Potd from './components/Potd/Potd.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />}/>
      <Route path='home' element={<Home/>}/>
      <Route path='/opportunities' element={< Opportunities/>}/>
      <Route path='/potd' element={<Potd/>}/>
      <Route path='/editorials' element={<Editorials />} />
      {/* <Route path='/members' element={<Members/>}/> */}
      <Route path='/about' element={<About />} />
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
