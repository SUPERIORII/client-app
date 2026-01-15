"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiUserX, FiShield, FiMoreVertical } from "react-icons/fi";
import { Plus, Edit, Trash2, Eye, Clock, CheckCircle } from "lucide-react";

const ActivityFeed = () => {
  const [showActions, setShowActions] = useState(null);

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
    // <div className="grid gap-4 grid-cols-1 md:grid-cols-2">

    // <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    //   <h1 className="text-lg font-bold">Recent Content Post</h1>
    //   {/* TABLE */}
    //   <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
    //     <div className="overflow-x-auto">
    //       <table className="min-w-full divide-y divide-gray-200">
    //         <thead className="bg-gray-50">
    //           <tr>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               User
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Role
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Status
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Join Date
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Last Active
    //             </th>
    //             <th className="relative px-6 py-3">
    //               <span className="sr-only">Actions</span>
    //             </th>
    //           </tr>
    //         </thead>
    //         <tbody className="bg-white divide-y divide-gray-200">
    //           {[
    //             {
    //               id: 1,
    //               name: "abraham",
    //               email: "adukuly461@gmail.com",
    //               role: "admin",
    //               status: "banned",
    //               joinDate: "January 5, 2022",
    //               lastActive: "july 5 2025",
    //             },
    //           ].map((user) => (
    //             <tr key={user.id} className="hover:bg-gray-50">
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                 <div className="flex items-center">
    //                   <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
    //                     <span className="text-sm font-medium text-gray-700">
    //                       {user.name.charAt(0).toUpperCase()}
    //                     </span>
    //                   </div>
    //                   <div className="ml-4">
    //                     <div className="text-sm font-medium text-gray-900">
    //                       {user.name}
    //                     </div>
    //                     <div className="text-sm text-gray-500">
    //                       {user.email}
    //                     </div>
    //                   </div>
    //                 </div>
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                 <span
    //                   className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full`}
    //                 >
    //                   {user.role}
    //                 </span>
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                 <span
    //                   className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full`}
    //                 >
    //                   {user.status}
    //                 </span>
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
    //                 {user.joinDate}
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
    //                 {user.lastActive}
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    //                 <div className="relative">
    //                   <button
    //                     onClick={() =>
    //                       setShowActions(
    //                         showActions === user.id ? null : user.id
    //                       )
    //                     }
    //                     className="text-gray-400 hover:text-gray-600"
    //                   >
    //                     <FiMoreVertical className="w-4 h-4" />
    //                   </button>
    //                   {showActions === user.id && (
    //                     <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
    //                       <div className="py-1">
    //                         <button
    //                           onClick={() => handleAction(user.id, "edit")}
    //                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
    //                         >
    //                           Edit User
    //                         </button>
    //                         <button
    //                           onClick={() => handleAction(user.id, "promote")}
    //                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
    //                         >
    //                           <FiShield className="w-4 h-4 inline mr-2" />
    //                           Change Role
    //                         </button>
    //                         <button
    //                           onClick={() =>
    //                             handleAction(
    //                               user.id,
    //                               user.status === "banned" ? "unban" : "ban"
    //                             )
    //                           }
    //                           className="block px-4 py-2 text-sm text-red-700 hover:bg-red-50 w-full text-left"
    //                         >
    //                           <FiUserX className="w-4 h-4 inline mr-2" />
    //                           {user.status === "banned"
    //                             ? "Unban User"
    //                             : "Ban User"}
    //                         </button>
    //                       </div>
    //                     </div>
    //                   )}
    //                 </div>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>

    // <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    //   <h1 className="text-lg font-bold">Recent Partner Request</h1>
    //   {/* TABLE */}
    //   <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
    //     <div className="overflow-x-auto">
    //       <table className="min-w-full divide-y divide-gray-200">
    //         <thead className="bg-gray-50">
    //           <tr>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               User
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Role
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Status
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Join Date
    //             </th>
    //             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    //               Last Active
    //             </th>
    //             <th className="relative px-6 py-3">
    //               <span className="sr-only">Actions</span>
    //             </th>
    //           </tr>
    //         </thead>
    //         <tbody className="bg-white divide-y divide-gray-200">
    //           {[
    //             {
    //               id: 1,
    //               name: "abraham",
    //               email: "adukuly461@gmail.com",
    //               role: "admin",
    //               status: "banned",
    //               joinDate: "January 5, 2022",
    //               lastActive: "july 5 2025",
    //             },
    //           ].map((user) => (
    //             <tr key={user.id} className="hover:bg-gray-50">
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                 <div className="flex items-center">
    //                   <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
    //                     <span className="text-sm font-medium text-gray-700">
    //                       {user.name.charAt(0).toUpperCase()}
    //                     </span>
    //                   </div>
    //                   <div className="ml-4">
    //                     <div className="text-sm font-medium text-gray-900">
    //                       {user.name}
    //                     </div>
    //                     <div className="text-sm text-gray-500">
    //                       {user.email}
    //                     </div>
    //                   </div>
    //                 </div>
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                 <span
    //                   className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full`}
    //                 >
    //                   {user.role}
    //                 </span>
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap">
    //                 <span
    //                   className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full`}
    //                 >
    //                   {user.status}
    //                 </span>
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
    //                 {user.joinDate}
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
    //                 {user.lastActive}
    //               </td>
    //               <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
    //                 <div className="relative">
    //                   <button
    //                     onClick={() =>
    //                       setShowActions(
    //                         showActions === user.id ? null : user.id
    //                       )
    //                     }
    //                     className="text-gray-400 hover:text-gray-600"
    //                   >
    //                     <FiMoreVertical className="w-4 h-4" />
    //                   </button>
    //                   {showActions === user.id && (
    //                     <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
    //                       <div className="py-1">
    //                         <button
    //                           onClick={() => handleAction(user.id, "edit")}
    //                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
    //                         >
    //                           Edit User
    //                         </button>
    //                         <button
    //                           onClick={() => handleAction(user.id, "promote")}
    //                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
    //                         >
    //                           <FiShield className="w-4 h-4 inline mr-2" />
    //                           Change Role
    //                         </button>
    //                         <button
    //                           onClick={() =>
    //                             handleAction(
    //                               user.id,
    //                               user.status === "banned" ? "unban" : "ban"
    //                             )
    //                           }
    //                           className="block px-4 py-2 text-sm text-red-700 hover:bg-red-50 w-full text-left"
    //                         >
    //                           <FiUserX className="w-4 h-4 inline mr-2" />
    //                           {user.status === "banned"
    //                             ? "Unban User"
    //                             : "Ban User"}
    //                         </button>
    //                       </div>
    //                     </div>
    //                   )}
    //                 </div>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
    // </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* <!-- Latest Donations --> */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h3 className="text-lg font-semibold mb-4">Latest Donations</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-500 text-sm">
                <th className="pb-3">Donor</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Project</th>
                <th className="pb-3">Date</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 font-medium">John Doe</td>
                <td className="py-3 text-green-600 font-semibold">$500</td>
                <td className="py-3">Tree Planting</td>
                <td className="py-3">2025-09-15</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 font-medium">Amina K.</td>
                <td className="py-3 text-green-600 font-semibold">$1200</td>
                <td className="py-3">Ocean Cleanup</td>
                <td className="py-3">2025-09-14</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <!-- Recent Partner Requests --> */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h3 className="text-lg font-semibold mb-4">Recent Partner Requests</h3>
        <ul className="space-y-4">
          <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">Green Future Org</p>
              <p className="text-xs text-gray-500">Requested on 2025-09-12</p>
            </div>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
              Pending
            </span>
          </li>
          <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">EcoAction Group</p>
              <p className="text-xs text-gray-500">Requested on 2025-09-10</p>
            </div>
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
              Approved
            </span>
          </li>
        </ul>
      </div>
      {/* <!-- Recent Content Posts --> */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h3 className="text-lg font-semibold mb-4">Recent Content Posts</h3>
        <div className="overflow-auto">
        <table className="w-xs divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Author
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Views
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
                {post.author}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {post.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {post.views}
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
      </div>

      {/* RECENT UPDATES */}
      <div className="bg-white py-4 px-6 rounded-xl shadow mb-8">
        <h3 className="text-lg font-semibold mb-4">Recent Updates</h3>
        {[
          {
            name: " Mike tyson",
            profile: "/images/img-1.jpg",
            content: `received his order of Night lion tech GPS Drone. All update reserved`,
            timestamp: `5 minutes Ago`,
          },
          {
            name: " Diana Ayi",
            profile: "/images/img-2.jpg",
            content: `decline her order of 2 DJI Air 2s.`,
            timestamp: `1 hour Ago`,
          },
          {
            name: "Mandy Roy",
            profile: "/images/img-3.jpg",
            content: `received his order of Air conditioner Air Soft 12.`,
            timestamp: `3 hours Ago`,
          },
          {
            name: "Amara A. Kanneh Jr",
            profile: "/images/img-4.jpg",
            content: `received his order of Air conditioner Air Soft 12.`,
            timestamp: `3 hours Ago`,
          },
        ].map((stat, index) => {
          return (
            <div className="space-y-10 flex space-x-4" key={index}>
              {/* PROFILE OR IMAGES */}
              <div className="w-10 h-10">
                <Image
                  src={stat.profile}
                  width={300}
                  height={300}
                  priority
                  alt={stat.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>

              {/* CONTENT DETAILS */}
              <div className="flex flex-col">
                <div className="text-gray-500 max-w-4xs">
                  <span className="font-bold capitalize space-x-1 text-black">
                    {stat.name}
                  </span>{" "}
                  {stat.content}
                </div>
                <div className="text-gray-500 text-sm">{stat.timestamp}</div>
              </div>
            </div>
          );
        })}
      </div>

      
    </div>
  );
};

export default ActivityFeed;
