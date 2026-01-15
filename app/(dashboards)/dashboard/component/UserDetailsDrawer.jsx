"use client"
import { X, Mail, Phone, Calendar, Clock, Shield, Activity, Edit, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
// import { supabase } from '../lib/supabase';

const getRoleBadgeColor = (role) => {
  const colors = {
    SuperAdmin: 'bg-purple-100 text-purple-700',
    Admin: 'bg-blue-100 text-blue-700',
    Partner: 'bg-teal-100 text-teal-700',
    Donor: 'bg-green-100 text-green-700',
    User: 'bg-gray-100 text-gray-700',
  };
  return colors[role] || 'bg-gray-100 text-gray-700';
};

const getStatusBadgeColor = (status) => {
  return status === 'Active'
    ? 'bg-green-100 text-green-700'
    : 'bg-red-100 text-red-700';
};

const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export default function UserDetailsDrawer({
  user,
  isOpen,
  onClose,
  onEdit,
  onDelete,
  onToggleStatus,
}) {
  const [permissions, setPermissions] = useState([]);
  const [activityLogs, setActivityLogs] = useState([]);

  useEffect(() => {
    if (user && isOpen) {
      fetchUserPermissions();
      fetchActivityLogs();
    }
  }, [user, isOpen]);

  const fetchUserPermissions = async () => {
    // const { data } = await supabase
    //   .from('user_permissions')
    //   .select('*')
    //   .eq('user_id', user.id)
    //   .order('granted_at', { ascending: false });
    let data
    setPermissions(data || []);
  };

  const fetchActivityLogs = async () => {
    let data
    // const { data } = await supabase
    //   .from('user_activity_logs')
    //   .select('*')
    //   .eq('user_id', user.id)
    //   .order('created_at', { ascending: false })
    //   .limit(10);
    setActivityLogs(data || []);
  };

  if (!isOpen || !user) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-white shadow-2xl z-50 overflow-y-auto animate-slide-in">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-semibold text-gray-900">User Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-col items-center mb-8">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-3xl font-semibold shadow-lg">
              {user.first_name[0]}
              {user.last_name[0]}
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-gray-900">
              {user.first_name} {user.last_name}
            </h3>
            <div className="flex gap-2 mt-3">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRoleBadgeColor(
                  user.role
                )}`}
              >
                {user.role}
              </span>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeColor(
                  user.status
                )}`}
              >
                {user.status}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-5">
              <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                Contact Information
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900">{user.email}</span>
                </div>
                {user.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-900">{user.phone}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-5">
              <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                Account Details
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-xs text-gray-500">Created</div>
                    <div className="text-gray-900">{formatDate(user.created_at)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-xs text-gray-500">Last Login</div>
                    <div className="text-gray-900">{formatDate(user.last_login)}</div>
                  </div>
                </div>
              </div>
            </div>

            {permissions.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Permissions
                </h4>
                <div className="flex flex-wrap gap-2">
                  {permissions.map((perm) => (
                    <span
                      key={perm.id}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                    >
                      {perm.permission_name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activityLogs.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Recent Activity
                </h4>
                <div className="space-y-3">
                  {activityLogs.map((log) => (
                    <div
                      key={log.id}
                      className="flex items-start gap-3 p-3 bg-white rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="text-sm text-gray-900">{log.action}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {formatDate(log.created_at)}
                        </div>
                      </div>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                        {log.action_type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {user.additional_notes && (
              <div className="bg-gray-50 rounded-lg p-5">
                <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                  Additional Notes
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {user.additional_notes}
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onEdit(user)}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Edit className="w-4 h-4" />
              Edit User
            </button>
            <button
              onClick={() => onToggleStatus(user)}
              className={`flex-1 px-6 py-3 rounded-lg transition-colors font-medium ${
                user.status === 'Active'
                  ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              {user.status === 'Active' ? 'Deactivate' : 'Activate'}
            </button>
            <button
              onClick={() => onDelete(user.id)}
              className="px-6 py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
