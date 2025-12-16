import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Function to handle anchor link clicks
  const handleAnchorClick = (hash) => {
    closeMenu();
    if (hash.startsWith("#")) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div>
        <nav className="sticky top-0 z-50 xl:mx-16">
          <div className="container mx-auto px-4 py-4 lg:py-8 md:py-6 flex justify-between items-center">
            {/* Desktop Navigation - LEFT side */}
            <div className="hidden md:flex space-x-8">
              <ul className="flex gap-6 lg:gap-8 list-none">
                <li>
                  <Link
                    className="text-lg font-lato text-gray-800 hover:text-teal-400 transition-colors duration-300"
                    to="/"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-lg font-lato text-gray-800 hover:text-teal-400 transition-colors duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAnchorClick("#about");
                    }}
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="text-lg font-lato text-gray-800 hover:text-teal-400 transition-colors duration-300 cursor-pointer"
                    onClick={closeMenu}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-lg font-lato text-gray-800 hover:text-teal-400 transition-colors duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAnchorClick("#skills");
                    }}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <Link
                    className="text-lg font-lato text-gray-800 hover:text-teal-400 transition-colors duration-300"
                    to="/contact"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile: Welcome on LEFT, Hamburger on RIGHT */}
            <div className="flex items-center justify-between w-full md:w-auto">
              {/* Welcome/Brand - LEFT side on mobile, RIGHT side on desktop */}
              <div className="md:hidden">
                <h2 className="text-xl font-bold text-gray-800">Welcome!</h2>
              </div>

              {/* Mobile Menu Button - RIGHT side */}
              <button
                onClick={toggleMenu}
                className="md:hidden text-2xl focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? "✕" : "☰"}
              </button>

              {/* Desktop Welcome - RIGHT side */}
              <div className="hidden md:block">
                <h2 className="font-merriweather text-xl md:text-2xl font-bold text-gray-800">
                  Welcome!
                </h2>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`
        md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out
        ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
      `}
          >
            {/* Overlay close area */}
            <div
              className="absolute inset-0 bg-black bg-opacity-10"
              onClick={closeMenu}
            ></div>

            {/* Menu panel - slides from RIGHT */}
            <div
              className={`
          absolute top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                  <button
                    onClick={closeMenu}
                    className="text-2xl focus:outline-none"
                  >
                    ✕
                  </button>
                </div>

                <ul className="space-y-6">
                  <li>
                    <Link
                      className="block text-lg font-lato text-gray-800 hover:text-teal-400 transition-colors duration-300 py-2"
                      to="/"
                      onClick={closeMenu}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="block text-lg font-lato text-gray-800 hover:text-teal-400 transition-colors duration-300 py-2 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAnchorClick("#about");
                      }}
                    >
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/portfolio" // This will navigate to the /portfolio route
                      className="block text-lg font-lato text-gray-800 hover:text-teal-400 transition-colors duration-300 py-2"
                      onClick={closeMenu} // Just close the mobile menu
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#skills"
                      className="block text-lg font-lato text-gray-800 hover:text-teal-400 transition-colors duration-300 py-2 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAnchorClick("#skills");
                      }}
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block text-lg font-lato text-gray-800 hover:text-teal-400 transition-colors duration-300 py-2"
                      to="/contact"
                      onClick={closeMenu}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <hr className="border-[#333]" />
      </div>
    </>
  );
};

export default Navbar;
