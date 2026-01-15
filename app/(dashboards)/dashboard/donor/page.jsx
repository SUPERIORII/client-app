import { AdminNavbar } from "@/components/layout";
import { getMenus } from "@/helpers/getMenus";
import { authUser } from "@/helpers/getUser";
import { redirect } from "next/navigation";
import React from "react";

export default async function DonorDashboard() {
  const currentUser = await authUser();
  const menuItems = await getMenus();

  if (!currentUser) redirect("/login");
  if (currentUser.role !== "donor") redirect("/unauthorized");

  return (
    <div>
      <AdminNavbar user={currentUser} menuItems={menuItems} />

      <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
        {/* Welcome Banner */}
        <section className="bg-green-200 py-10 text-center">
          <h1 className="text-3xl font-bold mb-2">
            Welcome Back,{" "}
            {`${currentUser?.first_name} ${currentUser?.last_name}`}!
          </h1>
          <p className="text-lg">
            Thank you for making a difference with your donations.
          </p>
        </section>

        {/* Stats Overview */}
        <section className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-2xl font-bold text-green-600">$2,450</h3>
            <p>Total Donations</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-2xl font-bold text-green-600">8</h3>
            <p>Projects Supported</p>
          </div>
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-2xl font-bold text-green-600">12</h3>
            <p>Volunteer Hours</p>
          </div>
        </section>

        {/* Donation History */}
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-xl font-semibold mb-4">Donation History</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded shadow">
              <thead className="bg-green-100">
                <tr>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Project</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    date: "2025-07-10",
                    amount: "$500",
                    project: "Clean Water Wells",
                    status: "Completed",
                  },
                  {
                    date: "2025-06-15",
                    amount: "$200",
                    project: "Tree Plantation",
                    status: "Completed",
                  },
                  {
                    date: "2025-05-22",
                    amount: "$100",
                    project: "Ocean Cleanup",
                    status: "Pending",
                  },
                ].map((donation, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-3">{donation.date}</td>
                    <td className="p-3">{donation.amount}</td>
                    <td className="p-3">{donation.project}</td>
                    <td className="p-3">{donation.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Projects Impacted */}
        <section className="container mx-auto px-4 py-10">
          <h2 className="text-xl font-semibold mb-6">
            Projects You’ve Impacted
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Reforestation", "Wildlife Rescue", "Solar Schools"].map(
              (project, idx) => (
                <div key={idx} className="bg-white p-4 rounded shadow">
                  <div className="h-32 bg-gray-200 mb-4" />
                  <h3 className="font-semibold">{project}</h3>
                  <p className="text-sm text-gray-600">
                    Your donations are helping this project thrive.
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-100 py-12 text-center">
          <h2 className="text-xl font-semibold mb-4">
            Ready to Make an Even Bigger Impact?
          </h2>
          <a href="#" className="bg-green-600 text-white px-6 py-2 rounded">
            Donate Again
          </a>
        </section>
      </div>

    </div>
  );
}
