import React, { useState } from "react";
import {
  FiUploadCloud,
  FiLock,
  FiArrowRight,
  FiArrowLeft,
} from "react-icons/fi";
import { toast } from "react-toastify";

const MpesaStatementUpload: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [file, setFile] = useState<File | null>(null);
  const [code, setCode] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleNext = () => {
    if (!file) {
      toast.error("Please upload your M-Pesa statement file first.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setStep(2);
  };

  const handleBack = () => setStep(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) {
      toast.error("Please enter the statement code.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    console.log("File:", file);
    console.log("Code:", code);
    // TODO: Handle file upload & code verification logic here
  };

  return (
    <div className="min-h-[80vh] md:min-h-[85vh] lg:min-h-[85vh] bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl h-full">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm font-medium text-gray-600 mb-1">
            <span>Step {step} of 2</span>
            <span>{step === 1 ? "Upload Statement" : "Enter Code"}</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                step === 1 ? "w-1/2 bg-emerald-500" : "w-full bg-emerald-600"
              }`}
            ></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-[#333] text-center">
          {step === 1 ? "Upload Statement" : "Enter Statement Code"}
        </h1>
        <p className="text-[#333] text-center mt-2">
          {step === 1
            ? "Upload your PDF statement to get started."
            : "Enter the code sent to open your statement."}
        </p>

        {/* Step 1: File Upload */}
        {step === 1 && (
          <div
            className={`border-2 border-dashed rounded-lg p-10 mt-8 text-center cursor-pointer transition ${
              file ? "border-emerald-500 bg-emerald-50" : "border-gray-300"
            }`}
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            <input
              id="fileInput"
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleFileChange}
            />
            <FiUploadCloud
              className={`mx-auto text-4xl ${
                file ? "text-emerald-500" : "text-gray-400"
              }`}
            />
            <p className="mt-2 text-sm text-gray-600">
              {file ? (
                <span className="font-medium text-emerald-700">
                  {file.name}
                </span>
              ) : (
                "Click to upload PDF statement"
              )}
            </p>
          </div>
        )}

        {/* Step 2: Code Input */}
        {step === 2 && (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="code"
                className="block text-sm font-medium text-gray-700"
              >
                Statement Code
              </label>
              <div className="relative mt-1">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="code"
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter code"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              Analyze Statement
            </button>
          </form>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step === 2 && (
            <button
              onClick={handleBack}
              className="flex items-center text-gray-500 hover:text-gray-700"
            >
              <FiArrowLeft className="mr-1" /> Back
            </button>
          )}
          {step === 1 && (
            <button
              onClick={handleNext}
              className="ml-auto flex items-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition"
            >
              Next <FiArrowRight className="ml-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MpesaStatementUpload;
