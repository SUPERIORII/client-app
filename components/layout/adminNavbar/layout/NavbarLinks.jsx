"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { X, XIcon, Shield, AlignCenter, LayoutDashboard } from "lucide-react";
import { iconMap } from "@/helpers/mockData";
import { usePathname } from "next/navigation";
import {
  superAdminIcons,
  adminIcons,
  donorIcons,
  partnerIcons,
} from "@/components/utils/icons";

const NavbarLinks = ({ menuItems, Icons }) => {
  const pathName = usePathname();

  console.log(Icons);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-auto flex items-center mt-3">
      <aside className="hidden lg:block">
        {menuItems.map((menu) => {
          const isActive = pathName === menu.path;

          return (
            <Link
              href={menu.path}
              className="capitalize text-sm p-2"
              key={menu.id}
            >
              <span
                className={`font-medium text-[#5f6367] cursor-pointer 
              hover:bg-[#f2f2f2] p-2 transition duration-200 hover:rounded-sm
              ${
                isActive &&
                "-top-10 border-b-3 border-b-[#323232] text-[#323232]"
              }
              `}
              >
                {menu.label}
              </span>
            </Link>
          );
        })}
      </aside>
      {/* SMALL SCREEN */}
      <div
        className="z-5 flex flex-col gap-0.5 fixed top-20 cursor-pointer border bg-white border-gray-300 p-2 rounded-sm lg:hidden"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <AlignCenter size={20} />
      </div>

      {/* SIDEBAR */}
      <div
        className={`z-20 absolute w-[60vw] h-screen lg:hidden transform-[translateX(-100%)] 
            bg-white left-0 top-0 bottom-0 p-4 shadow  transition duration-300
            ${
              isOpen
                ? "transform-[translateX(0%)]"
                : "transform-[translateX(-100%)]"
            }`}
      >
        {/* LOGO & CLOSE BTN */}
        <div className="flex item-center justify-between">
          <div className="flex items-center space-x-4 z-10">
            <Image
              width={100}
              height={100}
              priority
              className="w-10 h-10"
              src="/images/logo.png"
              alt="logo"
            />
            <h2 className="text-lg font-bold uppercase">
              Eco<span className="text-green-600">rise</span>
            </h2>
          </div>
          <XIcon onClick={() => setIsOpen((prev) => !prev)} />
        </div>

        {/*  NAVIGATION LINK*/}
        <div className="flex justify-center flex-col space-y-3 mt-8 overflow-auto">
          {menuItems.map((link) => {
            const isActive = pathName === link.path;

            return (
              <Link
                href={link.path}
                key={link.id}
                className={`flex space-x-5 hover:bg-gray-100 p-2 cursor-pointer transition duration-200
                  ${
                    isActive &&
                    "bg-accent border-b-3 text-[#323232] font-medium"
                  }`}
              >
                {Icons[link.icon]}
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavbarLinks;
