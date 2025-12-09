import React from "react";
import type { Transaction } from "../components/TransactionsTable";
import TransactionsTable from "../components/TransactionsTable";
import { Download } from "lucide-react";

const transactions: Transaction[] = [
  {
    id: "RKT6G3A4B9",
    date: "Oct 26, 2023",
    time: "10:45 AM",
    type: "Paybill",
    details: "Kenya Power & Lighting",
    amount: "2,500.00",
    status: "Completed",
  },
  {
    id: "RKS1F9C8D2",
    date: "Oct 26, 2023",
    time: "09:12 AM",
    type: "Send Money",
    details: "John Appleseed",
    amount: "5,000.00",
    status: "Completed",
  },
  {
    id: "RKR9H2E7B5",
    date: "Oct 25, 2023",
    time: "03:30 PM",
    type: "Buy Goods",
    details: "Naivas Supermarket",
    amount: "3,750.50",
    status: "Completed",
  },
  {
    id: "RKQ5K4J1M8",
    date: "Oct 25, 2023",
    time: "11:05 AM",
    type: "Deposit",
    details: "M-PESA Agent 24156",
    amount: "10,000.00",
    status: "Completed",
  },
  {
    id: "RKP8N7P3Q6",
    date: "Oct 24, 2023",
    time: "08:00 PM",
    type: "Paybill",
    details: "Zuku Fiber",
    amount: "4,500.00",
    status: "Failed",
  },
];

const Transactions: React.FC = () => {
  return (
    <div className="py-2">
      <div className="flex flex-row items-center justify-between mb-10">
        <h1 className="text-4xl font-bold text-gray-900">All Transactions</h1>
        <button className="flex items-center gap-2 text-sm bg-[#13ec5b] py-2 px-4 rounded-2xl hover:cursor-pointer">
          <Download className="h-4 w-4" />
          Export Data
        </button>
      </div>
      <TransactionsTable data={transactions} />
    </div>
  );
};

export default Transactions;
