import React from "react";

const Contact = () => {
  return (
    <>
      <div className="px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-32 max-w-[1600px] mx-auto mt-12 lg:mt-24">
        <h1 className="font-merriweather text-center uppercase text-3xl md:text-3xl lg:text-4xl xl:text-4xl mb-12">
          <strong>Contact</strong>
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start justify-between">
          {/* Navigation Links */}
          <div className="font-lato text-center lg:text-left w-full lg:w-auto">
            <ul className="flex flex-wrap justify-center flex-row lg:flex-col gap-3 sm:gap-6 lg:gap-3 items-center lg:items-start">
              <li>
                <a
                  href="index.html"
                  className="hover:text-teal-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-teal-400 transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-teal-400 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-teal-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  className="hover:text-teal-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start lg:ml-40">
            <ul className="flex flex-row flex-wrap gap-4 items-center">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=samyak11manandhar@gmail.com"
                >
                  <img
                    src="/icons/gmail.png"
                    alt="gmail-icon"
                    className="w-8 h-8"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/samyak.manandhar.10"
                >
                  <img
                    src="/icons/facebook.png"
                    alt="facebook-icon"
                    className="w-8 h-8"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/sayami_samyak"
                >
                  <img
                    src="/icons/instagram.png"
                    alt="instagram-icon"
                    className="w-8 h-8"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/samyak-manandhar/"
                >
                  <img
                    src="/icons/linkedin.png"
                    alt="linkedin-icon"
                    className="w-8 h-8"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/SamyakMdr"
                >
                  <img
                    src="/icons/github-mark.png"
                    alt="github-icon"
                    className="w-8 h-8"
                  />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.behance.net/samyakmanandhar2"
                >
                  <img
                    src="/icons/behance.png"
                    alt="behance-icon"
                    className="w-8 h-8"
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Name */}
          <div className="font-merriweather uppercase text-center lg:text-right text-4xl w-full lg:w-auto">
            <h1>
              samyak <br />
              manandhar
            </h1>
          </div>
        </div>
      </div>
      <div className="my-2 md:my-4 xl:my-4 mx-8 md:mx-12 xl:mx-16">
        <hr className="border-[#333]" />
      </div>
    </>
  );
};

export default Contact;