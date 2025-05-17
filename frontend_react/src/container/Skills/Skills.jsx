import React, { useState } from 'react';
import './Skills.scss';
import { AppWrap } from '../../wrapper';
import { motion, useAnimationFrame } from 'framer-motion';
import { images } from '../../constants';

const icons = [
   <img src={images.css} alt="CSS" />,
   <img src = {images.typescript}></img>,
   <img src = {images.javascript}></img>,
   <img src={images.csharp} alt="C#" />,
   <img src = {images.sql2}></img>,
];

const Skills = () => {
  const iconCount = icons.length;
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((t) => {
    if (!isHovered) {
      setRotation((t / 10000) * 360);
    }
  });

return (
    <motion.div
      className="circle-container"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {icons.map((icon, i) => {
        const angle = (360 / iconCount) * i;
        const iconStyle = {
          transform: `
            translate(-50%, -50%)
            rotate(${angle}deg)
            translate(0, -280px)
            rotate(${-angle - rotation}deg)
          `
        };

        return (
          <div
            className={`circle-icon icon-${i}`}
            key={i}
            style={iconStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {icon}
          </div>
        );
      })}
    </motion.div>
  );
};

export default AppWrap(Skills, 'skills');