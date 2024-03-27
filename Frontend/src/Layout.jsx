import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { motion, useMotionValue } from "framer-motion";
import readTalk from "./assets/hoverimg/readTalk.svg";
import { useSelector } from "react-redux";
import dragImg from "./assets/hoverimg/drag.svg";
import ScrollToTop from "./elements/ScrollToTop";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ScrollRestoration } from "react-router-dom";
const cursorVarient = {
  default: {
    width: 20,
    height: 20,
    backgroundImage: `url(none)`,
  },
  viewTalkImg: {
    width: 80,
    height: 80,
    backgroundImage: `url(${readTalk})`,
    backgroundSize: `cover`,
  },
  draggerImage: {
    width: 80,
    height: 80,
    backgroundImage: `url(${dragImg})`,
    backgroundSize: `cover`,
  },
};

function Layout() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  const changeCursor = useSelector((state) => state.viewTalk.value);
  const mouseCursor = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const mouseMoveHandler = (e) => {
    const { clientX, clientY } = e;
    mouseCursor.x.set(clientX);
    mouseCursor.y.set(clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  });

  return (
    <>
      <ReactLenis root>
        <ScrollRestoration
          getKey={(location, matches) => {
            const paths = ['/mission', '/vission'];
            return paths.includes(location.pathname) ? location.pathname : location.key
          }}
        />
        <motion.div
          className="cursor"
          style={{ left: mouseCursor.x, top: mouseCursor.y }}
          variants={cursorVarient}
          animate={changeCursor}
        ></motion.div>
        <Navbar />
        <Outlet />
        {/* <ScrollToTop /> */}
        
        <Footer />
      </ReactLenis>
    </>
  );
}

export default Layout;
