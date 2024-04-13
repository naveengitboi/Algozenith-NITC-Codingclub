import React, { useEffect } from "react";
import NumberAnimator from "../customHooks/NumberAnimator";



function Counter(props) {
  useEffect(() => {
    
  }, [])
  
  return (
    <div className="counter">
      <h1 className="smallLSize " >
        <NumberAnimator end={props.data.count} duration={props.duration} />+</h1>
      <p className="paraMedium">{props.data.description}</p>
    </div>
  );
}

export default Counter;
