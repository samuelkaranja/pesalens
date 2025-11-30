import React from "react";

export interface Transaction {
  transactionId: string;
  date: string;
  type: string;
  details: string;
  amount: number;
  status: string;
}

interface RecentTransactionsProps {
  title?: string;
  transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  title = "Recent Activity",
  transactions,
}) => {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-7">{title}</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 font-medium text-gray-600">Transaction ID</th>
              <th className="p-3 font-medium text-gray-600">Date</th>
              <th className="p-3 font-medium text-gray-600">Type</th>
              <th className="p-3 font-medium text-gray-600">Details</th>
              <th className="p-3 font-medium text-gray-600">Amount</th>
              <th className="p-3 font-medium text-gray-600">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((tx, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 last:border-b-0 hover:bg-gray-50 transition font-light text-md"
              >
                <td className="p-3">{tx.transactionId}</td>
                <td className="p-3">{tx.date}</td>
                <td className="p-3 capitalize">{tx.type}</td>
                <td className="p-3">{tx.details}</td>
                <td className="p-3 font-medium">
                  KES {tx.amount.toLocaleString()}
                </td>
                <td className="p-3">{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
