import React from "react";
import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundDashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-md w-full">
        
        {/* Icon */}
        <div className="flex justify-center mb-4 text-yellow-500 text-5xl">
          <FaExclamationTriangle />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          404
        </h1>

        {/* Message */}
        <p className="text-gray-500 mb-6">
          Oops! The page you are looking for doesn’t exist.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundDashboard;