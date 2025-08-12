import React from "react";
import finance from "../../assets/finance.svg";
import { scrollToSection } from "../../utils/scrollToSection";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 sm:px-8 lg:px-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Track, Understand and Take Control of Your{" "}
            <br className="hidden sm:block" /> M-pesa Spending
          </h1>
          <p className="mt-4 text-[#333] text-base sm:text-lg lg:text-lg max-w-lg mx-auto md:mx-0">
            Upload your M-pesa statements and instantly see a detailed breakdown
            of your expenses.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/upload-statement"
              className="px-12 py-3 bg-emerald-600 text-white text-md rounded-sm shadow-md hover:bg-emerald-700 transition"
            >
              Get Started
            </Link>
            <button
              className="px-12 py-3 text-emerald-600 text-md border border-emerald-600 rounded-sm shadow-md hover:bg-gray-200 transition"
              onClick={() => scrollToSection("how-it-works")}
            >
              See How It Works
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={finance}
            alt="Finance illustration"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
