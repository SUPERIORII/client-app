import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-3 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
