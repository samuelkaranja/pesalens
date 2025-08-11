import React from "react";
import { FiZap, FiSliders, FiShield, FiEye } from "react-icons/fi";

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: "Fast & Accurate Analysis",
      description: "Get your breakdown in seconds",
      icon: <FiZap className="w-10 h-10 text-emerald-600" />,
    },
    {
      title: "Tailored for M-Pesa",
      description: "Built specifically for Kenyan mobile payments",
      icon: <FiSliders className="w-10 h-10 text-emerald-600" />,
    },
    {
      title: "Bank-Level Security",
      description: "Your data is encrypted end-to-end",
      icon: <FiShield className="w-10 h-10 text-emerald-600" />,
    },
    {
      title: "Clear, Actionable Insights",
      description: "Understand your spending at a glance",
      icon: <FiEye className="w-10 h-10 text-emerald-600" />,
    },
  ];

  return (
    <section id="why-choose-us" className="bg-white py-8 md:py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 text-center mb-5">
          Why Choose Us?
        </h2>
        <p className="text-sm sm:text-xl lg:text-lg text-gray-700 text-center mb-12">
          Discover the benefits that make our M-Pesa statement analysis <br />{" "}
          the smartest way to track and manage your spending.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map(({ title, description, icon }, idx) => (
            <div
              key={idx}
              className="bg-white flex-shrink-0 w-full sm:w-72 rounded-lg shadow-md py-12 px-8"
            >
              <div className="mb-5 flex ">{icon}</div>
              <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
              <p className="text-sm text-[#333]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
