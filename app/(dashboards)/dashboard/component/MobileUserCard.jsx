import { Eye, Edit, MoreVertical } from 'lucide-react';

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

export default function MobileUserCard({ user }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold flex-shrink-0">
          {user.first_name[0]}
          {user.last_name[0]}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 truncate">
            {user.first_name} {user.last_name}
          </h3>
          <p className="text-sm text-gray-600 truncate">{user.email}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(
                user.role
              )}`}
            >
              {user.role}
            </span>
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(
                user.status
              )}`}
            >
              {user.status}
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
        <button
          // onClick={() => onViewDetails(user)}
          className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium flex items-center justify-center gap-2"
        >
          <Eye className="w-4 h-4" />
          View
        </button>
        <button
          // onClick={() => onEdit(user)}
          className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium flex items-center justify-center gap-2"
        >
          <Edit className="w-4 h-4" />
          Edit
        </button>
      </div>
    </div>
  );
}
