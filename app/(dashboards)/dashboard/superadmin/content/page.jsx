import { AdminNavbar } from "@/components/layout";
import { getMenus } from "@/helpers/getMenus";
import { authUser } from "@/helpers/getUser";
import React from "react";
import Content from "./Content";

const page = async () => {
  const currentUser = await authUser();
  const menuItems = await getMenus();
  return (
    <div>
      <AdminNavbar user={currentUser} menuItems={menuItems} />
      <Content />
    </div>
  );
};

export default page;
