"use client";
import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const sourcesData = [
  { name: "Donor", value: 500 },
  { name: "Partner", value: 200 },
  { name: "Individual", value: 100 },
];

const color = ["#16a34a", "#2563eb", "#f59e0b", "#dc2626"];

// console.log(color);

const PieChartMetric = () => {
  return (
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
          label
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
  );
};

export default PieChartMetric;
