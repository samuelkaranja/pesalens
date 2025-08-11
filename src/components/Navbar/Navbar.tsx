import React, { useEffect, useState } from "react";
import { scrollToSection } from "../../utils/scrollToSection";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white w-full z-50 sticky top-0 left-0 transition-shadow duration-300 ${
        hasShadow ? "shadow" : ""
      }`}
    >
      <div className="mx-auto px-4 md:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold text-emerald-700 italic">
          Pesalens
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-small">
          <li>
            <a href="#home" className="hover:text-emerald-700 hover:underline">
              Home
            </a>
          </li>
          <li onClick={() => scrollToSection("how-it-works")}>
            <a
              href="#how-it-works"
              className="hover:text-emerald-700 hover:underline"
            >
              How It Works
            </a>
          </li>
          <li onClick={() => scrollToSection("why-choose-us")}>
            <a
              href="#why-choose-us"
              className="hover:text-emerald-700 hover:underline"
            >
              Why Choose Us
            </a>
          </li>
          <li onClick={() => scrollToSection("testimonials")}>
            <a
              href="#testimonials"
              className="hover:text-emerald-700 hover:underline"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-emerald-700 hover:underline"
            >
              Contact
            </a>
          </li>
          {/* <li>
            <a
              href="#login"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4 py-2 rounded inline-flex items-center"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="#signup"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4 py-2 rounded inline-flex items-center"
            >
              Sign Up
            </a>
          </li> */}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-5 px-4 py-5 text-gray-700 font-medium text-center">
            <li>
              <a href="#home" className="block text-lg">
                Home
              </a>
            </li>
            <li>
              <a href="#how" className="block text-lg">
                How It Works
              </a>
            </li>
            <li>
              <a href="#features" className="block text-lg">
                Features
              </a>
            </li>
            <li>
              <a href="#contact" className="block text-lg">
                Contact
              </a>
            </li>
            <li>
              <a
                href="#login"
                className="block bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2 rounded"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#signup"
                className="block bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2 rounded"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
