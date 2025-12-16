import React from "react";
import { useState } from "react";
import Card_list from "./Card_list";
import Card_detail from "./Card_detail";
import ShineBorder from "../components/magicui/shine-border";
import "../index.css";
import projectsData from "../../public/project.json";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(
    projectsData.projects[0]
  );
  return (
    <>
      <div className="px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32 max-w-[1600px] mx-auto mt-12 lg:mt-24">
        <h1 className="font-merriweather text-center uppercase text-3xl md:text-3xl lg:text-4xl xl:text-4xl mb-[6%]">
          <strong>Portfolio</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT – auto height */}
          <div className="relative overflow-hidden rounded-xl w-full lg:flex-1">
            <ShineBorder shineColor="#5EEAD4" />
            <div className="p-4 sm:p-6 xl:p-8">
              <Card_detail project={selectedProject} />
            </div>
          </div>

          {/* RIGHT – scrollable */}
          <div className="relative overflow-hidden rounded-xl w-full lg:flex-1">
            <ShineBorder shineColor="#5EEAD4" />
            <div className="p-4 sm:p-6 xl:p-8 max-h-[600px] overflow-y-auto">
              <Card_list onSelect={setSelectedProject} />
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 md:my-16 xl:my-24 mx-8 md:mx-12 xl:mx-16">
        <hr className="border-[#333]" />
      </div>
    </>
  );
};

export default Portfolio;
