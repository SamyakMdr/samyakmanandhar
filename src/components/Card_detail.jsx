import React, { useState } from "react";

const Card_detail = ({ project }) => {
  const [open, setOpen] = useState(false);

  if (!project) return null;

  return (
    <div>
      <div className="">
        <img src={project.image} alt={project.title} className="rounded-lg" />

        <div className="flex flex-row justify-between">
          <span className="text-lg sm:text-2xl lg:text-xl my-2 mt-4 lg:my-2 lg:mt-4 block">
            <strong>{project.title}</strong>
          </span>
          <span className="bg-gray-400 font-semibold text-white rounded-full p-1 px-2 sm:p-1 sm:px-3 text-xs sm:text-sm lg:text-sm my-2 mt-4 lg:my-2 lg:mt-4">
            {project.category}
          </span>
        </div>

        <div className="relative  my-0 lg:my-4">
          <p
            className={`text-gray-700 text-sm sm:text-lg lg:text-base transition-all duration-300 ${
              open ? "" : "line-clamp-3"
            }`}
          >
            {project.fullDescription}
          </p>

          {!open && (
            <div className="pointer-events-none absolute bottom-0 right-0 h-6 w-full bg-gradient-to-l from-white to-transparent"></div>
          )}

          <span
            onClick={() => setOpen(!open)}
            className="text-sm sm:text-lg lg:text-base absolute bottom-0 right-0 text-gray-500 font-semibold cursor-pointer bg-white px-1"
          >
            {open ? "View less.." : "View more.."}
          </span>
        </div>

        <ul className="flex gap-2 my-4 lg:my-4">
          {project.technologies.map((tech, i) => (
            <li
              key={i}
              className="object-fit w-6 h-6 sm:w-8 sm:h-8 lg:w-8 lg:h-8"
            >
              <img src={tech.icon} alt={tech.name} className="w-100% h-100%" />
            </li>
          ))}
        </ul>

        <button
          onClick={() => window.open(project?.liveUrl, "_blank")}
          className="bg-teal-400 rounded-md sm: w-full py-1 sm:py-2 text-white font-medium hover:bg-teal-500 transition-colors duration-300"
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default Card_detail;
