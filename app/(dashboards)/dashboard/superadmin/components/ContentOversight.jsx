'use client';
import { useState } from 'react';
import { FiSearch, FiFilter, FiCheck, FiX, FiFlag, FiEye } from 'react-icons/fi';

export default function ContentOversight({ contentItems }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const handleAction = (itemId, action) => {
    console.log(`${action} content ${itemId}`);
  };

  const getStatusBadge = (status) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      flagged: 'bg-orange-100 text-orange-800'
    };
    return styles[status] || styles.pending;
  };

  const getTypeBadge = (type) => {
    const styles = {
      campaign: 'bg-blue-100 text-blue-800',
      program: 'bg-purple-100 text-purple-800',
      event: 'bg-green-100 text-green-800'
    };
    return styles[type] || styles.campaign;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Content Oversight</h2>
        <div className="mt-4 sm:mt-0 flex space-x-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
            {contentItems.filter(item => item.status === 'pending').length} Pending Review
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800">
            {contentItems.filter(item => item.status === 'flagged').length} Flagged
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search content..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="sm:w-48">
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="flagged">Flagged</option>
            </select>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">by {item.author}</p>
                <div className="flex items-center space-x-2 mb-3">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getTypeBadge(item.type)}`}>
                    {item.type}
                  </span>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadge(item.status)}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-sm text-gray-500 mb-4">
              <p>Category: {item.category}</p>
              <p>Submitted: {item.submittedDate}</p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <button
                onClick={() => handleAction(item.id, 'view')}
                className="inline-flex items-center px-3 py-1 text-sm text-blue-600 hover:text-blue-800"
              >
                <FiEye className="w-4 h-4 mr-1" />
                View
              </button>
              
              <div className="flex space-x-2">
                {item.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleAction(item.id, 'approve')}
                      className="inline-flex items-center px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200"
                    >
                      <FiCheck className="w-4 h-4 mr-1" />
                      Approve
                    </button>
                    <button
                      onClick={() => handleAction(item.id, 'reject')}
                      className="inline-flex items-center px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200"
                    >
                      <FiX className="w-4 h-4 mr-1" />
                      Reject
                    </button>
                  </>
                )}
                
                {item.status === 'flagged' && (
                  <button
                    onClick={() => handleAction(item.id, 'review')}
                    className="inline-flex items-center px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded hover:bg-orange-200"
                  >
                    <FiFlag className="w-4 h-4 mr-1" />
                    Review
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}