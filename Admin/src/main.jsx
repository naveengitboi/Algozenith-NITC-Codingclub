import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './App.css'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './components/Login.jsx'
import Admin from './components/Admin.jsx'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import Potd from './pages/Potd.jsx'
import Editorials from './pages/Editorials.jsx'
import JobOppertunity from './pages/JobOppertunity.jsx'
import Placement from './pages/Placement.jsx'
import Upcoming from './pages/Upcoming.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Login/>}/>
      <Route path='login' element = {<Login/>} />
      <Route path='admin' element = {<Admin/>} />
      {/* comment above line and uncomment below line  for better config, but backend isn't added yet*/}
      {/* <Route path='admin' element = {<Home/>}/> */}
      <Route path='potd' element={<Potd/>}/>
      <Route path='editorials' element={<Editorials/>}/>
      <Route path='jobs' element={<JobOppertunity/>}/>
      <Route path='placementtalks' element={<Placement/>}/>
      <Route path='upcoming' element={<Upcoming/>} />
      <Route path='*' element={<h1>Not found</h1>} />
    </Route>  
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router = {router}/>
  </React.StrictMode>,
)
