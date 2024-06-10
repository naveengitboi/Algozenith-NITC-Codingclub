import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

function Members({ batch, batchYear }) {
  return (
    <div className="guides">
      <div className="aboutHeader">
        <h1 className="paraLarge">Our {batchYear}</h1>
        <div className="gradOneSidePurpleLine"></div>
      </div>

      <div className="">
        <div className="flex flex-wrap md:justify-center items-center">
          {batch.map((mem, idx) => {
            return (
              <div className="memContainer" key={idx}>
                <div className="personProf flex justify-start ml-2 md:ml-0">
                  <p className="tinySize">
                    <span className="mr-1">{idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`}</span>{" "}
                    {mem.name}{" "}
                  </p>
                </div>

                <div className="imageContainer md:mr-0 mr-[12px]">
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
                <div className="personProf flex justify-center md:mb-0 mb-8">
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
