import React from "react";

const SpendingDistributionChart: React.FC = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border">
      <p className="font-semibold mb-4">Spending Distribution</p>

      <div className="flex flex-col items-center">
        <div className="h-40 w-40 rounded-full border-[12px] border-orange-400 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-gray-600">Total Spent</p>
            <p className="font-bold text-lg">KES 85k</p>
          </div>
        </div>

        <div className="mt-4 space-y-1 text-sm text-gray-600">
          <p>🟦 Transport — 40%</p>
          <p>🟩 Groceries — 25%</p>
          <p>🟪 Utilities — 15%</p>
          <p>🟧 Shopping — 10%</p>
          <p>🟨 Other — 10%</p>
        </div>
      </div>
    </div>
  );
};

export default SpendingDistributionChart;
