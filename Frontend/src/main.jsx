
import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home";
import About from "./components/About/";
import Editorials from "./components/Editorials/Editorials.jsx";
import Potd from "./components/Potd/Potd.jsx";
import JobPosts from "./components/JobPosts/index.jsx";
import PlacementTalks from "./components/PlacementTalks/";

import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";
import Mission from "./components/homeElements/Mission.jsx";
import Vission from "./components/homeElements/Vission.jsx";
import NotFound from "./components/NotFound/index.jsx";
import FullTalk from "./components/FullTalk/index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} >
         <Route index element={<Mission/>} />
         <Route path="mission" element={<Mission/>} />
         <Route path="vission" element={<Vission/>} />
      </Route>
      <Route path="home" element={<Home />} />
      <Route path="opportunities" element={<JobPosts />} />
      <Route path="placementtalks" element={<PlacementTalks />} >
      </Route>
      <Route path="placementtalks/fulltalk/:id" element={<FullTalk/>} />
    
      <Route path="potd" element={<Potd />} />
      <Route path="editorials" element={<Editorials />} />
      {/* <Route path='/members' element={<Members/>}/> */}
      <Route path="about" element={<About />} />
       <Route path="notfound" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/notfound" replace />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
