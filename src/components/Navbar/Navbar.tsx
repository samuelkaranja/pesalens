import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full z-50 shadow-md">
      <div className="container mx-auto px-3 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-emerald-700 font-stretch-wide">
          Pesalens
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#home" className="hover:text-emerald-700">
              Home
            </a>
          </li>
          <li>
            <a href="#how" className="hover:text-emerald-700">
              How It Works
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-emerald-700">
              Features
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-emerald-700">
              Contact
            </a>
          </li>
          {/* <li>
            <a
              href="#signup"
              className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 inline-flex items-center"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="#signup"
              className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 inline-flex items-center"
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
            {/* <li>
              <a
                href="#signup"
                className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
              >
                Sign Up
              </a>
            </li> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
