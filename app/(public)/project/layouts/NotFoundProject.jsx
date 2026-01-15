import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const NotFoundProject = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Content Not Found
        </h2>
        <Link
          href="/project"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundProject;
