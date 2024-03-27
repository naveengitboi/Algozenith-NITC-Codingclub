import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const IconWithSpring = ({ icon }) => {
  const [hovered, setHovered] = useState(false);

  const springProps = useSpring({
    transform: hovered ? 'scale(1.2)' : 'scale(1)', // Adjust the scale factor for the spring animation
  });

  return (
    <animated.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={springProps}
    >
      {icon}
    </animated.div>
  );
};

export default IconWithSpring;
