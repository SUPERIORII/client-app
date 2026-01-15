"use client";
import { Shield } from "lucide-react";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const OverView = () => {
  let progress = 10
  const dummyData = [
    { name: "Completed", value:progress  },
    // { name: "Remaining", value: 100 - progress },
  ];

  const overViewsMetric = [
    { label: "projects managed", bg: "bg-green-100", color:"text-green-600", icon:Shield, value:9},
    { label: "partners managed", bg: "bg-green-100", color:"text-green-600", icon:Shield, value:1},
    { label: "donors engaged", bg: "bg-green-100", color:"text-green-600", icon:Shield, value:6},
    { label: "active campaigns", bg: "bg-green-100", color:"text-green-600", icon:Shield, value:11},
    { label: "pending moderation", bg: "bg-orange-100", color:"text-orange-600", icon:Shield, value:10},
    // { name: "Remaining", value: 100 - progress },
  ];

  return (

    <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {overViewsMetric.map((stat) => (
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

              <p className="text- font-bold py-4 capitalize">{stat.label}</p>
              <p className="text-2xl font-extrabold text-[#1e2939]">
                {stat.value}
              </p>
              <p className="text-xs font-medium text-gray-400 mt-5 capitalize">
                last 24 Hours
              </p>
            </div>
            {/* SUPER ADMIN PROGRESS BAR */}
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
                <Cell fill="#00a63e" />
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
          </div>
        </div>
      ))}
    </div>

    </div>
  );
};

export default OverView;
