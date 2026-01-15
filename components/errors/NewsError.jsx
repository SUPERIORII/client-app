import React from "react";
import { BiNews } from "react-icons/bi";

BiNews;
export default function NewsError() {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-teal-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="inline-flex items-center justify-center w-80 h-80 rounded-full bg-red-50 mb-4">
          <BiNews className="w-72 h-72"/>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Unable to Load News
        </h3>
        <p className="text-gray-600">Loading news error</p>
      </div>
    </div>
  );
}
