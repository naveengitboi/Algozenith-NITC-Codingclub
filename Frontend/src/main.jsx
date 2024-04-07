import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout.jsx";

import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";
import Mission from "./components/homeElements/Mission.jsx";
import Vission from "./components/homeElements/Vission.jsx";

//route splitting

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Editorials = React.lazy(() =>
  import("./components/Editorials/Editorials.jsx")
);
const Potd = React.lazy(() => import("./components/Potd/Potd.jsx"));
const JobPosts = React.lazy(() => import("./components/JobPosts/index.jsx"));
const PlacementTalks = React.lazy(() => import("./components/PlacementTalks/"));
const FullTalk = React.lazy(() => import("./components/FullTalk/index.jsx"));
const NotFound = React.lazy(() => import("./components/NotFound"));

const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}>
          <Route index element={<Mission />} />
          <Route path="mission" element={<Mission />} />
          <Route path="vission" element={<Vission />} />
        </Route>
        <Route path="home" element={<Home />} />
        <Route path="opportunities" element={<JobPosts />} />
        <Route path="placementtalks" element={<PlacementTalks />}></Route>
        <Route path="placementtalks/fulltalk/:id" element={<FullTalk />} />

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
