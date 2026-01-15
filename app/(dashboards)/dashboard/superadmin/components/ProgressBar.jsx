"use client"
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const ProgressBar = ({ progress = 15 }) => {
//    const progressColor = [
//     { green: "bg-green-600" },
//     { green: "bg-blue-600" },
//       {
   
//     color: "text-blue-600",
//     bg: "bg-blue-100",
//   },
//   {
//     label: "total Admin",
//     value: 10,
//     icon: Shield,
//     color: "text-green-600",
//     bg: "bg-green-100",
//   },
//   {
//     label: "total Partners",
//     value: 234,
//     icon: Shield,
//     color: "text-green-600",
//     bg: "bg-green-100",
//   },
//   {
//     label: "total Donors",
//     value: 234,
//     icon: Shield,
//     color: "text-orange-600",
//     bg: "bg-orange-100",
//   },
//   {
//     label: "Total Super Admins",
//     value: 2,
//     icon: Shield,
//     color: "text-orange-600",
//     bg: "bg-orange-100",
//   },
//   {
//     label: "Pending Partner Request",
//     value: 2,
//     icon: Shield,
//     color: "text-orange-100",
//     bg: "bg-orange-600",
//   },
//   {
//     label: "total Donation",
//     value: 234,
//     icon: Shield,
//     color: "text-blue-600",
//     bg: "bg-blue-100",
//   },
//   {
//     label: "Donation (This Month)",
//     value: 24500,
//     icon: MdAnalytics,
//     color: "text-blue-600",
//     bg: "bg-blue-100",
//   },
//   {
//     label: "Total Active Projects",
//     value: 24,
//     icon: MdAnalytics,
//     color: "text-blue-600",
//     bg: "bg-blue-100",
//   },
//   {
//     label: "Content Pending Approvals",
//     value: 24,
//     icon: MdAnalytics,
//     color: "text-blue-600",
//     bg: "bg-blue-100",
//   },
// ];
  

  const dummyData = [
    { name: "Completed", value: progress },
    // { name: "Remaining", value: 100 - progress },
  ];
  return (
    <PieChart width={150} height={150}>
      <Pie
        data={dummyData}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={75}
        startAngle={0}
        endAngle={360}
        paddingAngle={2}
        dataKey="value"
      >
        <Cell fill="#f86000" />
        {/* <Cell fill="#1e2939" /> */}
      </Pie>
      <text
        x={80}
        y={80}
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-medium text-lg"
      >
        {progress}%
      </text>
    </PieChart>
  );
};

export default ProgressBar;
