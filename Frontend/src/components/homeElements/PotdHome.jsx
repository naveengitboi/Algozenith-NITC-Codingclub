import React, { useState } from 'react'
import lc from "../Pics/lclight.png";
import gfg from "../Pics/gfglight.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfoCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function PotdHome() {
    const [showMessage, setShowMessage] = useState(false);
  return (
    <div>
    <div className="flex">
      <div className="bg-[#003F7E] w-32 h-10 flex justify-between px-4 py-2 rounded-t-xl">
        <h1 className="paraSmall font-semibold text-white">POTD</h1>
        <FontAwesomeIcon
          icon={faXmark}
          className="text-white cursor-pointer h-6 xmark"
        />
      </div>
      <FontAwesomeIcon
        icon={faInfoCircle}
        onMouseEnter={()=>setShowMessage(true)}
        onMouseLeave={()=>setShowMessage(false)}
        className="h-[23px] info-icon ml-1 mt-2 text-blue-700"
      />
      {showMessage && (
        <div className="info-message w-52 mt-[-70px]">
          Problem of the day of leetcode and gfg.
        </div>
      )}
    </div>
    <div className="bg-[#003F7E] w-[270px] h-32 rounded-b-xl rounded-tr-xl">
      <NavLink to="/potd" className="flex justify-between">
        <img src={lc} className="w-28 h-28 mt-2" />
        <img src={gfg} className="h-24 w-36 mt-5" />
      </NavLink>
    </div>
  </div>
  )
}

export default PotdHome
