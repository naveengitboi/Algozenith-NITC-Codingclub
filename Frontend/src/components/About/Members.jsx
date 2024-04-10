import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

function Members({ batch, batchYear }) {
  return (
    <div className="guides">
      <div className="aboutHeader">
        <h1 className="paraLarge">Our {batchYear}</h1>
        <div className="gradOneSidePurpleLine"></div>
      </div>

      <div className="imagesOuter">
        <div className="imagesInner">
          {batch.map((mem, idx) => {
            return (
              <div className="memContainer">
                <div className="personProf">
                  <p className="tinySize batchDet">
                    {idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`} <span></span>{" "}
                    {mem.name}{" "}
                  </p>
                </div>

                <div className="imageContainer">
                  <a href={mem.linkedIn} target="_blank">
                    {mem.linkedIn === "" ? (
                      ""
                    ) : (
                      <FaLinkedinIn className="absolute mt-1 bg-blue-600 text-white h-7 w-7 p-1 ml-[118px] rounded-sm rounded-bl-xl" />
                    )}
                    <img
                      src={mem.image}
                      alt={mem.name}
                      className={`border-gradient ${
                        batchYear == "B20"
                          ? "border-gradient-b20"
                          : mem.role.substring(9) == "Lead"
                          ? "border-gradient-lead"
                          : ""
                      } 
                    ${
                      mem.role == "DSA & CP member"
                        ? "border-gradient-dsacp"
                        : mem.name == "Naveen J"
                        ? "border-gradient-lead"
                        : ""
                    }
                    ${
                      mem.role.substring(0, 6) == "Social"
                        ? "border-gradient-social"
                        : mem.name == "Haaris Shaik"
                        ? "border-gradient-social"
                        : ""
                    }
                    `}
                    />
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
