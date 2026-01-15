"use client"
import { Search, Filter, X } from 'lucide-react';

export default function SearchAndFilters({
  searchQuery,
  onSearchChange,
  // onClearFilters,
}) {
  // const hasActiveFilters = roleFilter || statusFilter || dateFilter;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            // value={roleFilter}
            // onChange={(e) => onRoleFilterChange(e.target.value)}
            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
          >
            <option value="">All Roles</option>
            <option value="SuperAdmin">SuperAdmin</option>
            <option value="Admin">Admin</option>
            <option value="Partner">Partner</option>
            <option value="Donor">Donor</option>
            <option value="User">User</option>
          </select>

          <select
            // value={statusFilter}
            // onChange={(e) => onStatusFilterChange(e.target.value)}
            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <select
            // value={dateFilter}
            // onChange={(e) => onDateFilterChange(e.target.value)}
            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
          >
            <option value="">All Time</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>

          {/* {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
          )} */}
        </div>
      </div>

      {/* {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mt-4">
          {roleFilter && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
              Role: {roleFilter}
              <button
                onClick={() => onRoleFilterChange('')}
                className="hover:bg-blue-100 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
          {statusFilter && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
              Status: {statusFilter}
              <button
                onClick={() => onStatusFilterChange('')}
                className="hover:bg-blue-100 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
          {dateFilter && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm">
              Date: {dateFilter}
              <button
                onClick={() => onDateFilterChange('')}
                className="hover:bg-blue-100 rounded-full p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      )} */}
    </div>
  );
}
