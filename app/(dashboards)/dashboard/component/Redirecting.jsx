"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Redirecting = ({currentUser}) => {
  useEffect(() => {
    const timer = setInterval(() => {
      if ( currentUser.role=== "superadmin") {
        return redirect("/dashboard/superadmin");
      } else if (currentUser.role === "admin") {
        return redirect("/dashboard/admin");
      } else if (currentUser.role === "partner") {
        return redirect("/dashboard/partner");
      } else if (currentUser.role === "donor") {
        return redirect("/dashboard/donor");
      } else {
        return redirect("/login");
      }
    }, 700);


    return () => {
      clearInterval(timer, currentUser.role);
    };
  }, []);
  console.log(currentUser.role);

  return (
    <div className="w-20 h-20 rounded-full border-t border-red-600 animate-spin transition-all duration-75"></div>
  );
};

export default Redirecting;
