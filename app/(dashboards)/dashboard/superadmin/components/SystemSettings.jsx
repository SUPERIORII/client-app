'use client';
import { useState } from 'react';
import { FiSave, FiRefreshCw, FiAlertTriangle } from 'react-icons/fi';

export default function SystemSettings({ settings: initialSettings }) {
  const [settings, setSettings] = useState(initialSettings);
  const [hasChanges, setHasChanges] = useState(false);

  const handleToggle = () => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    setHasChanges(true);
  };


  return (
   <div className=
"grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
  {/* <!-- System Health Snapshot --> */}
  <div className=
  "bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    <h2 className=
    "text-lg font-semibold text-gray-700 mb-4">System Health Snapshot</h2>
    <div className=
    "space-y-4">
      {/* <!-- Uptime --> */}
      <div className=
      "flex justify-between items-center">
        <span className=
        "text-sm text-gray-500">Uptime</span>
        <div className=
        "flex items-center space-x-2">
          <span className=
          "font-medium text-green-600">99.97%</span>
          <span className=
          "h-3 w-3 rounded-full bg-green-500"></span>
        </div>
      </div>
      {/* <!-- Failed Jobs --> */}
      <div className=
      "flex justify-between items-center">
        <span className=
        "text-sm text-gray-500">Failed Jobs</span>
        <div className=
        "flex items-center space-x-2">
          <span className=
          "font-medium text-red-600">3</span>
          <span className=
          "h-3 w-3 rounded-full bg-red-500"></span>
        </div>
      </div>
      {/* <!-- Last Backup --> */}
      <div className=
      "flex justify-between items-center">
        <span className=
        "text-sm text-gray-500">Last Backup</span>
        <div className=
        "flex items-center space-x-2">
          <span className=
          "font-medium text-blue-600">Sep 19, 2025 02:15 AM</span>
          <span className=
          "h-3 w-3 rounded-full bg-green-500"></span>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Security / Audit Logs --> */}
  <div className=
  "bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    <h2 className=
    "text-lg font-semibold text-gray-700 mb-4">Security / Audit Logs</h2>
    <ul className=
    "divide-y divide-gray-200">
      <li className=
      "py-2 flex justify-between text-sm">
        <span className=
        "text-gray-600">Admin Login - Superadmin</span>
        <span className=
        "text-gray-400">2m ago</span>
      </li>
      <li className=
      "py-2 flex justify-between text-sm">
        <span className=
        "text-gray-600">Project Created - Partner A</span>
        <span className=
        "text-gray-400">15m ago</span>
      </li>
      <li className=
      "py-2 flex justify-between text-sm">
        <span className=
        "text-gray-600">Donation Received - $500</span>
        <span className=
        "text-gray-400">30m ago</span>
      </li>
      <li className=
      "py-2 flex justify-between text-sm">
        <span className=
        "text-gray-600">Backup Completed</span>
        <span className=
        "text-gray-400">1h ago</span>
      </li>
      <li className=
      "py-2 flex justify-between text-sm">
        <span className=
        "text-gray-600">Partner Request Approved</span>
        <span className=
        "text-gray-400">2h ago</span>
      </li>
    </ul>
  </div>
</div>
  );
}