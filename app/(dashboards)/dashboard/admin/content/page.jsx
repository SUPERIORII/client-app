import React from "react";
import Content from "./Content";
import { AdminNavbar } from "@/components/layout";
import { authUser } from "@/helpers/getUser";
import { getMenus } from "@/helpers/getMenus";

const page = async () => {
   const currentUser= await authUser()
    const menuItems = await getMenus()

  return (
    <div>
        <AdminNavbar user={currentUser} menuItems={menuItems}/>
      <Content />
    </div>
  );
};

export default page;
