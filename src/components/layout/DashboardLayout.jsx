import React from "react";
import { FaHome, FaUser, FaCog, FaBars, FaBell } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        {/* Logo */}
        <div className="px-6 py-5 border-b border-gray-700">
          <Link to="/" className="text-2xl font-bold text-blue-400">Dashboard</Link>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-800 text-gray-300"
              }`
            }
          >
            <FaHome />
            Home
          </NavLink>

          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-800 text-gray-300"
              }`
            }
          >
            <FaUser />
            Profile
          </NavLink>

          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-800 text-gray-300"
              }`
            }
          >
            <FaCog />
            Settings
          </NavLink>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
          © 2026 Dashboard
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-gray-600 text-xl md:hidden">
              <FaBars />
            </button>

            <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          </div>

          <div className="flex items-center gap-5">
            <button className="relative text-gray-600 hover:text-blue-600 transition">
              <FaBell className="text-xl" />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-10 h-10 rounded-full border-2 border-blue-500"
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 min-h-[calc(100vh-180px)]">
            <Outlet />
          </div>
        </main>

        {/* Bottom Footer */}
        <footer className="bg-white border-t px-6 py-4 text-center text-sm text-gray-500">
          Made with React & Tailwind CSS
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
