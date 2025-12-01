import React from "react";

const TimePeriodFilter: React.FC = () => {
  return (
    <div>
      <label className="text-sm text-gray-600">Time Period</label>
      <select className="mt-1 w-full border border-gray-300 shadow p-2 rounded-lg text-sm">
        <option>Last 30 Days</option>
        <option>Last 7 Days</option>
        <option>This Month</option>
      </select>
    </div>
  );
};

export default TimePeriodFilter;
