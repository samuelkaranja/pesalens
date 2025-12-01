import React from "react";

const WeeklyComparisonChart: React.FC = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-300">
      <div className="flex justify-between mb-3">
        <p className="font-semibold">Weekly Comparison</p>
        <div className="flex gap-3 text-xs">
          <span className="text-green-600 font-semibold">● Income</span>
          <span className="text-red-500 font-semibold">● Expenses</span>
        </div>
      </div>

      <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
        Comparison Chart Placeholder
      </div>
    </div>
  );
};

export default WeeklyComparisonChart;
