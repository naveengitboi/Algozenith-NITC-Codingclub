import React from "react";
import { useDispatch } from "react-redux";
import { removeCursorChange, withCursor } from "../../Redux/ImageHoverSlicer";
import LazyLoad from "react-lazy-load";
function Members({ batch, batchYear }) {
  const dispatch = useDispatch();

  return (
    <div className="guides">
      <div className="aboutHeader">
        <h1 className="paraLarge">{batchYear}</h1>
        <div className="gradOneSidePurpleLine"></div>
      </div>

      <div className="imagesOuter">
        <div className="imagesInner">
          {batch.map((mem, idx) => {
            return (
              <div className="memContainer">
                <div className="personProf">
                  <p className="tinySize batchDet">
                    {idx + 1 < 10 ? `0${idx + 1}` : `${idx}`} <span></span>{" "}
                    {mem.name}{" "}
                  </p>
                </div>
                
                  <div className="imageContainer">
                  <a
                  onMouseEnter={() => {
                    dispatch(withCursor("drag"));
                  }}
                  onMouseLeave={() => {
                    dispatch(removeCursorChange());
                  }}
                 
                  href={mem.linkedIn}
                  onClick={() => dispatch(removeCursorChange())}
                  target="_blank"
                >
                  <div className="imageContainer">
                    <LazyLoad>
                      <img height={762} offset={300} src={mem.image} alt={mem.name} />
                    </LazyLoad>
                  </div>
                </a>
                </div>
              
                <div className="personProf">
                  <h1 className="tinySize roleDet">{mem.role}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Members;
