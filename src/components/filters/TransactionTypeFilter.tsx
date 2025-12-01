import React from "react";

const TransactionTypeFilter: React.FC = () => {
  return (
    <div>
      <label className="text-sm text-gray-600">Transaction Type</label>
      <select className="mt-1 w-full border border-gray-300 shadow p-2 rounded-lg text-sm">
        <option>All Transactions</option>
        <option>Income</option>
        <option>Expenses</option>
      </select>
    </div>
  );
};

export default TransactionTypeFilter;
