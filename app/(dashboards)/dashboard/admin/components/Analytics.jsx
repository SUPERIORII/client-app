"use client";
import React from "react";
import { Shield, User } from "lucide-react";
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
  BarChart,
  Bar,
} from "recharts";

const sourcesData = [
  { name: "projects", value: 60 },
  { name: "news", value: 50 },
  { name: "campaigns", value: 50 },
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

const projectsData = [
  { month: "Jan", projects: 8 },
  { month: "Feb", projects: 12 },
  { month: "Mar", projects: 5 },
  { month: "Apr", projects: 15 },
  { month: "May", projects: 10 },
  { month: "June", projects: 5 },
  { month: "July", projects: 2 },
  { month: "August", projects: 11 },
  { month: "September", projects: 11 },
  { month: "October", projects: 11 },
  { month: "November", projects: 11 },
  { month: "December", projects: 11 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="donation-chart grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* DONATION PER MONTH */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Donation Per Month
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
                  stroke="orange"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* DONATION METRIC PIECHART */}
        <div className="bg-white p-6 rounded-xl shadow w-full">
          <h3 className="text-lg font-semibold mb-4">
            Projects Created Per Month
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={projectsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="projects" fill="#2563eb" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* DONATION METRIC PIECHART */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-sm lg:text-lg font-semibold text-gray-900 mb-4 capitalize">
          content type breakdown (projects, news, campaigns)
        </h3>

        <div className="space-y-4 bg-gray-50 rounded-lg flex justify-center items-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sourcesData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
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
  );
};

export default Analytics;
