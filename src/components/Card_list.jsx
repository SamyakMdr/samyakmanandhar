import React, { useState } from "react";
import Card from "./Card";
import projectsData from "../../public/project.json";

const Card_list = ({ onSelect }) => {
  // Initialize with the first project selected
  const [selectedId, setSelectedId] = useState(
    projectsData.projects[0]?.id || null
  );

  // Notify parent of the pre-selected project
  React.useEffect(() => {
    if (projectsData.projects[0]) {
      onSelect(projectsData.projects[0]);
    }
  }, [onSelect]);

  const handleSelect = (project) => {
    setSelectedId(project.id); // Track selected project
    onSelect(project); // Pass to parent
  };

  // Split projects into rows of 2
  const rows = [];
  for (let i = 0; i < projectsData.projects.length; i += 2) {
    rows.push(projectsData.projects.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col gap-2 max-h-[600px]">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-row mx-auto justify-between gap-2 place-content-center"
        >
          {row.map((project) => (
            <div
              key={project.id}
              className="flex justify-center w-full overflow-x-auto"
            >
              <Card
                project={project}
                isSelected={selectedId === project.id}
                onClick={() => handleSelect(project)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Card_list;
