import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  const [greeting, setGreeting] = useState("Good Morning!");

  useEffect(() => {
    // Update greeting based on time
    const updateGreeting = () => {
      const hours = new Date().getHours();
      let newGreeting;

      if (hours < 12) {
        newGreeting = "Good Morning!";
      } else if (hours < 18) {
        newGreeting = "Good Afternoon!";
      } else {
        newGreeting = "Good Evening!";
      }

      setGreeting(newGreeting);
    };

    // Call immediately on mount
    updateGreeting();

    // Update greeting every minute
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative overflow-hidden justify-between">
        <div className="my-18 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32 max-w-[1600px] mx-auto mt-12 lg:mt-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-merriweather font-bold">
            {greeting}
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-merriweather mt-2">
            I'm <strong className="">Samyak Manandhar</strong>
          </h1>

          <br className="my-4" />

          <span className="text-lg md:text-xl lg:text-2xl font-lato text-gray-700">
            Creative, driven, and passionate about web development, technology,
            and community.
            <br />
            Welcome to my space.
          </span>

          <br className="my-4" />

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link to="/contact">
              <button
                className="w-full sm:w-60 h-12 px-4 bg-teal-400 text-white 
                         rounded-lg text-lg font-lato font-semibold uppercase
                         hover:bg-grey-700 hover:text-white 
                         transition-all duration-300 ease-in-out
                         transform hover:-translate-y-1 hover:shadow-lg"
              >
                Let's Talk
              </button>
            </Link>
            <a
              href="public/SamyakManandhar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                className="w-full sm:w-60 h-12 px-4 bg-gray-800 text-white 
                         rounded-lg text-lg font-lato font-semibold uppercase
                         hover:bg-teal-400 hover:text-white 
                         transition-all duration-300 ease-in-out
                         transform hover:-translate-y-1 hover:shadow-lg"
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="my-12 md:my-16 lg:my-16 xl:my-24 mx-8 md:mx-12 lg:mx-12 xl:mx-16">
        <hr className="border-[#333]" />
      </div>
    </>
  );
};

export default Intro;
