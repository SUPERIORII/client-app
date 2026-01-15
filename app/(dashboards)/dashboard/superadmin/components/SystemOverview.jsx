"use client";

import {
  FiUsers,
  FiShield,
  FiActivity,
  FiTrendingUp,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi";
import { ProgressBar } from ".";

export default function SystemOverview({ metrics }) {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col flex-auto">
                <div
                  className={`w-10 h-10 ${stat.bg} rounded-full flex items-center justify-center`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>

                <p className="text-lg font-bold py-4 capitalize">
                  {stat.label}
                </p>
                <p className="text-2xl font-extrabold text-[#1e2939]">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-gray-400 mt-5 capitalize">
                  last 24 Hours
                </p>
              </div>
              {/* SUPER ADMIN PROGRESS BAR */}
              <ProgressBar />
            </div>
          </div>
        ))}
      </div>


      {/* Growth Metrics */}
      {/* <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Growth Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <FiTrendingUp className="w-8 h-8 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {metrics.monthlyGrowth}%
            </p>
            <p className="text-sm text-gray-600">Monthly Growth</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <FiUsers className="w-8 h-8 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {((metrics.activeUsers / metrics.totalUsers) * 100).toFixed(1)}%
            </p>
            <p className="text-sm text-gray-600">Active Users</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <FiShield className="w-8 h-8 text-purple-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {metrics.totalPartners}
            </p>
            <p className="text-sm text-gray-600">Active Partners</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
