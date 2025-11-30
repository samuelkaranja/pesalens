import React from "react";

export interface Transaction {
  transactionId: string;
  date: string;
  type: string;
  details: string;
  amount: number;
  status: "Completed" | "Pending" | "Failed";
}

interface RecentTransactionsProps {
  title?: string;
  transactions: Transaction[];
}

const statusClasses: Record<Transaction["status"], string> = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-700",
};

//<h2 className="text-2xl font-semibold mb-7">{title}</h2>

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  title = "Recent Activity",
  transactions,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-7">{title}</h2>

      <table className="w-full text-center border-collapse">
        <thead className="bg-[#f8fafc]">
          <tr className="text-gray-600 text-sm">
            <th className="py-3">TRANSACTION ID</th>
            <th className="">DATE</th>
            <th className="">TYPE</th>
            <th className="">DETAILS</th>
            <th className="">AMOUNT</th>
            <th className="">STATUS</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr
              key={item.transactionId}
              className="border-t-gray-300 text-sm hover:bg-gray-50 hover:cursor-pointer transition"
            >
              <td className="py-4">{item.transactionId}</td>
              <td className="py-3">{item.date}</td>
              <td className="py-3">{item.type}</td>
              <td className="py-3 text-gray-700">{item.details}</td>
              <td
                className={`py-3 font-medium ${
                  item.amount < 0 ? "text-red-600" : "text-green-600"
                }`}
              >
                {item.amount < 0
                  ? `- KES ${Math.abs(item.amount)}`
                  : `+ KES ${item.amount}`}
              </td>
              <td className="py-3">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium ${
                    statusClasses[item.status]
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
