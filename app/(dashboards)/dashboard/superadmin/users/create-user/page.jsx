import { UserFormModal } from "@/app/(dashboards)/dashboard/component";
import { AdminNavbar } from "@/components/layout";
import { getMenus } from "@/helpers/getMenus";
import { authUser } from "@/helpers/getUser";
import { Upload } from "lucide-react";

const CreateUser = async () => {
  const user = await authUser();
  const menuItems = await getMenus();

  return (
    <div className="ct_user">
      <AdminNavbar menuItems={menuItems} user={user} />
      <UserFormModal />
    </div>
  );
};

export default CreateUser;
