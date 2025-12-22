import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SideBar />
      <main className="px-3 md:px-12 py-6 md:ml-[300px] transition-all">
        <div className="w-full max-w-none md:max-w-[1600px] md:mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
