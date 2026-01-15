"use client";
import React, { useRef, useState } from "react";
import { Search, CircleX } from "lucide-react";
// import { searchSuggestion } from "@/lib/sources";

export default function SearchContainer() {
  const searchContainerRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  // HIDE SEARCH CONTAINER


  return (
    <div
      className="fixed top-0 left-0 right-0 bg-[rgba(0,0,0,.5)] w-full h-full z-100"
      onClick={(e) => handleContainerRef(e)}
    >
      <div
        className="container mx-auto bg-white flex flex-col max-w-6xl rounded-lg mt-3 z-100"
        ref={searchContainerRef}
      >
        {/* SEARCH INPUT PLACEHOLDER */}
        <div className="relative w-full flex items-center p-2">
          <Search size={16} className="absolute left-5" />
          <input
            type="text"
            placeholder="Search..."
            className="h-8 w-full rounded-sm border-2 border-green-600
         text-gray-500 mx-auto px-2 pl-9"
            id="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

{searchTerm && 
          <CircleX
            size={16}
            className="absolute right-5 cursor-pointer"
            onClick={() => setSearchTerm("")}
          />
}
        </div>

        {/* SHOW ONLY IF THERE IS A VALUE SEARCH INPUT UPDATE CONTAINER */}
        {searchTerm && (
          <div
            className="h-10 w-full border-b border-b-gray-400 pl-5
         text-gray-500 mx-auto p-2 relative flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-2">
              <Search size={18} />
              <span>{searchTerm}</span>
            </div>

            <p className="p-0.5 text-xs sm:text-sm md:text-md">Search all of Ecorise Global Initial</p>
          </div>
        )}

        {/* SEARCH CONTENTS */}
        <div
          className="w-full pl-5
         text-gray-800 mx-auto p-2"
        >
          <h2 className="font-semibold">Explore</h2>
          {/* SUGGESTION HINT */}
          {searchSuggestion.map((result) => (
            <div
              key={result.id}
              className="h-10 w-full pl-1
         text-gray-500 p-2 relative flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <span>{result.icon}</span>
                <span>{result.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
