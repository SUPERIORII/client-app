"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { User } from "lucide-react";
import {
  MenuContainer,
  NavbarLinks,
  Notification,
  SearchContent,
} from "./layout";
import Link from "next/link";
import Image from "next/image";
import {
  superAdminIcons,
  adminIcons,
  donorIcons,
  partnerIcons,
} from "@/components/utils/icons";

export default function AdminNavbar({ user, menuItems }) {
  const Icons =
    user.role === "superadmin"
      ? superAdminIcons
      : user.role === "admin"
      ? adminIcons
      : user.role === "donor"
      ? donorIcons
      : user.role === "partner"
      ? partnerIcons
      : superAdminIcons;

  console.log(Icons);
  console.log(menuItems);

  return (
    <header className=" bg-[#ffffff] px-3 py-2 fixed top-0 left-0 right-0 border border-[#e6e7e7] z-50">
      <aside className="flex justify-between">
        <div className="upper-nav flex items-center justify-between gap-4">
          <div className="w-8 h-8 block">
            <Link href="/dashboard">
              <img
                src="/images/logo.png"
                alt="profile"
                className="w-full h-full rounded-full"
              />
            </Link>
          </div>

          <span className="hidden md:block text-[#d9dbde]">/</span>

          {/* PROFILE PIC */}
          <div className=" items-center gap-3 hidden md:flex ">
            <a href="/profile" className="w-8 h-8">
              {user?.profile_url ? (
                <Image
                  width={100}
                  height={100}
                  src="/images/img-1.jpg"
                  alt="profile"
                  className="w-full h-full rounded-full"
                />
              ) : (
                <div
                  className="border rounded-full w-8 h-8 flex items-center justify-center 
                cursor-pointer hover:bg-[#c9c9c9] transition duration-1000"
                >
                  <User />
                </div>
              )}
            </a>

            <span className="username text-sm font-medium">
              {`${user?.first_name} ${user?.last_name}`}
            </span>

            <span className="username text-xs font-medium bg-[#f3f4f6] p-1.5 rounded-2xl hidden md:block">
              {user?.role}
            </span>
            <FaGithub size={20} />
          </div>
        </div>

        {/*===================== RIGHT SIDE ====================================*/}
        <div className="upper-nav flex items-center gap-3">
          {/* SEARCH CONTAINER */}
          <SearchContent />

          {/* NOTIFICATION */}
          <aside className="flex items-center gap-3">
            <Notification />

            {/* MOBILE DROPDOWN ICON */}
            <MenuContainer user={user} />
          </aside>
        </div>
      </aside>

      {/* NAVIGATION LINKS */}
      <NavbarLinks menuItems={menuItems} Icons={Icons} />
    </header>
  );
}
