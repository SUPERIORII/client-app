import React from "react";
import SecurityPage from "./Security";
import { authUser } from "@/helpers/getUser";
import { getMenus } from "@/helpers/getMenus";
import { AdminNavbar } from "@/components/layout";

const page = async() => {
  const currentUser = await authUser()
  const menuItems = await getMenus()

  return <div>
    <AdminNavbar user={currentUser} menuItems={menuItems}/>
      <SecurityPage/>
    </div>;
};

export default page;
