import React from "react";

const CategoryFilter: React.FC = () => {
  return (
    <div>
      <label className="text-sm text-gray-600">Category</label>
      <select className="mt-1 w-full border p-2 rounded-lg text-sm">
        <option>All Categories</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Groceries</option>
      </select>
    </div>
  );
};

export default CategoryFilter;
