import React from "react";

const Card = ({ project, onClick, isSelected = false }) => {
  const {
    image = "../../public/portfolio/default.PNG",
    title = "Default Project Title",
  } = project || {};

  return (
    <div
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-md cursor-pointer
        transition-all duration-500
        ${isSelected ? "ring-2 ring-teal-400" : "group"}
      `}
    >
      <img
        src={image}
        alt={`${title} Project Image`}
        className={`
          w-full h-auto object-cover transition-all duration-500
          ${
            isSelected
              ? "brightness-90 scale-[1.02]"
              : "group-hover:brightness-90 group-hover:scale-[1.02]"
          }
        `}
      />

      <div
        className={`
          absolute inset-0 bg-gradient-to-t
          from-black/70 via-black/40 to-transparent
          transition-opacity duration-500
          ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}
      >
        <div className="absolute bottom-4 left-4 transition-transform duration-500">
          <span
            className={`
              text-white text-xs sm:text-xs md:text-xl lg:text-sm xl:text-lg font-semibold
              transition-all duration-500
              ${isSelected ? "text-teal-400" : "group-hover:text-teal-400"}
            `}
          >
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
