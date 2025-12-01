import React from "react";

const data = [
  { category: "Transport", transactions: 42, inflow: 0, outflow: 34000 },
  { category: "Groceries", transactions: 35, inflow: 0, outflow: 21250 },
  { category: "Utilities", transactions: 8, inflow: 0, outflow: 12750 },
  { category: "Salary", transactions: 2, inflow: 150000, outflow: 0 },
  { category: "Shopping", transactions: 15, inflow: 0, outflow: 8500 },
];

const DetailedReportTable: React.FC = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-300">
      <div className="flex justify-between mb-4">
        <p className="font-semibold">Detailed Report Data</p>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-b-gray-300 text-gray-600 bg-[#f7f8fa]">
            <th className="py-2 text-left">Category</th>
            <th>Transactions</th>
            <th>Total Inflow</th>
            <th>Total Outflow</th>
            <th>Net Change</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => {
            const net = row.inflow - row.outflow;

            return (
              <tr key={i} className="border-b border-b-gray-300">
                <td className="py-3">{row.category}</td>
                <td className="text-center">{row.transactions}</td>
                <td className="text-green-600 text-center">
                  {row.inflow === 0 ? "KES 0.00" : `KES ${row.inflow}`}
                </td>
                <td className="text-red-500 text-center">
                  {row.outflow === 0 ? "KES 0.00" : `KES ${row.outflow}`}
                </td>

                <td
                  className={`text-center font-semibold ${
                    net < 0 ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {net < 0 ? `- KES ${Math.abs(net)}` : `+ KES ${net}`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
        <p>Showing 1 to 5 of 12 categories</p>

        <div className="flex gap-2">
          <button className="border px-3 py-1 rounded">Previous</button>
          <button className="border px-3 py-1 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default DetailedReportTable;
