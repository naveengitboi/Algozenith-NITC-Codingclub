import React, { useState } from "react";


const data = [
      {
        platform:"Leetcode",
        link:"https://leetcode.com/"
    },
     {
        platform:"GFG",
        link:"https://leetcode.com/"
    }
]

function UpcomingContest() {

  const [showModel, setShowModel] = useState(false);
  const [ucContest, setUcContest] = useState(data)
  return (
    <div className="upcomingContainer">
      <div className="ucInnerContainer">
        <div className="ucInfoShower paraSmall" onClick={() => setShowModel(prev => !prev)}>
          {
            !showModel && <p className="ucInfoShowerHoverModel tinySize">Upcoming/Live</p>
          }
          <span className="dotPulse"></span>
        </div>

        
          <div className={`ucModel ${showModel ? "ucModelOpen" :""}`}>
            {
                ucContest.length == 0 ?(
                    <p className="paraSmall">No Live Contest</p>
                ): ucContest.map((item,i)=>{
                    return(
                        <div className="ucModelIitem" key={i}>
                            <a href={item.link} target="_blank" className="ucLinkTag paraSmall">
                                {item.platform}
                            </a>
                        </div>
                    )
                })
            }
          </div>
     
      </div>
    </div>
  );
}

export default UpcomingContest;
