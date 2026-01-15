import React from 'react'

export default function NewsLoader() {
  return (
   <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-emerald-200 border-t-emerald-600 mb-4"></div>
          <p className="text-gray-600 font-medium">Loading news...</p>
        </div>
      </div>
  )
}

