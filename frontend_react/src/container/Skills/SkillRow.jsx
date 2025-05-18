import React, { useState } from 'react';

const SkillRow = ({ title, items }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="mb-6">
      <h2 className="skills__row-title">My Relevant {title}</h2>
      <div className="skills__row-singleline">
        {items.map(({ name, image, alt }, i) => (
          <div
            key={name}
            className="flex flex-col items-center"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ position: "relative" }}
          >
            {hovered === i && (
              <div
                style={{
                  position: "absolute",
                  bottom: "110%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "#888",
                  background: "rgba(255,255,255,0.95)",
                  boxShadow: "0 8px 32px rgba(255, 255, 255, 1)",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                  zIndex: 2,
                }}
              >
                {alt || name}
              </div>
            )}
            <img
              src={image}
              alt={alt || name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillRow;