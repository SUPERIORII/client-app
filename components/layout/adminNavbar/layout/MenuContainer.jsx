"use client";
import React, { useState, useRef, useEffect } from "react";
import { Menu, X, User, LogOut, Sun, Moon, Lightbulb } from "lucide-react";
import Link from "next/link";
import { adminNavLinks } from "@/helpers/sources";
import { gradientMap } from "@/helpers/util";
import Image from "next/image";
import baseUrl from "@/helpers/baseUrl";
import { useRouter } from "next/navigation";

const MenuContainer = ({ user }) => {
  const DesktopMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isActive, setIsActive] = useState(null);
  const [activeTheme, setActiveTheme] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const gradientClass = gradientMap[user?.gradient_color] || "bg-gray-200";

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        DesktopMenuRef.current &&
        !DesktopMenuRef.current.contains(event.target) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    const htmlDom = document.documentElement;
    const body = document.body;
    // CHECK IF CONTAINER IS OPEN
    if (showDropdown) {
      document.addEventListener("mousedown", handleOutsideClick);
      // HIDE SCROLL BAR
      htmlDom.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
      // SHOW SCROLL BAR
      htmlDom.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);

      htmlDom.style.overflow = "";
      body.style.overflow = "";
    };
  }, [showDropdown]);

  // HANDLE LOG OUT
  const handleLogOut = async (e) => {
    e.preventDefault();

    try {
      await baseUrl.post("api/auth/logout");
      router.push("/login");
    } catch (error) {
      console.log("Logging user out error:", error);
    }
  };

  return (
    <aside>
      <div
        className="border rounded-full w-10 h-10 flex 
                 items-center justify-center cursor-pointer md:hidden
                 hover:bg-[#e2e2e2] transition duration-1000"
        onMouseDown={() => setShowDropdown((prev) => !prev)}
      >
        <Menu
          className={`absolute transition-all duration-500 ${
            showDropdown
              ? "opacity-0 scale-75 rotate-90"
              : "opacity-100 scale-100 rotate-0"
          }`}
        />

        <X
          className={`absolute transition-all duration-500
                     ${
                       showDropdown
                         ? "opacity-100 scale-100 rotate-0"
                         : "opacity-0 -rotate-90"
                     }`}
        />
      </div>

      {/* DESKTOP NAVIGATION ICON*/}
      <span
        className={`border rounded-full w-8 h-8 
                    items-center justify-center cursor-pointer hidden md:flex
                   transition duration-1000 text-white ${gradientClass}`}
        onMouseDown={() => setShowDropdown((prev) => !prev)}
      >
        {user?.first_name.slice(0, 1)}
      </span>

      {/* DESKTOP NAVIGATION MENU */}
      <div
        className={`absolute right-0 top-13 w-xs border 
              rounded-md bg-white transition duration-500 shadow-lg drop-shadow-lg z-100
              hidden md:block ${
                showDropdown
                  ? "opacity-100 visible max-h-96"
                  : "opacity-0 invisible max-h-0"
              }`}
        ref={DesktopMenuRef}
      >
        <ul className="p-2 space-y-4">
          <div className="flex flex-col p-2">
            <span>{user.firstName}</span>
            <span className="text-[#aaaaaa]">{user.email}</span>
          </div>

          {adminNavLinks.map((link) => {
            return (
              <Link
                href={link.href}
                className={`flex items-center justify-between p-2 
            hover:bg-[#e2e2e2] text-[#4e4d4daa] cursor-pointer
            ${isActive === link.id && "bg-[#e2e2e2] text-[#171717] font-medium"}
            `}
                key={link.id}
                onMouseDown={() => {
                  setIsActive(link.id);
                }}
              >
                <span className="capitalize">{link.name}</span>
                <span className="text-sm">{link.icon}</span>
              </Link>
            );
          })}

          <button
            className=" bg-[#171717] w-full text-white rounded-md flex items-center justify-between p-2"
            onClick={handleLogOut}
          >
            <span>Log Out</span>
            <LogOut size={20} />
          </button>
        </ul>
      </div>

      {/* MOBILE NAVIGATION MENU*/}
      <div
        ref={mobileMenuRef}
        className={`absolute right-0 top-15 w-full h-screen overflow-auto
              rounded-md bg-white transition-all duration-400 p-2 z-100
              md:hidden ${
                showDropdown
                  ? "transform-[translateX(0%)]"
                  : "transform-[translateX(-100%)]"
              }`}
      >
        <ul className="p-2 space-y-2">
          <button
            className=" bg-[#171717] w-full text-white rounded-md 
          flex items-center justify-center p-2 font-medium mb-5"
            onClick={handleLogOut}
          >
            <span>Log Out</span>
          </button>

          <div className="flex justify-between ">
            <span className="text-[#171717] font-medium">{user.email}</span>

            {user?.profile_url ? (
              <Image
                src={user.profile_url}
                width={80}
                height={80}
                className="w-8 h-8 rounded-full"
                alt="profile"
              />
            ) : (
              <div
                className="border rounded-full w-8 h-8 flex items-center justify-center 
                focus:bg-[#c9c9c9] transition duration-1000"
              >
                <User />
              </div>
            )}
          </div>

          {adminNavLinks.map((link) => {
            return (
              <Link
                href={link.href}
                className={`flex items-center justify-between p-2 
            hover:bg-[#e2e2e2] text-[#4e4d4daa] cursor-pointer ${
              isActive === link.id && "bg-[#e2e2e2] text-[#171717] font-medium"
            }`}
                key={link.id}
                onClick={() => {
                  setIsActive(link.id);
                  setShowDropdown(false);
                }}
              >
                <span className="capitalize">{link.name}</span>
                <span className="text-sm">{link.icon}</span>
              </Link>
            );
          })}

          {/* THEME CONTAINER */}
          <section className="border-t">
            <div
              className={`flex items-center justify-between p-2 
             text-[#4e4d4daa] font-medium`}
            >
              <span className="capitalize">theme</span>
              <div className="flex items-center justify-around border rounded-lg w-24 px-0.5">
                {[
                  <Sun size={20} />,
                  <Moon size={20} />,
                  <Lightbulb size={20} />,
                ].map((icon, index) => {
                  return (
                    <span
                      key={index}
                      className={`cursor-pointer ${
                        activeTheme === index
                          ? " border rounded-full p-0.5 border-[#4e4d4daa] text-black"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveTheme(index);
                      }}
                    >
                      {icon}
                    </span>
                  );
                })}
              </div>
            </div>
          </section>
        </ul>
      </div>
    </aside>
  );
};

export default MenuContainer;
