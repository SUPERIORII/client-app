"use client";
import { MapPin, Users } from "lucide-react";

const ProjectCard = ({ project }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case "coming_soon":
        return {
          color: "bg-gradient-to-r from-yellow-400 to-orange-400",
          text: "Coming Soon",
          textColor: "text-yellow-700",
          bgColor: "bg-yellow-50",
        };
      case "ongoing":
        return {
          color: "bg-gradient-to-r from-blue-400 to-purple-400",
          text: "Ongoing",
          textColor: "text-blue-700",
          bgColor: "bg-blue-50",
        };
      case "completed":
        return {
          color: "bg-gradient-to-r from-green-400 to-teal-400",
          text: "Completed",
          textColor: "text-green-700",
          bgColor: "bg-green-50",
        };
      default:
        return {
          color: "bg-gradient-to-r from-gray-400 to-gray-500",
          text: "Unknown",
          textColor: "text-gray-700",
          bgColor: "bg-gray-50",
        };
    }
  };

  const statusConfig = getStatusConfig(project.status);

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={project.image_url}
          alt={project.title}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Status Badge */}
        <div
          className={`absolute top-4 right-4 ${statusConfig.bgColor} ${statusConfig.textColor} px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2`}
        >
          <div className={`w-2 h-2 rounded-full ${statusConfig.color}`} />
          {statusConfig.text}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        {/* Project Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
          {project.location && (
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
          )}
          {project.participants && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{project.participants} people</span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <a
          href={`/project/${project.slug}`}
          className="inline-flex items-center justify-between w-full bg-linear-to-r from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 text-green-700 font-semibold py-3 px-4 rounded-xl transition-all duration-300 group/btn"
        >
          <span>View Details</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
