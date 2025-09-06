import React from "react";
import { Link } from "react-router-dom";
import AdminDash from "./AdminDash";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="flex w-full max-w-7xl gap-6">
        {/* Sidebar */}
        <div className="w-64 bg-[#003566] text-white h-screen px-4 py-6">
          <h2 className="text-3xl text-center text-[#fdc500] mb-8">Admin</h2>
          <ul className="space-y-4 text-left pl-2">
          <li className="mb-6 text-center">
              <Link to="/lost-report" className="cursor-pointer hover:text-green-500 duration-400 ease-in-out">
                Lost Reports
              </Link>
            </li>
            <li className="mb-6 text-center">
              <Link to="/found-report" className="cursor-pointer hover:text-green-500 duration-400 ease-in-out">
                Found Reports
              </Link>
            </li>
            <li className="hover:text-yellow-300 cursor-pointer">Dashboard</li>
            <li className="hover:text-yellow-200 cursor-pointer">
              Matched Reports
            </li>
            <li className="hover:text-yellow-300 cursor-pointer">
              Unmatched Item
            </li>
            <li className="hover:text-yellow-300 cursor-pointer">Users</li>
            <li className="hover:text-yellow-300 cursor-pointer">Settings</li>
          </ul>
        </div>

        {/* Dashboard content */}
        <div className="flex-1">
          <AdminDash />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
