import React from "react";
// import { Calendar, Download } from "lucide-react";
// import ReportTypeFilter from "../components/filters/ReportTypeFilter";
// import TimePeriodFilter from "../components/filters/TimePeriodFilter";
// import TransactionTypeFilter from "../components/filters/TransactionTypeFilter";
// import CategoryFilter from "../components/filters/CategoryFilter";
// import VolumeTrendChart from "../components/charts/VolumeTrendChart";
// import WeeklyComparisonChart from "../components/charts/WeeklyComparisonChart";
// import SpendingDistributionChart from "../components/charts/SpendingDistributionChart";
// import DetailedReportTable from "../components/tables/DetailedReportTable";

const Analytics: React.FC = () => {
  return (
    <div className="py-1 w-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-semibold">Reports & Analytics</h1>

        {/* <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm">
            <Calendar size={18} />
            Last 30 Days
          </button>

          <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm">
            <Download size={18} />
            Export
          </button>
        </div> */}
      </div>

      <h1 className="text-4xl font-bold mt-10 text-center">Comming Soon!!</h1>

      {/* Filters */}
      {/* <div className="grid grid-cols-4 gap-4 mb-6">
        <ReportTypeFilter />
        <TimePeriodFilter />
        <TransactionTypeFilter />
        <CategoryFilter />
      </div> */}

      {/* Charts Section */}
      {/* <div className="grid grid-cols-2 gap-6 mb-6">
        <VolumeTrendChart />
        <WeeklyComparisonChart />
      </div> */}

      {/* Spending + Table */}
      {/* <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <SpendingDistributionChart />
        </div>

        <div className="col-span-2">
          <DetailedReportTable />
        </div>
      </div> */}
    </div>
  );
};

export default Analytics;
