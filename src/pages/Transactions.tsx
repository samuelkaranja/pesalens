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
  {
    id: "TXN001",
    date: "2025-01-12",
    time: "10:23 AM",
    type: "Deposit",
    details: "Deposit from M-Pesa",
    amount: "3500",
    status: "Completed",
  },
  {
    id: "TXN002",
    date: "2025-01-11",
    time: "08:14 AM",
    type: "Send Money",
    details: "Sent to James Kariuki",
    amount: "-1200",
    status: "Completed",
  },
  {
    id: "TXN003",
    date: "2025-01-09",
    time: "09:45 PM",
    type: "Buy Goods",
    details: "Naivas Supermarket",
    amount: "-850",
    status: "Completed",
  },
  {
    id: "TXN004",
    date: "2025-01-05",
    time: "03:21 PM",
    type: "Paybill",
    details: "Paid KPLC Bill",
    amount: "-2300",
    status: "Completed",
  },
  {
    id: "TXN005",
    date: "2025-01-02",
    time: "11:30 AM",
    type: "Deposit",
    details: "Deposit from Equity Bank",
    amount: "5000",
    status: "Completed",
  },
  {
    id: "TXN006",
    date: "2024-12-30",
    time: "04:50 PM",
    type: "Send Money",
    details: "Sent to Mary W.",
    amount: "-900",
    status: "Failed",
  },
  {
    id: "TXN007",
    date: "2024-12-29",
    time: "12:10 PM",
    type: "Buy Goods",
    details: "Quickmart Ruaka",
    amount: "-1400",
    status: "Completed",
  },
  {
    id: "TXN008",
    date: "2024-12-28",
    time: "01:40 PM",
    type: "Deposit",
    details: "Deposit from M-Pesa",
    amount: "2000",
    status: "Completed",
  },
  {
    id: "TXN009",
    date: "2024-12-27",
    time: "07:50 PM",
    type: "Paybill",
    details: "Paid Water Bill",
    amount: "-650",
    status: "Completed",
  },
];

const Transactions: React.FC = () => {
  return (
    <div className="py-2">
      <div className="flex flex-col md:flex-row items-center md:justify-between mb-10">
        <h1 className="text-4xl font-bold text-gray-900">All Transactions</h1>
        <button className="flex items-center gap-2 text-sm bg-[#13ec5b] py-2 px-4 rounded-2xl hover:cursor-pointer mt-4">
          <Download className="h-4 md:w-4" />
          Export Data
        </button>
      </div>
      <TransactionsTable data={transactions} />
    </div>
  );
};

export default Transactions;
