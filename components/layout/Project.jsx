import Image from "next/image";
import React from "react";

const Project = ({ project }) => {
  return (
    <div className="p-4 border rounded shadow">
      <div className="h-40 bg-gray-200 mb-4">
        <img
          src={project.image}
          width={1000}
          height={1000}
          alt={project.title}
          className="w-full h-full"
        />
      </div>
      <h3 className="font-semibold">{project.title}</h3>
      <p className="text-sm">{project.description}</p>
      <a href="#" className="text-green-600 mt-2 inline-block">
        View Project
      </a>
    </div>
  );
};

export default Project;
