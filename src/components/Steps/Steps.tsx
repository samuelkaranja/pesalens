import React from "react";

const Steps: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <h2 className="flex items-center justify-center w-12 h-12 border-2 border-emerald-700 rounded-full text-lg text-emerald-600 font-bold">
                1
              </h2>
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Upload Your Statement
            </h3>
            <p className="text-black-600">
              Easily upload your M-pesa statement in PDF format.
            </p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <h2 className="flex items-center justify-center w-12 h-12 border-2 border-emerald-700 rounded-full text-lg text-emerald-600 font-bold">
                2
              </h2>
            </div>
            <h3 className="text-xl font-semibold mb-4">We Analyze it</h3>
            <p className="text-black-600">
              Our system automatically analyzes your statement.
            </p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <h2 className="flex items-center justify-center w-12 h-12 border-2 border-emerald-700 rounded-full text-lg text-emerald-600 font-bold">
                3
              </h2>
            </div>
            <h3 className="text-xl font-semibold mb-4">Take Control</h3>
            <p className="text-black-600">
              Make informed decisions to manage your finances better.
            </p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <h2 className="flex items-center justify-center w-12 h-12 border-2 border-emerald-700 rounded-full text-lg text-emerald-600 font-bold">
                4
              </h2>
            </div>
            <h3 className="text-xl font-semibold mb-4">We Analyze it</h3>
            <p className="text-black-600">
              Our system automatically analyzes your statement.
            </p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <h2 className="flex items-center justify-center w-12 h-12 border-2 border-emerald-700 rounded-full text-lg text-emerald-600 font-bold">
                5
              </h2>
            </div>
            <h3 className="text-xl font-semibold mb-4">Take Control</h3>
            <p className="text-black-600">
              Make informed decisions to manage your finances better.
            </p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <h2 className="flex items-center justify-center w-12 h-12 border-2 border-emerald-700 rounded-full text-lg text-emerald-600 font-bold">
                6
              </h2>
            </div>
            <h3 className="text-xl font-semibold mb-4">Take Control</h3>
            <p className="text-black-600">
              Make informed decisions to manage your finances better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
