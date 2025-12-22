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
    transactionId: "RKP8N7P3Q6",
    date: "2025-01-12",
    type: "Deposit",
    details: "Deposit from M-Pesa",
    amount: 3500,
    status: "Completed",
  },
  {
    transactionId: "RKP8N7P3Q7",
    date: "2025-01-10",
    type: "Withdrawal",
    details: "Withdrawal to Card",
    amount: -2000,
    status: "Completed",
  },
  {
    transactionId: "RKP8N7P3Q8",
    date: "2025-01-05",
    type: "Saving",
    details: "Monthly Contribution",
    amount: 1500,
    status: "Completed",
  },
  {
    transactionId: "RKP8N7P3Q9",
    date: "2025-01-12",
    type: "Deposit",
    details: "Deposit from M-Pesa",
    amount: 3500,
    status: "Completed",
  },
  {
    transactionId: "RKP8N7P3Q10",
    date: "2025-01-10",
    type: "Withdrawal",
    details: "Withdrawal to Card",
    amount: -2000,
    status: "Completed",
  },
  {
    transactionId: "RKP8N7P3Q11",
    date: "2025-01-05",
    type: "Saving",
    details: "Monthly Contribution",
    amount: 1500,
    status: "Completed",
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="mt-10 md:mt-2">
      <h1 className="text-4xl font-medium ml-7 md:ml-1">Dashboard</h1>

      {/* AmountCards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 justify-items-center md:justify-items-start">
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
      <div className="mt-10 w-full max-w-none">
        <RecentTransactions transactions={sampleData} />
      </div>
    </div>
  );
};

export default Dashboard;
