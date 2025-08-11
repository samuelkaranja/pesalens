import React from "react";

const Footer: React.FC = () => {
  return (
    <section className="bg-emerald-600 px-20 py-5 text-white mt-5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="text-2xl font-bold italic">pesalens</div>

        {/* Links */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-left">
          <li>
            <a href="#home" className="hover:text-emerald-300">
              About
            </a>
          </li>
          <li>
            <a href="#how" className="hover:text-emerald-300">
              Privacy
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-emerald-300">
              Terms
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-left mt-4 text-md">
          &copy; {new Date().getFullYear()} pesalens. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
