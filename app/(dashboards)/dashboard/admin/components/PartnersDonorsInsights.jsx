"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Accessibility, Users, Shield } from "lucide-react";
import { FiShield, FiMoreVertical, FiUserX } from "react-icons/fi";
import Image from "next/image";

const PartnersDonorsInsights = () => {
  const [showActions, setShowActions] = useState(null);
  const data = [
    {
      id: 1,
      label: "content created ",
      value: 2.5,
      color: "text-green-600",
      bg: "bg-green-100",
      icon: FiShield,
    },
    {
      id: 2,
      label: "content created ",
      value: 2.5,
      color: "text-orange-600",
      bg: "bg-orange-100",
      icon: FiShield,
    },
    {
      id: 3,
      label: "content created ",
      value: 2.5,
      color: "text-red-600",
      bg: "bg-red-100",
      icon: FiShield,
    },
  ];

  return (
    <div className="space-x-7 grid grid-cols-1 lg:grid-cols-2 gap-3">
      {/* RECENT PARTNER ACTIVITIES */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
          recent partner activities
        </h3>
        <div className="">
          <table className="min-w-full divide-y divide-gray-200 container">
            <thead className="bg-gray-50">
              <tr className="">
                {["Partner Name", "Date", "Action"].map((column) => {
                  return (
                    <th
                      key={column}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {column}
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  id: 1,
                  name: "abraham",
                  email: "adukuly461@gmail.com",
                  role: "admin",
                  status: "active",
                },
              ].map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="relative">
                      <button
                        onClick={() =>
                          setShowActions(
                            showActions === user.id ? null : user.id
                          )
                        }
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <FiMoreVertical className="w-4 h-4" />
                      </button>
                      {showActions === user.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                          <div className="py-1">
                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                              Edit User
                            </button>
                            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                              <FiShield className="w-4 h-4 inline mr-2" />
                              Change Role
                            </button>
                            <button className="block px-4 py-2 text-sm text-red-700 hover:bg-red-50 w-full text-left">
                              <FiUserX className="w-4 h-4 inline mr-2" />
                              {user.status === "banned"
                                ? "Unban User"
                                : "Ban User"}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* TOP DONOR  */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
          Top Donors
        </h3>
        <div className="">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="">
                {["Donor Name", "project", "Amount"].map((column) => {
                  return (
                    <th
                      key={column}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {column}
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  id: 1,
                  name: "abraham",
                  email: "adukuly461@gmail.com",
                  role: "admin",
                  status: "active",
                  profile: "/images/img-1.jpg",
                },
                {
                  id: 2,
                  name: "Superior",
                  email: "superior@gmail.com",
                  role: "admin",
                  status: "active",
                  profile: "/images/img-2.jpg",
                },
                {
                  id: 3,
                  name: "Alvin Wesseh",
                  email: "alvin@gmail.com",
                  role: "donor",
                  status: "inactive",
                  profile: "/images/img-3.jpg",
                },
                {
                  id: 4,
                  name: "Edwin Chea",
                  email: "alvin@gmail.com",
                  role: "donor",
                  status: "inactive",
                },
              ].map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-700">
                          {user.profile ? (
                            <Image
                              src={user.profile}
                              width={100}
                              height={100}
                              priority
                              alt={user.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          ) : (
                            user?.name.charAt(0).toUpperCase()
                          )}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PartnersDonorsInsights;
