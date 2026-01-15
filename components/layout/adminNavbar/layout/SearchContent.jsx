"use client";
import React, { useRef, useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { adminNavLinks } from "@/helpers/sources";

const SearchContent = () => {
  const [searchContainer, setSearchContainer] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const searchRef = useRef(null);

  return (
    <div>
      {/* SHOW SEARCH BARS ON LARGE SCREEN */}
      <div
        className="search-bar hidden lg:flex gap-3"
        onClick={() => setSearchContainer(true)}
      >
        <div className="border rounded-sm w-56 h-8 px-2 flex justify-between items-center">
          <div className="flex gap-1.5 items-center text-[#a4a4a4]">
            <Search size={20} />
            <span>Find...</span>
          </div>

          <div className="border w-5 h-5 flex items-center justify-center transition duration-500">
            F
          </div>
        </div>
      </div>

      <div
        className="lg:hidden border rounded-full w-10 h-10 flex items-center justify-center
             cursor-pointer hover:bg-[#c9c9c9] transition duration-500"
        onClick={() => setSearchContainer((prev) => !prev)}
      >
        <Search />
      </div>

      {/* SEARCH CONTAINER */}
      {searchContainer && (
        <section
          className="bg-[rgba(0,0,0,0.5)] fixed w-screen h-screen left-0 right-0 top bottom-0 z-10"
          onClick={(e) => {
            const target = searchRef.current;

            if (target && !target.contains(e.target)) {
              setSearchContainer(false);
            }
          }}
        >
          <div
            className="absolute right-32 top-13 w-xs border 
              rounded-md bg-white transition duration-1000 shadow-lg drop-shadow-lg
              "
            ref={searchRef}
          >
            {/* SEARCH INPUT PLACEHOLDER */}
            <div className="relative w-full flex items-center p-2">
              <Search size={16} className="absolute left-5" />
              <input
                type="text"
                placeholder="Search..."
                className="h-8 w-full rounded-sm border-b-2 
         text-gray-500 mx-auto pl-9 pr-9 focus:outline-2 outline-none "
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              {searchTerm && (
                <CircleX
                  size={16}
                  className="absolute right-5 cursor-pointer"
                  onClick={() => setSearchTerm("")}
                />
              )}
            </div>

            <ul className="px-1 space-y-2">
              {adminNavLinks.map((link) => {
                return (
                  <Link
                    href={link.href}
                    className="flex items-center px-2
            hover:bg-[#e2e2e2] cursor-pointer gap-2"
                    key={link.id}
                  >
                    <span className="text-sm text-[#7f7f7f]">{link.icon}</span>

                    <div>
                      <span className="capitalize text-sm font-medium">
                        {link.name}
                      </span>
                      <br />
                      <span className="capitalize text-[#7f7f7f]">
                        {link.category}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};

export default SearchContent;
