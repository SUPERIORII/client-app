"use client";

import React, { useEffect, useRef, useState } from "react";
import { Bell, FileWarningIcon, ArrowLeft } from "lucide-react";

const Notification = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isNotificationActive, setIsNotificationActive] = useState(false);
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setIsNotificationOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check both refs for desktop and mobile
      if (
        desktopRef.current &&
        !desktopRef.current.contains(event.target) &&
        mobileRef.current &&
        !mobileRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }
    };

    if (isNotificationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // CLEAN UP FUNCTION
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationOpen]);

  return (
    <section className="relative">
      <div
        className={`border rounded-full w-10 h-10 flex items-center justify-center 
                cursor-pointer hover:bg-[#c9c9c9] transition duration-1000 ${
                  isNotificationOpen && "bg-[#c9c9c9]"
                }`}
        onMouseDown={toggleDropdown}
      >
        <Bell />

{/* NOTIFICATION COUNT */}
        <div className="absolute top-0 right-0
         bg-[red] rounded-full w-4 h-4
         text-white text-sm flex items-center justify-center text-center
         font-medium
         "
         >3</div>
      </div>

      {/* DESKTOP NOTIFICATION DROPDOWN */}
      <div
        ref={desktopRef}
        className={`absolute right-0 top-13 border
              rounded-md bg-white transition duration-1000 shadow-lg drop-shadow-lg 
              w-sm hidden md:block ${
                isNotificationOpen
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }
                  `}
      >
        <div className="egi-notificaton">
          {/* NOTIFICATION HEADER */}
          <div className="stick border-b-2 border-[#f3f4f6] flex items-center p-3 gap-5 text-sm font-medium">
            {["Inbox", "Archive", "Comments"].map((notificationHead, index) => {
              return (
                <button
                  className="cursor-pointer text-lg"
                  key={index}
                  onClick={() => {
                    setIsNotificationActive(index);
                  }}
                >
                  <span
                    className={`${
                      isNotificationActive === index
                        ? "font-bold underline"
                        : ""
                    }`}
                  >
                    {notificationHead}
                  </span>
                </button>
              );
            })}
          </div>

          {/* NOTIFICATION CONTENT */}
          <div className="notification-container border-b-2  h-[80vh] overflow-auto">
            <section className="notification-content border-b-2 flex gap-3 p-4">
              <div
                className="bg-[#fffbeb] rounded-full w-10 h-10 text-[#ba4b00] 
                        border border-[#e9ad86] p-1.5"
              >
                <FileWarningIcon size={25} />
              </div>

              <div className="px-2.5">
                <span className=" ">
                  <span className="font-medium">James Johnson</span> just
                  uploaded a new project fffff ddlll dlfkfk dkdkk
                </span>
                <br />
                <span className="text-[#676767] font-medium">Aug 22</span>
              </div>
            </section>

            <section className="notification-content border-b-2 flex gap-3 p-4">
              <div
                className="bg-[#fffbeb] rounded-full w-10 h-10 text-[#ba4b00] 
                        border border-[#e9ad86] p-1.5"
              >
                <FileWarningIcon size={25} />
              </div>

              <div className="px-2.5">
                <span className=" ">
                  <span className="font-medium">James Johnson</span> just
                  uploaded a new project fffff ddlll dlfkfk dkdkk
                </span>
                <br />
                <span className="text-[#676767] font-medium">Aug 22</span>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* MOBILE NOTIFICATION DROPDOWN */}
      <div
        className={`fixed bg-[rgba(0,0,0,.5)] z-100 bottom-0 transition-all duration-500
          top-0 left-0 right-0 md:hidden ${
            isNotificationOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div
          ref={mobileRef}
          className="absolute right-0 top-15 w-full h-full bottom-0 border 
              rounded-md bg-white transition duration-1000"
        >
          <div className="egi-notificaton">
            {/* NOTIFICATION HEADER */}
            <div className="stick border-b-2 border-[#f3f4f6] flex items-center p-3 gap-5 text-sm font-medium">
              <ArrowLeft
                size={20}
                className="cursor-pointer"
                onClick={() => setIsNotificationOpen(false)}
              />
              <span className="">Notifications</span>
            </div>

            {/* NOTIFICATION CONTENT */}
            <div className="notification-container border-b-2  h-[80vh] overflow-auto">
              <div className="notification-content border-b-2 flex gap-3 p-4">
                <div
                  className="bg-[#fffbeb] rounded-full w-10 h-10 text-[#ba4b00] 
                        border border-[#e9ad86] p-1.5"
                >
                  <FileWarningIcon size={25} />
                </div>

                <div className="px-2.5">
                  <span className=" ">
                    <span className="font-medium">James Johnson</span> just
                    uploaded a new project fffff ddlll dlfkfk dkdkk
                  </span>
                  <br />
                  <span className="text-[#676767] font-medium">Aug 22</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notification;
