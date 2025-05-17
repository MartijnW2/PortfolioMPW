import React, { useState, useEffect } from 'react';
import './Skills.scss';
import { AppWrap } from '../../wrapper';
import { motion, useAnimationFrame } from 'framer-motion';
import { images } from '../../constants';
import { urlFor, client } from '../../client';

// Use an array of objects to link icons to their alt text
const iconData = [
  { icon: <img src={images.css} alt="css" />, alt: "css" },
  { icon: <img src={images.typescript} alt="typescript" />, alt: "typescript" },
  { icon: <img src={images.javascript} alt="javascript" />, alt: "javascript" },
  { icon: <img src={images.csharp} alt="csharp" />, alt: "csharp" },
  { icon: <img src={images.sql2} alt="sql" />, alt: "sql" },
];

const Skills = () => {
  const iconCount = iconData.length;
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [skills, setSkills] = useState([]); 
  const [selectedIcon, setSelectedIcon] = useState("");

  useAnimationFrame((t) => {
    if (!isHovered) {
      setRotation((t / 10000) * 360);
    }
  });

  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query)
      .then((data) => setSkills(data));
  }, [isHovered]);

  const selectedSkill = skills.find(skill => skill.alt === selectedIcon);

  return (
    <motion.div
      className="circle-container"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {isHovered && selectedSkill && (
        <div
          className="circle-center-content"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
            zIndex: 2,
          }}
        >
          <div style={{ marginTop: 20 }}>
            <div className="skill__text-title head-text">
              {selectedSkill.skill}
            </div>
            <div className="skill__acquired-text bold-text">
              {selectedSkill.acquiredAt}
            </div>
            <div className="skill__acquired-summary p-text">
              {selectedSkill.summary}
            </div>
          </div>
        </div>
      )}
      {iconData.map((item, i) => {
        const angle = (360 / iconCount) * i;
        const iconStyle = {
          transform: `
            translate(-50%, -50%)
            rotate(${angle}deg)
            translate(0, -280px)
            rotate(${-angle - rotation}deg)
          `
        };
        const isDimmed = hoveredIndex !== null && hoveredIndex !== i;

        return (
          <div
            className={`circle-icon icon-${i}`}
            key={i}
            style={{
              ...iconStyle,
              opacity: isDimmed ? 0.2 : 1,
              transition: 'opacity 0.3s'
            }}
            onMouseEnter={() => { setIsHovered(true); setHoveredIndex(i); setSelectedIcon(item.alt); }}
            onMouseLeave={() => { setIsHovered(false); setHoveredIndex(null); setSelectedIcon(""); }}
          >
            {item.icon}
          </div>
        );
      })}
    </motion.div>
  );
};

export default AppWrap(Skills, 'skills');