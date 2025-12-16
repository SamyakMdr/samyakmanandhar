import React from "react";
import Radar from "./Radar";
import Tech from "./Tech";
export const Skills = () => {
  return (
    <>
      <div className="my-18 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32 max-w-[1600px] mx-auto mt-12 lg:mt-24">
        <div>
          <h1 className="font-merriweather text-center uppercase text-3xl md:text-3xl lg:text-4xl xl:text-4xl mb-[6%]">
            <strong>skills</strong>
          </h1>

          <div className="flex flex-col lg:flex-row mx-auto justify-between gap-4 place-content-center">
            <div className="flex justify-center w-full overflow-x-auto">
              <Tech />
            </div>
            <div className="flex justify-center w-full overflow-x-auto">
              <Radar />
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 md:my-16 lg:my-16 xl:my-24 mx-8 md:mx-12 lg:mx-12 xl:mx-16">
        <hr className="border-[#333]" />
      </div>
    </>
  );
};
