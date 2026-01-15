"use client";

import React from "react";
import { AiFillCloud, AiFillWarning } from "react-icons/ai";
import { FiServer } from "react-icons/fi";

export default function Error({ error }) {
  let message = "Something went wrong.";

  if (error.message.startsWith("SERVER_ERROR")) {
    message = "Our servers are having an issue. Please try again later.";
  } else if (
    error.message.includes("fetch failed") ||
    error.message.startsWith("NETWORK_ERROR")
  ) {
    message = "Network issue. Check your internet connection and try again.";
  }

  console.log(error.message.includes("fetch failed"));
  console.log(error.message.startsWith("SERVER_ERROR"));
  console.log(error);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-lg">
      <div className="relative">
        <AiFillCloud
          size={300}
          className="text-gray-500 transition animate-pulse"
        />
        <div className="absolute bottom-14 -0 flex ">
          <AiFillWarning size={100} className="text-green-600" />
          <FiServer size={100} fill="white" />
        </div>
      </div>
      <h2 className="capitalize font-medium text-gray-600 text-center px-5 text-xs sm:text-sm md:text-lg">
        {message}
      </h2>
    </div>
  );
}
