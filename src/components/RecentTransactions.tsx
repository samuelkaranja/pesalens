import React from "react";

export interface Transaction {
  date: string;
  description: string;
  type: string;
  amount: number;
}

interface RecentTransactionsProps {
  title?: string;
  transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  title = "Recent Transactions",
  transactions,
}) => {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-5">{title}</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 font-medium text-gray-600">Date</th>
              <th className="p-3 font-medium text-gray-600">Description</th>
              <th className="p-3 font-medium text-gray-600">Type</th>
              <th className="p-3 font-medium text-gray-600">Amount</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((tx, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 last:border-b-0 hover:bg-gray-50 transition font-light text-md"
              >
                <td className="p-3">{tx.date}</td>
                <td className="p-3">{tx.description}</td>
                <td className="p-3 capitalize">{tx.type}</td>
                <td className="p-3 font-medium">
                  KES {tx.amount.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
