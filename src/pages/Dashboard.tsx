import React from "react";
import AmountCard from "../components/AmountCard";
import RecentTransactions, {
  type Transaction,
} from "../components/RecentTransactions";

const stats = [
  { title: "Total Money In", amount: "KES 150,000", percentage: 12.5 },
  { title: "Total Money Out", amount: "KES 65,000", percentage: -5.2 },
  { title: "Current Balance", amount: "KES 40,000", percentage: 4.5 },
  { title: "Total Transactions", amount: "1,204", percentage: 3.4 },
];

const sampleData: Transaction[] = [
  {
    date: "2025-01-12",
    description: "Deposit from M-Pesa",
    type: "deposit",
    amount: 3500,
  },
  {
    date: "2025-01-10",
    description: "Withdrawal to Card",
    type: "withdrawal",
    amount: -2000,
  },
  {
    date: "2025-01-05",
    description: "Monthly Contribution",
    type: "saving",
    amount: 1500,
  },
  {
    date: "2025-01-12",
    description: "Deposit from M-Pesa",
    type: "deposit",
    amount: 3500,
  },
  {
    date: "2025-01-10",
    description: "Withdrawal to Card",
    type: "withdrawal",
    amount: -2000,
  },
  {
    date: "2025-01-05",
    description: "Monthly Contribution",
    type: "saving",
    amount: 1500,
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="py-1">
      <h1 className="text-3xl font-medium">Dashboard</h1>

      {/* AmountCards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
        {stats.map((stat, index) => (
          <AmountCard
            key={index}
            title={stat.title}
            amount={stat.amount}
            percentage={stat.percentage}
          />
        ))}
      </div>

      {/* RecentTransactions */}
      <div className="mt-10">
        <RecentTransactions transactions={sampleData} />
      </div>
    </div>
  );
};

export default Dashboard;
