import React from "react";

function Counter(props) {
  return (
    <div className="counter">
      <h1 className="smallLSize">{props.data.count}+</h1>
      <p className="paraMedium">{props.data.description}</p>
    </div>
  );
}

export default Counter;
