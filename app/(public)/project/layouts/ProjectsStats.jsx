"use client";
import React from "react";
import { Hammer, CheckCircle, Globe2, Clock } from "lucide-react";

const iconMap = {
  Hammer: <Hammer className="text-red-600 w-8 h-8 bg-white rounded-lg p-1" />,
  CheckCircle: (
    <CheckCircle className="text-blue-600 w-8 h-8 bg-white rounded-lg p-1" />
  ),
  Globe2: <Globe2 className="text-green-600 w-8 h-8 bg-white rounded-lg p-1" />,
  Clock: <Clock className="text-teal-600  w-8 h-8 bg-white rounded-lg p-1" />,
};

export default function ProjectsStats({ stats }) {
  // Defensive: ensure stats is a valid array to avoid runtime errors during render

  return (
    <>
      {stats?.map((stat, index) => {
        return (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20"
          >
            <div className="mx-auto mb-2 flex justify-center">
              {iconMap[stat.icon]}
            </div>
            <div className="text-2xl font-bold text-white">{stat.count}</div>
            <div className="text-sm text-green-100">{stat.label}</div>
          </div>
        );
      })}
    </>
  );
}
