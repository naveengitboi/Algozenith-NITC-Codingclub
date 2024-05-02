import React from "react";
import "../components/About/index.css";
import { FaRankingStar } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
function JoinUs() {
  return (
    <div className="joinUsPage">
      <div className="aboutHeader">
        <h1 className="paraLarge">Want to Join Us?</h1>
        <div className="gradOneSidePurpleLine"></div>
      </div>
      <div className="action">
        <div className="application">
          <FaRankingStar />
          <p className="paraSmall">application -AZ </p>
          <IoMdClose />
        </div>
        <div className="contributeText">
          <h1 className="paraLarge contribute">Contribute To Your Peers Growth!</h1>
          <div className="actionsDiv">
            <p className="paraSmall mail-id">
              Send your Resume to Club Mail Id and be Part of us!
            </p>
            <a href="mailto:algozenith@nitc.ac.in" target="_blank">
            <button className="ml-auto">
              Get in Touch <MdOutgoingMail />
            </button> 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
