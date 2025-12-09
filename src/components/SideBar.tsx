import React, { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  ArrowLeftRight,
  BarChart3,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const linkBaseStyles =
    "hover:bg-[#eafaf1] rounded-lg py-3 px-5 flex items-center gap-2";

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-white rounded shadow"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-white shadow-md z-40 px-5 
          transform ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:block transition-transform duration-300`}
      >
        <NavLink to="/">
          <h1 className="text-3xl font-bold mb-8 mt-8 ml-5">Pesalens</h1>
        </NavLink>

        <nav className="flex flex-col gap-3 text-[#414042] text-[16px]">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkBaseStyles} ${
                isActive ? "text-[#00cb68] font-semibold" : ""
              }`
            }
          >
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>

          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              `${linkBaseStyles} ${
                isActive ? "text-[#00cb68] font-semibold" : ""
              }`
            }
          >
            <ArrowLeftRight size={20} />
            Transactions
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `${linkBaseStyles} ${
                isActive ? "text-[#00cb68] font-semibold" : ""
              }`
            }
          >
            <BarChart3 size={20} />
            Analytics
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
