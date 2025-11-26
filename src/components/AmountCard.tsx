import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface AmountCardProps {
  title: string;
  amount: string;
  percentage: number;
}

const AmountCard: React.FC<AmountCardProps> = ({
  title,
  amount,
  percentage,
}) => {
  const isPositive = percentage >= 0;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg w-64 min-h-[160px] hover: cursor-pointer">
      <span className="text-lg text-gray-500 font-light text-md mt-3">
        {title}
      </span>

      <h1 className="text-3xl font-bold mt-3">{amount}</h1>

      <div className="flex items-center gap-1 mt-3">
        {isPositive ? (
          <ArrowUpRight size={18} className="text-green-500" />
        ) : (
          <ArrowDownRight size={18} className="text-red-500" />
        )}

        <span
          className={`text-sm font-medium ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default AmountCard;
