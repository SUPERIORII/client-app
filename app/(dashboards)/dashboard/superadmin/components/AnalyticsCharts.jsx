"use client";
import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const donationsData = [
  { month: "Jan", total: 5000 },
  { month: "Feb", total: 7200 },
  { month: "Mar", total: 3100 },
  { month: "Apr", total: 9500 },
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

const userRoleData = [
  { name: "Superadmins", value: 2 },
  { name: "Admins", value: 15 },
  { name: "Partners", value: 40 },
  { name: "Donors", value: 220 },
];

const COLORS = ["#f87171", "#60a5fa", "#34d399", "#fbbf24"];

const AnalyticsCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
      {/* <!-- Donations Line Chart --> */}
      <div className="bg-white p-6 rounded-xl shadow w-full">
        <h3 className="text-lg font-semibold mb-4">
          Donations Per Month (YTD)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={donationsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#16a34a"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* <!-- Projects Bar Chart --> */}
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

      {/* <!-- Users by Role Pie Chart --> */}
      <div className="bg-white p-4 rounded-xl shadow w-full">
        <h3 className="text-lg font-semibold mb-4">Users by Role</h3>
        <ResponsiveContainer width="100%" height={300} style={{marginRight:5}}>
          <PieChart>
            <Pie
              data={userRoleData}
              cx="50%"
              cy="50%"
              // labelLine={false}
              outerRadius={100}
              dataKey="value"
              label={({ name, value }) => `${name}: ${value}`}
            >
              {userRoleData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsCharts;
