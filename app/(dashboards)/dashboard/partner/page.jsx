import { AdminNavbar } from "@/components/layout";
import { getMenus } from "@/helpers/getMenus";
import { authUser } from "@/helpers/getUser";
import { redirect } from "next/navigation";
import React from "react";

export default async function PartnerDashboard() {
  const currentUser = await authUser();
  const menuItems = await getMenus();

  if (!currentUser) redirect("/login");
  if (currentUser.role !== "partner") redirect("/unauthorized");

  const stats = [
    { label: "Total Contributed", value: "$125,400" },
    { label: "Projects Supported", value: "12" },
    { label: "Volunteers Sponsored", value: "58" },
    { label: "Active Regions", value: "5" },
  ];

  const projects = [
    {
      name: "Greenville Reforestation",
      region: "Sinoe, Liberia",
      status: "Active",
      milestone: "10k seedlings by Sep 2025",
    },
    {
      name: "River Cleanup Coalition",
      region: "Monrovia",
      status: "Planning",
      milestone: "Permits secured by Oct 2025",
    },
    {
      name: "Solar for Clinics",
      region: "Bomi County",
      status: "Active",
      milestone: "Phase 2 install by Nov 2025",
    },
  ];

  const activity = [
    {
      date: "Aug 05, 2025",
      text: "Donation of $7,500 allocated to Greenville Reforestation (Phase 2).",
    },
    {
      date: "Jul 21, 2025",
      text: "Signed MOU draft for Solar for Clinics expansion.",
    },
    {
      date: "Jul 02, 2025",
      text: "Volunteer team of 12 confirmed for River Cleanup Coalition kickoff.",
    },
  ];

  return (
    <div>
      <AdminNavbar user={currentUser} menuItems={menuItems} />
      <div className="bg-gray-100 text-gray-800 min-h-screen">
        {/* Welcome / Overview */}
        <section className="bg-green-200">
          <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl md:text-4xl font-bold">
              Welcome back, GreenEarth Org
            </h1>
            <p className="mt-2 text-gray-700 max-w-3xl text-center">
              Here’s a snapshot of your impact, ongoing projects, and recent
              activity with Ecorise Global Initiatives.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl shadow p-6">
                <div className="text-sm text-gray-500">{s.label}</div>
                <div className="text-2xl font-semibold mt-1">{s.value}</div>
                <div className="mt-4 h-2 w-full bg-gray-200 rounded">
                  <div
                    className="h-2 bg-green-500 rounded"
                    style={{ width: `${60 + i * 10}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Supported */}
        <section className="container mx-auto px-4 pb-8">
          <div className="bg-white rounded-2xl shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Projects You Support</h2>
              <p className="text-sm text-gray-600">
                Overview of current commitments and upcoming milestones.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-6 py-3 font-semibold">
                      Project
                    </th>
                    <th className="text-left px-6 py-3 font-semibold">
                      Region
                    </th>
                    <th className="text-left px-6 py-3 font-semibold">
                      Status
                    </th>
                    <th className="text-left px-6 py-3 font-semibold">
                      Next Milestone
                    </th>
                    <th className="px-6 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {projects.map((p, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-6 py-4 font-medium">{p.name}</td>
                      <td className="px-6 py-4">{p.region}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            p.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">{p.milestone}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 flex justify-end">
              <button className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700">
                Support a New Project
              </button>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="container mx-auto px-4 pb-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
            </div>
            <ul className="p-6 space-y-4">
              {activity.map((a, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="mt-1 h-3 w-3 rounded-full bg-green-500" />
                  <div>
                    <div className="text-sm text-gray-500">{a.date}</div>
                    <div className="font-medium">{a.text}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <aside className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 rounded border hover:bg-gray-50">
                Download Latest Report
              </button>
              <button className="w-full px-4 py-2 rounded border hover:bg-gray-50">
                Invite Team Member
              </button>
              <button className="w-full px-4 py-2 rounded border hover:bg-gray-50">
                Update Profile
              </button>
            </div>
            <div className="mt-6 p-4 rounded bg-green-50 text-sm text-green-800">
              Tip: Keep your organization details up-to-date to appear on our
              partner spotlight.
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
