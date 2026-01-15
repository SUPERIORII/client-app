import { AdminNavbar } from "@/components/layout";
import React from "react";
import Reports from "./Reports";
import { authUser } from "@/helpers/getUser";
import { getMenus } from "@/helpers/getMenus";

const page = async () => {
  const currentUser = await authUser();
  const menuItems = await getMenus();
  return (
    <div>
      <AdminNavbar user={currentUser} menuItems={menuItems} />
      <Reports />
    </div>
  );
};

export default page;
