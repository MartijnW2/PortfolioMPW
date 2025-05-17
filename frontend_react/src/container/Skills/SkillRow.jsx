import React from 'react'

export const SkillRow = () => {
const SkillRow = ({ title, items }) => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <div className="flex flex-wrap gap-4">
      {items.map(({ name, image }) => (
        <div key={name} className="flex items-center gap-2">
          <img src={image} alt={name} className="w-6 h-6" />
          <span>{name}</span>
        </div>
      ))}
    </div>
  </div>
);
}
export default SkillRow;
