import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



function NotFound() {
    const urlEntered = window.location.href
    const textScroll = `Error 404: Neural network overload detected. Matrix corruption suspected....Initiating diagnostic protocols..... `
  return (
    <div className="pageNotFoundContainer">
      <div className="pageNotFound">
        <div className="pnfHeader">
          <div className="button">
            <p className="buttonText paraSmall">console.log()</p>
          </div>
          <div className="button">
            <Link to="/" className="buttonText paraSmall">
              Go Home
            </Link>
          </div>
        </div>

        <div className="nfScroller">
          <div className="nsInnerScroller">
                {
                    [...textScroll.split(''), ...textScroll.split('')].map((l, idx) => {
                        return(
                            <span className="paraMedium" key={idx}>
                                {l} 
                            </span>
                        )
                    })
                }
          </div>
        </div>

        <div className="pnfImageDiv">
          <h1 className="largerSize desktopDiv">
            4
            <motion.img
              src="/images/notfound.png"
              alt="notfound"
              initial={{
                y: -20,
              }}
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            4
          </h1>

           <h1 className="largerSize mobileSize">
            404
          </h1>


          <p className="paraLarge bottomNFText">We Lost Together In Space</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
