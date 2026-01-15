"use client";
import React from "react";
import {  Shield, User } from "lucide-react";
import { MdAnalytics } from "react-icons/md";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const sourcesData = [
  { name: "Donor", value: 500 },
  { name: "Partner", value: 200 },
  { name: "Individual", value: 100 },
];

const color = ["#16a34a", "#2563eb", "#f59e0b", "#dc2626"];

const donationData = [
  { month: "Jan", amount: 1200 },
  { month: "Feb", amount: 300 },
  { month: "March", amount: 1400 },
  { month: "April", amount: 1500 },
  { month: "May", amount: 123 },
  { month: "June", amount: 1200 },
  { month: "July", amount: 1200 },
  { month: "August", amount: 1200 },
  { month: "September", amount: 1200 },
  { month: "Oct", amount: 1200 },
  { month: "Nov", amount: 1200 },
  { month: "Dec", amount: 130 },
];


const DonationMetrics = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            label: "total Donations (All time)",
            value: 10,
            icon: User,
            color: "text-blue-600",
            bg: "bg-blue-100",
          },
          {
            label: "Donation year-to-year (TYD)",
            value: 10,
            icon: Shield,
            color: "text-green-600",
            bg: "bg-green-100",
          },
          {
            label: "Donation this month",
            value: 234,
            icon: Shield,
            color: "text-green-600",
            bg: "bg-green-100",
          },
          {
            label: "Average Donation",
            value: 234,
            icon: Shield,
            color: "text-orange-600",
            bg: "bg-orange-100",
          },
          {
            label: "Largest Donation",
            value: 2,
            icon: Shield,
            color: "text-orange-600",
            bg: "bg-orange-100",
          },
          {
            label: "Pending Approvals (Partners/Projects)",
            value: 24,
            icon: MdAnalytics,
            color: "text-blue-600",
            bg: "bg-blue-100",
          },
        ].map((stat, index) => (
          <div className="bg-white rounded-lg shadow-md p-6" key={index}>
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${stat.bg}`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
                <p className="text-2xl font-semibold text-gray-900">
                  ${stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="donation-chart chart grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* DONATON METRIC LINE CHART */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Donation Trends (Last 12 Months)
          </h3>

          <div className="space-y-4 h-54 bg-gray-50 rounded-lg flex justify-center items-center">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={donationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="green"
                  strokeWidth={4}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* DONATION METRIC PIECHART */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Donation by source
          </h3>

          <div className="space-y-4 bg-gray-50 rounded-lg flex justify-center items-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sourcesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  startAngle={0}
                  endAngle={360}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, value }) => `${name}:${value}`}
                >
                  {sourcesData.map((data, index) => {
                    return (
                      <Cell
                        key={`cell-${index}`}
                        fill={`${color[index % color.length]}`}
                      />
                    );
                  })}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationMetrics;
