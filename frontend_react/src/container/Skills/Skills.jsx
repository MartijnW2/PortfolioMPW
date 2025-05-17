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

const tools = [
  { name: "Git", image: images.git, alt: "Git logo" },
  { name: "Jira", image: images.jira, alt: "Jira logo" },
  { name: "Confluence", image: images.confluence, alt: "Confluence logo" },
  { name: "Figma", image: images.figma, alt: "Figma logo" },
  { name: "Jenkins", image: images.jenkins, alt: "Jenkins logo" },
  { name: "VS Code", image: images.vscode, alt: "Visual Studio Code logo" },
  { name: "Unity", image: images.unity, alt: "Unity game engine logo" },
];

const otherSkills = [
  { name: "React", image: images.react, alt: "React logo" },
  { name: "Redux", image: images.redux, alt: "Redux logo" },
  { name: "Scrum", image: images.scrum, alt: "Scrum methodology icon" },
  { name: "vitest", image: images.vitest, alt: "Unit testing icon" },
  { name: "Functional Testing", image: images.functionalTesting, alt: "Functional testing icon" },
  { name: "3D", image: images.threeD, alt: "3D modeling or development icon" },
  { name: "2D", image: images.twoD, alt: "2D graphics icon" },
  { name: "Sanity", image: images.sanity, alt: "Sanity CMS logo" },
  { name: "Oracle APEX", image: images.oracleApex, alt: "Oracle APEX logo" },
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

const SkillRow = ({ title, items }) => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <div className="flex flex-wrap gap-4">
      {items.map(({ name, image, alt }) => (
        <div key={name} className="flex items-center gap-2">
          <img src={image} alt={alt || name} />
        </div>
      ))}
    </div>
  </div>
);  
  
  return (
    <>
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
            <motion.div 
            style={{ marginTop: 20 }}
            transition={{ duration: 0.5, type: 'tween' }}
            >
              <div className="skill__text-title head-text">
                {selectedSkill.skill}
              </div>
              <div className="skill__acquired-text bold-text">
                {selectedSkill.acquiredAt}
              </div>
              <div className="skill__acquired-summary p-text">
                {selectedSkill.summary}
              </div>
            </motion.div>
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
      <div style={{ marginTop: 200 }}>
        <SkillRow title="Tools" items={tools} />
        <SkillRow title="Skills" items={otherSkills} />
      </div>
    </>
  );
};

export default AppWrap(Skills, 'skills');