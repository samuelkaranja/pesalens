import React from "react";
import { FaFileUpload, FaSearchDollar, FaFilePdf } from "react-icons/fa";
import background from "../../assets/background.png";

const Steps: React.FC = () => {
  const steps = [
    {
      icon: <FaFileUpload className="text-emerald-600 text-4xl" />,
      title: "Upload Your Statement",
      description:
        "Securely upload your M-Pesa statement in PDF or CSV format. Your data stays private and is processed safely.",
    },
    {
      icon: <FaSearchDollar className="text-emerald-600 text-4xl" />,
      title: "Automatic Analysis",
      description:
        "Our tool categorizes your transactions, detects recurring payments, and highlights your top spending areas.",
    },
    {
      icon: <FaFilePdf className="text-emerald-600 text-4xl" />,
      title: "Download PDF Breakdown",
      description:
        "Get a detailed, beautifully designed PDF with charts, trends, spending tips, and a financial health score.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-gray-50 py-25"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Understand your spending habits, track your cash flow, and take
          control of your finances—without manually crunching numbers.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon + Badge Container */}
              <div className="relative flex justify-center mb-4">
                {/* <span className="absolute -top-3 -right-3 bg-emerald-600 text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-lg animate-bounce">
                  {index + 1}
                </span> */}
                {step.icon}
              </div>

              {/* Step Title */}
              <h3 className="text-lg font-semibold text-[#333]">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
