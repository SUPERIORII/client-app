import React from "react";
import { XCircle, CheckCircle } from "lucide-react";

export default function Notification({ notification }) {
  return (
    <div className="fixed top-6 right-6 z-50 animate-slide-up">
      <div
        className={`px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 ${
          notification.type === "error"
            ? "bg-red-600 text-white"
            : "bg-green-600 text-white"
        }`}
      >
        {notification.type === "error" ? (
          <XCircle className="w-5 h-5" />
        ) : (
          <CheckCircle className="w-5 h-5" />
        )}

        <span className="font-medium">{notification.message}</span>
      </div>
    </div>
  );
}
