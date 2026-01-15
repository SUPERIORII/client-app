import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, Menu, Search } from "lucide-react";

const Loading = () => {
  return (
    <header className=" bg-[#ffffff] px-8 py-2 fixed top-0 left-0 right-0">
      <aside className="flex justify-between">
        <div className="upper-nav flex items-center justify-between gap-4">
          <Link href="/dashboard" className="w-8 h-8 rounded-full">
            <Image
              src="/images/logo.png"
              width={300}
              height={300}
              priority
              alt="Logo"
            />
          </Link>

          <span className="hidden md:block text-[#d9dbde]">/</span>

          {/* PROFILE PIC */}
          <div className="items-center gap-3 hidden md:flex">
            {/* LOGIN USER ICON SKELETON */}
            <div
              className="border rounded-full w-8 h-8 flex items-center justify-center 
                cursor-pointer bg-[#c9c9c9] animate-pulse transition duration-1000"
            ></div>
            {/* LOGIN USER FULL NAME */}
            <div className="username w-25 h-3 rounded-lg bg-[#c9c9c9] animate-pulse"></div>
            <div className="username w-25 h-3 rounded-lg bg-[#c9c9c9] animate-pulse text-xs font-medium  p-1.5 hidden md:block"></div>
            {/* Github icon */}
            <div className="w-8 h-8 rounded-full bg-[#c9c9c9] animate-pulse"></div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="upper-nav flex items-center gap-3">
          {/* SHOW SEARCH BARS ON LARGE SCREEN */}
          <div className="search-bar hidden lg:flex gap-3">
            <div className="border rounded-sm w-56 h-8 px-2 flex justify-between items-center">
              <div className="flex gap-1.5 items-center text-[#a4a4a4]">
                search icon
                <span>Find...</span>
              </div>

              <div className="border w-5 h-5 flex items-center justify-center transition duration-500">
                F
              </div>
            </div>

            <div className="border rounded-sm w-24 h-8 px-2 font-medium">
              Feedback
            </div>
          </div>

          {/*  */}
          <aside className="flex items-center gap-3 ">
            <div
              className="lg:hidden border rounded-full w-10 h-10 flex items-center justify-center
             cursor-pointer hover:bg-[#c9c9c9] transition duration-500"
            >
              <Search />
            </div>

            {/* SHOW DESKTOP NOTIFICATION DROPDOWN */}
            <section className="relative">
              <div
                className="border rounded-full w-10 h-10 flex items-center justify-center 
                cursor-pointer hover:bg-[#c9c9c9] transition duration-1000"
              >
                {/* Bell icon here */}
                <Bell size={25} />
              </div>
            </section>

            {/* DESKTOP MENU DROPDOWN */}
            <section className="relative">
              <span
                className="border rounded-full w-10 h-10 hidden 
              items-center justify-center cursor-pointer md:flex
             transition duration-1000  bg-linear-to-br bg-amber-600"
              ></span>
            </section>

            {/* SHOW MOBILE DROPDOWN */}
            <div
              className="border rounded-full w-10 h-10 flex 
              items-center justify-center cursor-pointer md:hidden
              hover:bg-[#e2e2e2] transition duration-1000"
            >
              <Menu size={25} />
            </div>
          </aside>
        </div>
      </aside>

      {/* NAVIGATION LINKS */}
      <nav className="mx-auto flex justify-between gap-5 items-center mt-3">
        {[
          "overview",
          "integration",
          "settings",
          "support",
          "deployment",
          "support",
        ].map((navLink, index) => {
          return (
            <div
              className=" container flex w- h-3 flex-col gap-4 rounded-lg bg-[#b8b8b8] animate-pulse"
              key={index}
            ></div>
          );
        })}
      </nav>
    </header>

    // <h1>Loading dashboard pages</h1>
  );
};

export default Loading;
