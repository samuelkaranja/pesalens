import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <SideBar />
      <main className="flex-1 p-4 md:ml-64">
        <div className="max-w-[1050px] mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
