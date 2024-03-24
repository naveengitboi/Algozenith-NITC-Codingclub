import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './components/Login.jsx'
import Admin from './components/Admin.jsx'
import Layout from './components/Layout.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Login/>}/>
      <Route path='login/' element = {<Login/>} />
      <Route path='admin/' element = {<Admin/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router = {router}/>
  </React.StrictMode>,
)
