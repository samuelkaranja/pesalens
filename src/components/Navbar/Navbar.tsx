import React, { useState } from "react";
import { scrollToSection } from "../../utils/scrollToSection";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import Logo from "../../assets/Logo Images/new.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/", type: "link" },
    {
      label: "How It Works",
      href: "#how-it-works",
      type: "scroll",
      section: "how-it-works",
    },
    {
      label: "Why Choose Us",
      href: "#why-choose-us",
      type: "scroll",
      section: "why-choose-us",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="w-full z-50 sticky top-0 left-0 transition-shadow duration-300 mt-3 bg-[#f6f8f6]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between border border-gray-200 shadow rounded-lg relative bg-white">
          {/* Logo (Left) */}
          <Link to="/" className="w-32">
            <img src={Logo} className="object-contain" />
          </Link>

          {/* Center Navigation (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex items-center space-x-6 bg-[#f5f6f8] px-8 py-3 rounded-lg shadow-sm">
              {/* Dashboard */}
              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-emerald-700 text-sm"
                >
                  Dashboard
                </Link>
              </li>

              {/* Other links */}
              {navLinks.map((link) =>
                link.type === "link" ? (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="hover:text-emerald-700 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ) : (
                  <li
                    key={link.label}
                    onClick={() => scrollToSection(link.section!)}
                  >
                    <a
                      href={link.href}
                      className="hover:text-emerald-700 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Login (Right for Desktop) */}
          <div className="hidden md:flex items-center bg-[#2bee2b] py-2 px-4 rounded-full">
            <Link
              to="/login"
              className="flex items-center space-x-1 hover:text-emerald-700 text-sm"
            >
              <FiLogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
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
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-10 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50
          w-1/2 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <svg
              className="w-6 h-6 text-gray-700"
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
          </button>
        </div>

        {/* Mobile Menu Links */}
        <ul className="space-y-5 px-4 py-4 text-gray-700 font-medium text-center">
          <li>
            <Link to="/dashboard" className="hover:text-emerald-700 text-lg">
              Dashboard
            </Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.label} onClick={() => setIsOpen(false)}>
              {link.type === "link" ? (
                <Link to={link.href} className="block text-lg">
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  onClick={() => scrollToSection(link.section!)}
                  className="block text-lg"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
          <li onClick={() => setIsOpen(false)}>
            <Link
              to="/login"
              className="flex items-center justify-center space-x-1 hover:text-emerald-700 text-sm"
            >
              <FiLogIn className="w-5 h-5" />
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
