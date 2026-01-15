"use client";
import React, { useEffect, useState } from "react";

import { Menu, XIcon } from "lucide-react";
import { navLinks } from "@/helpers/sources";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathName = usePathname();

  const handleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  // CONTROLS SCROLLING IN USE EFFECT
  useEffect(() => {
    if (!mobileMenu || typeof window === "undefined") return;

    const htmlDom = document.documentElement;
    const body = document.body;
    // const scrollY = window.scrollY;

    // body.style.position = "fixed";
    // body.style.top = `-${scrollY}px`;
    // body.style.width="100%"

    // return ()=>{
    //    body.style.position = "";
    // body.style.top = "";
    // body.style.width=""

    // window.scroll(0, scrollY)
    // }

    if (mobileMenu) {
      htmlDom.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      htmlDom.style.overflow = "";
      body.style.overflow = "";
    }

    // CLEAN UP FUNCTION
    return () => {
      htmlDom.style.overflow = "";
      body.style.overflow = "";
    };
  }, [mobileMenu]);

  return (
    <nav
      className="border px-3 py-2 fixed top-0 left-0 right-0
               transition duration-1000 shadow-lg drop-shadow-lg h-16 flex items-center justify-between z-100 bg-white"
    >
      {/* LEFT NAVBAR */}
      <div className="flex gap-6 item-center">
        <div className="cursor-pointer z-50 flex items-center gap-5">
          <button
            className="text-3xl lg:hidden flex items-center"
            onClick={handleMobileMenu}
          >
            <Menu
              size={30}
              className={`absolute transition-all duration-300 
                ${
                  mobileMenu
                    ? "opacity-0 scale-75 rotate-90"
                    : "opacity-100 scale-100 rotate-0"
                }`}
            />

            <XIcon
              className={`absolute transition-all duration-300 
                    ${
                      mobileMenu
                        ? "opacity-100 scale-100 rotate-0"
                        : "opacity-0 scale-75 -rotate-90"
                    }`}
              size={30}
            />
          </button>

          <a href="/">
            <img
              src="/images/logo.png"
              width={35}
              height={35}
              className="hidden lg:block"
              alt="Ecorise Logo"
            />
          </a>
        </div>
      </div>

      {/* MIDDEL SECTION */}
      <div>
        <ul className="gap-6 items-center hidden lg:flex">
          {/* NAVLINKS */}
          {navLinks.map((link) => {
            const isActive = pathName === link.href;

            return (
              <a
                href={link.href}
                className="capitalize text-sm md:text-lg p-2"
                key={link.id}
              >
                <span
                  className={`font-medium text-[#5f6367] cursor-pointer 
                    hidden lg:block text-xs xl:text-sm
                          hover:bg-[#f2f2f2] p-2 transition duration-200 hover:rounded-sm
                        
                  ${
                    isActive &&
                    "-top-10 border-b-3 border-b-[#323232] text-[#323232] font-extrabold"
                  }
                          
                          `}
                >
                  {link.text}
                </span>
              </a>
            );
          })}
        </ul>
      </div>

      {/* RIGHT NAVBAR */}
      <div className="flex items-center justify-end gap-5">
        <div className="flex items-center gap-4">
          {/* BUTTON */}
          <div className="w-full flex gap-4 flex-1/12">
            <a
              href="/donate"
              className="text-center bg-[#171717] p-2
             text-white text-xs font-semibold rounded-md hover:opacity-90
             transition duration-400 flex items-center justify-between gap-1.5"
            >
              <span>Donate Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* mobile navigation */}
      <aside
        className={`absolute right-0 top-14 w-full h-screen 
              bg-white lg:hidden overflow-hidden 
              transition-all duration-1000 ease-in-out 
              ${
                mobileMenu
                  ? "transform-[translateX(0%)]"
                  : "transform-[translateX(-110%)]"
              }`}
      >
        <ul className="p-2 space-y-4">
          {navLinks.map((link) => {
            const isActive =
              pathName === link.href || pathName.startsWith(link.href + "/");
            return (
              <Link
                href={link.href}
                className={`flex items-center justify-between p-2 
            hover:bg-[#e2e2e2] text-[#4e4d4daa] cursor-pointer ${
              isActive && "bg-[#e2e2e2] font-semibold text-black"
            }`}
                key={link.id}
              >
                <span className="capitalize">{link.text}</span>
                <span className="text-sm">{link.icon}</span>
              </Link>
            );
          })}

          <Link
            href="/"
            className="flex items-center justify-between p-2 
            hover:bg-[#e2e2e2] text-[#4e4d4daa] cursor-pointer"
          >
            HomePage
          </Link>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
