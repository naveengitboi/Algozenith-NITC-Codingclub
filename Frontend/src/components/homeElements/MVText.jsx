import React from "react";
import "../homeElementCss/MVision.css";

function MVText({ data }) {
  return (
    <div className="mvtextContainer">
      <p className="paraSmall">{data.mainContent}</p>

      <ul className="mvtPoints">
        {data.points.map((point, idx) => {
          return (
            <li className="paraSmall" key={idx}>
              <span>{point.highlight}</span>: {point.pointBody}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MVText;
