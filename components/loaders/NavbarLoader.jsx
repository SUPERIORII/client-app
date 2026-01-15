import React from "react";

export default function NavbarLoader() {
  return (
    <div
      className="border px-3 py-2 fixed top-0 left-0 right-0
               transition duration-1000 shadow-lg drop-shadow-lg h-16 flex items-center justify-between z-100 bg-white"
    >
      {/* LEFT NAVBARLoader */}
      <div className="">
        <div className="cursor-pointer z-50">
          <div className="w-9.5 h-9.5 rounded-full bg-slate-200 animate-pulse hidden md:block"></div>
          <div className="w-8 h-8 bg-slate-200 animate-pulse md:hidden"></div>
        </div>
      </div>

      {/* MIDDEL SECTION */}
      <div className="gap-6 items-center justify-center hidden lg:flex flex-1">
        {/* NAVLINKS */}
        {[1, 2, 3, 4, 5, 6, 7].map((link, index) => {
          return (
            <div className="capitalize text-sm md:text-lg p-2" key={index}>
              <span className="w-16 h-7 bg-slate-200 rounded-sm hidden lg:block p-2 animate-pulse"></span>
            </div>
          );
        })}
      </div>

      {/* RIGHT NAVBARLoader */}
      <div className="p-2 w-24 h-7 bg-slate-200 rounded-md"></div>
    </div>
  );
}
