import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import readTalk from "./assets/hoverimg/readTalk.svg";
import { useSelector } from "react-redux";
import linkedIn from "./assets/hoverimg/linkedin.svg";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ScrollRestoration ,useLocation } from "react-router-dom";
const cursorVarient = {
  default: {
    width: 0,
    height: 0,
    backgroundImage: `url(none)`,
  },
  viewTalkImg: {
    width: 60,
    height: 60,
    backgroundImage: `url(${readTalk})`,
    backgroundSize: `cover`,
  },
  draggerImage: {
    width: 60,
    height: 60,
    backgroundImage: `url(${linkedIn})`,
    backgroundSize: `cover`,
  },
};
export const animatePresenceVarients = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y:0,
    transition: {
      ease: "easeInOut",
      duration:0.45
    },
  },
  exit: {
    opacity: 0,
    y:-50,
    transition: {
      ease: "easeInOut",
      duration:0.25
    },
  },
};
function Layout() {
  const location = useLocation()
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
            const paths = ["/mission", "/vission"];
            return paths.includes(location.pathname)
              ? location.pathname
              : location.key;
          }}
        />
        <motion.div
          className="cursor"
          style={{ left: mouseCursor.x, top: mouseCursor.y }}
          variants={cursorVarient}
          animate={changeCursor}
        ></motion.div>
        <Navbar />
        <AnimatePresence mode={"wait"}>
          <motion.div
            key={location.key}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>

        <Footer />
      </ReactLenis>
    </>
  );
}

export default Layout;
