import React, { useState } from 'react';
import './Skills.scss';
import { AppWrap } from '../../wrapper';
import { SiTypescript, SiJavascript, SiOracle } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { BsFiletypeScss } from "react-icons/bs";
import { motion, useAnimationFrame } from 'framer-motion';

const icons = [
  <BsFiletypeScss key="scss" />,
  <SiTypescript key="ts" />,
  <SiJavascript key="js" />,
  <TbBrandCSharp key="csharp" />,
  <SiOracle key="oracle" />
];

const Skills = () => {
  const iconCount = icons.length;
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useAnimationFrame((t) => {
    if (!isHovered) {
      setRotation((t / 10000) * 360); // Only animate when not hovered
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
            translate(0, -240px)
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