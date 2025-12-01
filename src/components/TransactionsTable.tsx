import React, { useState } from "react";
import { Search } from "lucide-react";

export interface Transaction {
  id: string;
  date: string;
  time: string;
  type: string;
  details: string;
  amount: string;
  status: "Completed" | "Failed";
}

interface TransactionsTableProps {
  data: Transaction[];
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({ data }) => {
  const [searchText, setSearchText] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // Filtered transactions based on search and filters
  const filteredData = data.filter((t) => {
    const matchesSearch =
      t.id.toLowerCase().includes(searchText.toLowerCase()) ||
      t.details.toLowerCase().includes(searchText.toLowerCase()) ||
      t.type.toLowerCase().includes(searchText.toLowerCase());

    const matchesType = typeFilter === "All" || t.type === typeFilter;
    const matchesStatus = statusFilter === "All" || t.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <>
      <div className="bg-white rounded-xl shadow-md border-gray-300 flex flex-wrap items-center justify-between gap-4 mt-5 p-3">
        {/* Search + Filters */}
        <div className="flex items-center bg-gray-50 border-gray-800 rounded-lg px-4 py-3 w-full md:w-100">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by ID, type, or details..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="ml-2 w-full outline-none text-sm bg-transparent"
          />
        </div>

        <div className="flex gap-4">
          <div>
            <label className="text-sm text-gray-600 pr-2">Type:</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-white border border-gray-300 shadow rounded-lg p-2 text-sm"
            >
              <option>All</option>
              <option>Paybill</option>
              <option>Send Money</option>
              <option>Buy Goods</option>
              <option>Deposit</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600 pr-2">Status:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-white border border-gray-300 shadow rounded-lg p-2 text-sm"
            >
              <option>All</option>
              <option>Completed</option>
              <option>Failed</option>
            </select>
          </div>

          <button
            onClick={() => {
              setSearchText("");
              setTypeFilter("All");
              setStatusFilter("All");
            }}
            className="text-green-600 text-sm font-medium hover:cursor-pointer hover:underline"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md border-gray-300 mt-3 p-4">
        {/* Table */}
        <table className="w-full text-left">
          <thead className="text-gray-500 text-sm border-b-gray-400 bg-[#f6f8f6]">
            <tr>
              <th className="py-4 px-4 font-medium">Transaction ID</th>
              <th className="py-4 px-4 font-medium">Date & Time</th>
              <th className="py-4 px-4 font-medium">Type</th>
              <th className="py-4 px-4 font-medium">Details</th>
              <th className="py-4 px-4 font-medium">Amount</th>
              <th className="py-4 px-4 font-medium">Status</th>
            </tr>
          </thead>

          <tbody className="text-gray-700 text-sm">
            {filteredData.map((t, idx) => (
              <tr
                key={idx}
                className="border-b-gray-400 hover:bg-gray-50 hover:cursor-pointer transition"
              >
                <td className="py-4 px-4 font-medium">{t.id}</td>
                <td className="py-4 px-4">
                  {t.date}, {t.time}
                </td>
                <td className="py-4 px-4">{t.type}</td>
                <td className="py-4 px-4">{t.details}</td>
                <td className="py-4 px-4">KES {t.amount}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      t.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionsTable;
