import React from "react";

const About = () => {
  return (
    <>
      <div className="px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32 max-w-[1600px] mx-auto mt-12 lg:mt-24">
        <h1 className="font-merriweather text-center uppercase text-3xl md:text-3xl lg:text-4xl xl:text-4xl mb-[6%]">
          <strong>About Me</strong>
        </h1>
        <h2 className="font-merriweather text-center text-xl md:text-3xl lg:text-4xl xl:text-4xl mb-[3%]">
          Welcome to Samyak Manandhar’s Corner
        </h2>
        <p className="text-gray-700 text-base text-left sm:text-lg lg:text-xl">
          Hi! I’m Samyak, a BSc CSIT student at Tribhuvan University, a frontend
          developer, and a part-time graphic designer. I’m passionate about
          creating interactive web experiences, blending functionality with
          aesthetics to craft user-friendly designs. Beyond coding, I enjoy
          music and believe in the power of collaboration. Let’s learn together,
          share ideas, and inspire each other to innovate and create! Explore my
          work, dive into my projects, or reach out to connect. I’d love to hear
          from you!
        </p>
      </div>
      <div className="my-8 md:my-16 xl:my-24 mx-8 md:mx-12 xl:mx-16">
        <hr className="border-[#333]" />
      </div>
    </>
  );
};

export default About;
