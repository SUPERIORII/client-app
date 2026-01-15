"use client";
import React, { useEffect, useState } from "react";
import Notification from "@/components/layout/Notification";
import { Users, UserPlus } from "lucide-react";
import {
  SearchAndFilters,
  UserTable,
  MobileUserCard,
  SearchLoadingSpinner,
  SearchNotFound,
} from "@/app/(dashboards)/dashboard/component/index";
import axios from "axios";

const SuperAdminUserManagement = ({ data, apiError }) => {
  const [defaultUsers, setDefaultUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState([]);
  const [notification, setNotification] = useState(null);
  const [roleFilter, setRoleFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [isLoading, setIsloading] = useState("idle");
  const [hasSearched, setHasSearched] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  // FETCH ALL SYSTEM USERS
  useEffect(() => {
    const fetchUsers = async () => {
      if (apiError) {
        setNotification({ message: "Error loading users", type: "error" });
        setTimeout(() => setNotification(null), 3000);
      } else {
        setDefaultUsers(data);
        setNotification({
          message: "users fetched successfully",
          type: "success",
        });
        setTimeout(() => setNotification(null), 3000);
      }
    };

    fetchUsers();
  }, []);

  // APPLY SEARCH FILTER
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      // CHECK IF SEARCH INPUT IS EMPTY
      if (searchQuery.trim().length >= 2) {
        applySearchFilter(searchQuery);
      } else {
        setSearchUsers([]);
        setHasSearched(false);
      }
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const applySearchFilter = async (query) => {
    setIsloading("loading");
    setHasSearched(true);
    try {
      const searchResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/search?q=${query}`
      );
      const { rowResult, countResult, page, pageSize, offSet } =
        searchResponse.data;
      setSearchUsers(rowResult);
    } catch (err) {
      console.log(err);
    } finally {
      setIsloading("idle");
    }
  };

  return (
    <div className="user_management">
      <div className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  User Management
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Manage all users in your system
                </p>
              </div>
            </div>
            <button
              onClick={() => window.open("users/create-user", "_self")}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2 shadow-sm"
            >
              <UserPlus className="w-5 h-5" />
              Add New User
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH INPUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchAndFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          // roleFilter={roleFilter}
          // onRoleFilterChange={setRoleFilter}
          // statusFilter={statusFilter}
          // onStatusFilterChange={setStatusFilter}
          // dateFilter={dateFilter}
          // onDateFilterChange={setDateFilter}
          // onClearFilters={handleClearFilters}
        />
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:block">
        {/* LOADING SPINNER */}
        {isLoading === "loading" && <SearchLoadingSpinner />}

        {/* DEFAULT SYSTEM USERS (WHEN SEARCH IS NOT APPLIED) */}
        {isLoading === "idle" && !hasSearched && (
          <UserTable users={defaultUsers} />
        )}

        {/* IF SEARCH, SHOW SERACH RESULT */}
        {isLoading === "idle" && hasSearched && searchUsers.length > 0 && (
          <UserTable users={searchUsers} />
        )}

        {/* SHOW THIS IF NOT USER FOUND */}
        {isLoading === "idle" && hasSearched && searchUsers.length === 0 && (
          <SearchNotFound />
        )}

        {/* <UserTable
          defaultUsers={defaultUsers}
          searchUsers={searchUsers}
          isLoading={isLoading}
          hasSearched={hasSearched}
          searchQuery={searchQuery}

          // selectedUsers={selectedUsers}
          // onSelectUser={handleSelectUser}
          // onSelectAll={handleSelectAll}
          // onViewDetails={handleViewDetails}
          // onEditUser={handleEditUser}
          // onDeleteUser={handleDeleteUser}
        /> */}
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden space-y-4">
        {/* LOADING SPINNER */}
        {isLoading === "loading" && <SearchLoadingSpinner />}

        {/* DEFAULT SYSTEM USERS (WHEN SEARCH IS NOT APPLIED) */}
        {isLoading === "idle" &&
          !hasSearched &&
          defaultUsers.map((user) => {
            return (
              <div key={user.id}>
                <MobileUserCard
                  user={user}
                  // onViewDetails={handleViewDetails}
                  // onEdit={handleEditUser}
                />
              </div>
            );
          })}

        {/* SEARCH RESULT USERS (WHEN SEARCH IS APPLIED) */}
        {isLoading === "idle" &&
          hasSearched &&
          searchUsers.length > 0 &&
          searchUsers.map((user) => {
            return (
              <div key={user.id}>
                <MobileUserCard
                  user={user}
                  // onViewDetails={handleViewDetails}
                  // onEdit={handleEditUser}
                />
              </div>
            );
          })}
        {/* DISPLAY IF NOT USER MATCH THE SEARCH */}
        {isLoading === "idle" && hasSearched && searchUsers.length === 0 && (
          <SearchNotFound />
        )}
      </div>

      {/* {selectedUsers.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-sm text-blue-900">
            <span className="font-semibold">{selectedUsers.length}</span> user
            {selectedUsers.length !== 1 && "s"} selected
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleBulkActivate}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              Activate
            </button>
            <button
              onClick={handleBulkDeactivate}
              className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium flex items-center gap-2"
            >
              <XCircle className="w-4 h-4" />
              Deactivate
            </button>
            <button
              onClick={handleBulkDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium flex items-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>
      )} */}

      {/* {totalPages > 1 && (
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalItems={filteredUsers.length}
            itemsPerPage={itemsPerPage}
          />
        </div>
      )} */}

      {/* USER DETAIL DRAWER */}
      {/* <UserFormModal
        isOpen={isFormOpen}
        // user={editingUser}
        // onClose={() => setIsFormOpen(false)}
        // onSave={handleSaveUser}
      /> */}
      {notification && <Notification notification={notification} />}
    </div>

    // <UserDetailsDrawer
    //   user={selectedUser}
    //   isOpen={isDetailsOpen}
    //   onClose={() => setIsDetailsOpen(false)}
    //   onEdit={handleEditUser}
    //   onDelete={handleDeleteUser}
    //   onToggleStatus={handleToggleStatus}
    // />
  );
};

export default SuperAdminUserManagement;
