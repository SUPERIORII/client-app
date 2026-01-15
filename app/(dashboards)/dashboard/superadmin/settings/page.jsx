import { AdminNavbar } from "@/components/layout";
import { getMenus } from "@/helpers/getMenus";
import { authUser } from "@/helpers/getUser";
import React from "react";
import Settings from "./Settings";

const page = async () => {
  const currentUser = await authUser();
  const menuItems = await getMenus();

  return (
    <div>
      <AdminNavbar user={currentUser} menuItems={menuItems} />
      <Settings />
    </div>
  );
};

export default page;
