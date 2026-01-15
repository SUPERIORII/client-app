import { Users, UserPlus, Trash2, CheckCircle, XCircle } from "lucide-react";
// import { supabase } from "./lib/supabase";
// import { useState, useEffect } from "react";

import {
  MobileUserCard,
  Pagination,
  SearchAndFilters,
  UserDetailsDrawer,
  UserFormModal,
  // UserTable,
} from "@/app/(dashboards)/dashboard/component/index";
import { AdminNavbar } from "@/components/layout";
import { authUser } from "@/helpers/getUser";
import { getMenus } from "@/helpers/getMenus";
import axios from "axios";
import SuperAdminUserManagement from "../../component/SuperAdminUserManagement";

async function UserManagementPage() {
  const currentUser = await authUser();
  const menuItems = await getMenus();

  // FETCH ALL USERS
  let apiError;
  let data;
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/user"
    );
    const result = await response.data;
    data = result;
  } catch (err) {
    apiError = err.response;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar user={currentUser} menuItems={menuItems} />
      <SuperAdminUserManagement data={data} apiError={apiError} />
    </div>
  );
}

export default UserManagementPage;
