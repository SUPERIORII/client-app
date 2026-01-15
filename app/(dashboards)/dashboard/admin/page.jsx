// import React from "react";
import { AdminNavbar } from "@/components/layout";
import { getMenus } from "@/helpers/getMenus";
import { authUser } from "@/helpers/getUser";
import { redirect } from "next/navigation";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const donationData = [
  { month: "Jan", donations: 4000 },
  { month: "Feb", donations: 3000 },
  { month: "Mar", donations: 5000 },
  { month: "Apr", donations: 4780 },
  { month: "May", donations: 5890 },
  { month: "Jun", donations: 4390 },
  { month: "Jul", donations: 6490 },
];

const projectData = [
  { month: "Jan", projects: 3 },
  { month: "Feb", projects: 4 },
  { month: "Mar", projects: 2 },
  { month: "Apr", projects: 5 },
  { month: "May", projects: 6 },
  { month: "Jun", projects: 3 },
  { month: "Jul", projects: 4 },
];

const contentData = [
  { name: "News", value: 400 },
  { name: "Projects", value: 300 },
  { name: "Events", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default async function AdminDashboard() {
  const currentUser = await authUser();
  const menuItems = await getMenus();

  if (!currentUser) redirect("/login");
  if (currentUser.role !== "admin") redirect("/unauthorized");

  return (
    <div>
      <AdminNavbar user={currentUser} menuItems={menuItems} />

      <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
        {/* Row 1: Quick Stats (KPI Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-white rounded-2xl p-4 shadow text-center">
            <h3 className="text-sm text-gray-500">Total Projects</h3>
            <p className="text-2xl font-bold text-green-600">48</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow text-center">
            <h3 className="text-sm text-gray-500">Active Campaigns</h3>
            <p className="text-2xl font-bold text-blue-600">12</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow text-center">
            <h3 className="text-sm text-gray-500">Donors Engaged</h3>
            <p className="text-2xl font-bold text-purple-600">234</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow text-center">
            <h3 className="text-sm text-gray-500">Pending Moderation</h3>
            <p className="text-2xl font-bold text-red-600">5</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow text-center">
            <h3 className="text-sm text-gray-500">Approved Partners</h3>
            <p className="text-2xl font-bold text-indigo-600">18</p>
          </div>
        </div>

        {/* Row 2: Analytics & Charts */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          Left: Line Chart
          <div className="bg-white rounded-2xl p-4 shadow lg:col-span-2 h-72">
            <h3 className="text-lg font-semibold mb-2">
              Donations per Month (YTD)
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={donationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="donations" stroke="#4F46E5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          Right: Stacked Charts
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-4 shadow h-32">
              <h3 className="text-sm font-semibold mb-2">
                Projects Created / Month
              </h3>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="projects" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow h-32">
              <h3 className="text-sm font-semibold mb-2">Content Breakdown</h3>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={contentData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={40}
                    fill="#8884d8"
                    label
                  >
                    {contentData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div> */}

        {/* Row 3: Content Snapshot
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-4 shadow h-64 overflow-auto">
            <h3 className="text-lg font-semibold mb-2">Latest Content</h3>
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Title</th>
                  <th className="p-2 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Tree Planting Campaign</td>
                  <td className="p-2">2025-09-10</td>
                </tr>
                <tr>
                  <td className="p-2">Clean Beach Event</td>
                  <td className="p-2">2025-09-05</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow h-64 overflow-auto">
            <h3 className="text-lg font-semibold mb-2">
              Pending Moderation Queue
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Partner Report - Pending Approval</li>
              <li>Article Draft - Awaiting Review</li>
              <li>Event Submission - Check Details</li>
            </ul>
          </div>
        </div> */}

        {/* Row 4: Partner & Donor Insights
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-4 shadow h-64 overflow-auto">
            <h3 className="text-lg font-semibold mb-2">Partner Activities</h3>
            <ul className="text-sm space-y-2">
              <li>🌱 GreenEarth posted a new project</li>
              <li>🌍 CleanOcean updated their campaign</li>
              <li>🏫 EcoSchool added 2 events</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow h-64 overflow-auto">
            <h3 className="text-lg font-semibold mb-2">Top Donors</h3>
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Donor</th>
                  <th className="p-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Alice Johnson</td>
                  <td className="p-2">$2,000</td>
                </tr>
                <tr>
                  <td className="p-2">Global Impact Co.</td>
                  <td className="p-2">$1,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        Row 5: Notifications & Logs
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-4 shadow h-48 overflow-auto">
            <h3 className="text-lg font-semibold mb-2">Notifications</h3>
            <ul className="text-sm space-y-2">
              <li>✅ Project approved successfully</li>
              <li>⚠️ Partner request pending review</li>
              <li>📢 New donor joined the platform</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow h-48 overflow-auto">
            <h3 className="text-lg font-semibold mb-2">Admin Activity Log</h3>
            <ul className="text-sm space-y-2">
              <li>09:45 – Approved Partner Request</li>
              <li>10:10 – Published new event</li>
              <li>11:05 – Updated project details</li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}
