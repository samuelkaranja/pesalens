import React from "react";

const Steps: React.FC = () => {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-10 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">
              Upload Your Statement
            </h3>
            <p className="text-gray-600">
              Easily upload your M-pesa statement in PDF format.
            </p>
          </div>
          <div className="bg-gray-100 p-10 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">We Analyze it</h3>
            <p className="text-gray-600">
              Our system automatically analyzes your statement.
            </p>
          </div>
          <div className="bg-gray-100 p-10 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Take Control</h3>
            <p className="text-gray-600">
              Make informed decisions to manage your finances better.
            </p>
          </div>
          <div className="bg-gray-100 p-10 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">We Analyze it</h3>
            <p className="text-gray-600">
              Our system automatically analyzes your statement.
            </p>
          </div>
          <div className="bg-gray-100 p-10 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Take Control</h3>
            <p className="text-gray-600">
              Make informed decisions to manage your finances better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
