import React from "react";
import { FaUsers, FaDollarSign, FaChartLine, FaShoppingCart } from "react-icons/fa";

const DashboardHome = () => {
  const cards = [
    {
      title: "Users",
      value: "1,240",
      icon: <FaUsers />,
      color: "bg-blue-600",
    },
    {
      title: "Revenue",
      value: "$12,400",
      icon: <FaDollarSign />,
      color: "bg-green-600",
    },
    {
      title: "Orders",
      value: "320",
      icon: <FaShoppingCart />,
      color: "bg-purple-600",
    },
    {
      title: "Growth",
      value: "24%",
      icon: <FaChartLine />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="space-y-6">
      
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold">Welcome Back 👋</h1>
        <p className="text-sm opacity-90">
          Here’s what’s happening with your dashboard today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-5 flex items-center justify-between hover:shadow-md transition"
          >
            <div>
              <p className="text-gray-500 text-sm">{card.title}</p>
              <h2 className="text-2xl font-bold text-gray-800">
                {card.value}
              </h2>
            </div>

            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-xl ${card.color}`}
            >
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Chart / Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>✔ New user registered</li>
            <li>✔ Order #1024 completed</li>
            <li>✔ Payment received</li>
            <li>✔ New comment on post</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>

          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Add New User
            </button>

            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Generate Report
            </button>

            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;