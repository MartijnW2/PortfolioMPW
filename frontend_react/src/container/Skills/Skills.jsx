import React, { useState, useEffect } from 'react';
import './Skills.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import { motion, useAnimationFrame } from 'framer-motion';
import { images } from '../../constants';
import { urlFor, client } from '../../client';
import SkillRow from './SkillRow';

const iconData = [
  { icon: <img src={images.css} alt="css" />, alt: "css" },
  { icon: <img src={images.typescript} alt="typescript" />, alt: "typescript" },
  { icon: <img src={images.javascript} alt="javascript" />, alt: "javascript" },
  { icon: <img src={images.csharp} alt="csharp" />, alt: "csharp" },
  { icon: <img src={images.sql2} alt="sql" />, alt: "sql" },
];

const tools = [
  { name: "Git", image: images.git, alt: "Git" },
  { name: "Jira", image: images.jira, alt: "Jira" },
  { name: "Confluence", image: images.confluence, alt: "Confluence" },
  { name: "Figma", image: images.figma, alt: "Figma" },
  { name: "Jenkins", image: images.jenkins, alt: "Jenkins" },
  { name: "VS Code", image: images.vscode, alt: "Visual Studio" },
  { name: "Unity", image: images.unity, alt: "Unity" },
  { name: "Oracle APEX", image: images.oracle, alt: "Oracle APEX" },
];

const otherSkills = [
  { name: "React", image: images.react, alt: "React" },
  { name: "Redux", image: images.redux, alt: "Redux" },
  { name: "Scrum", image: images.scrum, alt: "Scrum" },
  { name: "vitest", image: images.vitest, alt: "ViTest" },
  { name: "jest", image: images.jest, alt: "Jest testing" },
  { name: "Sanity", image: images.sanity, alt: "Sanity" },
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
                onMouseEnter={() => {
                  setIsHovered(true);
                  setHoveredIndex(i);
                  setSelectedIcon(item.alt);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setHoveredIndex(null);
                  setSelectedIcon("");
                }}
                onTouchStart={() => {
                  setIsHovered(true);
                  setHoveredIndex(i);
                  setSelectedIcon(item.alt);
                }}
            >
              {item.icon}
            </div>
          );
        })}
      </motion.div>
        <div className="skills__rows-wrapper" style={{ marginTop: 300 }}>
          <SkillRow title="Tools" items={tools} />
          <SkillRow title="Skills" items={otherSkills} />
        </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, 'app_skills'), 'skills', 'app__primarybg', "My philosophy is that years of experience don't make good developers, rather the ability to quickly learn and get familiar with new technologies");