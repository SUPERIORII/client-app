import React from "react";

const ProjectPartnerManagement = () => {
  const colorBadge = [
    "text-blue-600",
    "text-green-600",
    "text-red-600",
    "text-yellow-600",
    "text-yellow-600",
    "text-purple-600",
  ];

  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
      {/* <!-- Active Projects --> */}
      {[
        { title: "Active Projects", value: 45 },
        { title: "Project Near Goal (80%+)", value: 12 },
        { title: "Failed/Abandoned Projects", value: 5 },
        { title: "Pending Partners", value: 8 },
        { title: "Approved Partners", value: 120 },
      ].map((stat, index) => {
        return (
          <div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition" key={index}>
            <h3 className="text-sm text-gray-500">{stat.title}</h3>
            <p className={`text-2xl font-bold ${colorBadge[index]}`}>{stat.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectPartnerManagement;
