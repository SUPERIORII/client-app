import { Building2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function PartnerEmptyState() {
  return (
    <div className="text-center py-16">
      <div className="w-24 h-24 mx-auto mb-6 bg-linear-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
        <Building2 className="w-12 h-12 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        No Partners Yet
      </h3>
      <p className="text-gray-600 mb-6">
        We're actively seeking partnerships to expand our environmental impact.
      </p>
      <Link
        href="register/partner"
        className="bg-linear-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
      >
        Become Our First Partner
      </Link>
    </div>
  );
}
