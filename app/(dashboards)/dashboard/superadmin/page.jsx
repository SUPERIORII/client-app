import React from "react";
import {
  ActivityFeed,
  AnalyticsChart,
  DonationMetrics,
  ProjectPartnerManagement,
  SystemOverView,
  SystemSettings,
} from "./components";
import { superAdminSystemMetrics } from "@/helpers/mockData";
import AdminNavbar from "@/components/layout/adminNavbar/AdminNavbar";
import { authUser } from "@/helpers/getUser";
import { getMenus } from "@/helpers/getMenus";
import { redirect }from "next/navigation"

export default async function SuperAdminDashboard() {
  const user = await authUser();
  const menuItems = await getMenus();

  if (!user) redirect("/login");
  if(user && user.role !== "superadmin") redirect("/unauthorized")

  return (
    <div>
      <AdminNavbar user={user} menuItems={menuItems} />
      <div className="p-1 space-y-8">
        {/* OVERVIEWS */}
        <div className="overview">
          <h2 className="font-bold text-2xl mb-5">Dashboard/Overview</h2>
          <SystemOverView metrics={superAdminSystemMetrics} />
        </div>

        {/* DoNATION METRIC*/}
        <section className="metrics">
          <h2 className="font-bold text-2xl mb-5">Donation metrics</h2>
          <DonationMetrics />
        </section>

        {/* ANALYTIST AND CHARTS*/}
        <section className="metrics">
          <h2 className="font-bold text-2xl mb-5 capitalize">
            analytics & charts
          </h2>
          <AnalyticsChart />
        </section>

        {/* PROJECTS & PARTNER MANAGEMENT*/}
        <section className="metrics">
          <h2 className="font-bold text-2xl mb-5 capitalize">
            projects & partner management
          </h2>
          <ProjectPartnerManagement />
        </section>

        {/* ACTIVITY FEED (TABLES)*/}
        <section className="metrics">
          <h2 className="font-bold text-2xl mb-5 capitalize">Activity feeds</h2>
          <ActivityFeed />
        </section>

        {/* SYSTEM*/}
        <section className="metrics">
          <h2 className="font-bold text-2xl mb-5 capitalize">
            System settings{" "}
          </h2>
          <SystemSettings />
        </section>

        {/* section */}
        {/* <BarChartComponents/> */}
        {/* <ContentOversight />
      <Financials />
      <UserManagement /> */}
      </div>
    </div>
  );
}
