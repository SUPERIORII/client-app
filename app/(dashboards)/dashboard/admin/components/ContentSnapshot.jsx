import React from "react";
import { Plus, Edit, Trash2, Eye, Clock, CheckCircle } from "lucide-react";

const ContentSnapshot = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Making a Difference in 2024",
      status: "published",
      author: "Admin",
      date: "2024-01-20",
      views: 1250,
    },
    {
      id: 2,
      title: "Community Impact Report",
      status: "draft",
      author: "Admin",
      date: "2024-01-18",
      views: 0,
    },
    {
      id: 3,
      title: "Success Stories from Our Partners",
      status: "published",
      author: "Admin",
      date: "2024-01-15",
      views: 890,
    },
    {
      id: 4,
      title: "Success Stories from Our Partners",
      status: "published",
      author: "Admin",
      date: "2024-01-15",
      views: 890,
    },
    {
      id: 5,
      title: "Success Stories from Our Partners",
      status: "published",
      author: "Admin",
      date: "2024-01-15",
      views: 890,
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "published":
      case "active":
      case "approved":
        return (
          <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        );
      case "draft":
      case "pending":
        return (
          <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        );
      case "completed":
      case "upcoming":
        return (
          <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        );
      default:
        return status;
    }
  };
  return (
    <div className="grid space-x-10 grid-cols-1 lg:grid-cols-2">
      <div className="overflow-x-auto">
        <h1 className="font-bold text-lg mb-3">Latest Contents</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogPosts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {post.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(post.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="text-green-600 hover:text-green-900 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto">
        <h1 className="font-bold text-lg mb-3">Pending Moderation Queue</h1>
        <table className="min-w-full divide-y divide-gray-200 hover:shadow-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blogPosts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {post.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(post.status)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContentSnapshot;
