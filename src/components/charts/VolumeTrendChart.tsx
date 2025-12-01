import React from "react";

const VolumeTrendChart: React.FC = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border">
      <div className="flex justify-between mb-3">
        <p className="font-semibold">Transaction Volume Trend</p>
        <span className="text-xs bg-gray-100 px-2 py-1 rounded">KES</span>
      </div>

      <p className="text-sm text-gray-500 mb-2">
        Daily volume for the last 30 days
      </p>

      <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
        Chart Placeholder
      </div>
    </div>
  );
};

export default VolumeTrendChart;
