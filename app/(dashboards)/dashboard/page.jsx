import { authUser } from "@/helpers/getUser";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const currentUser = await authUser();

  // Redirect to login if user is not authenticated
  if (!currentUser) redirect("/login");

  // // Uncomment and use these redirects based on user role
  if (currentUser.role === "superadmin") {
    redirect("/dashboard/superadmin");
  }

  if (currentUser.role === "admin") {
    redirect("/dashboard/admin");
  }
  if (currentUser.role === "partner") {
    redirect("/dashboard/partner");
  }
  if (currentUser.role === "donor") {
    redirect("/dashboard/donor");
  }

  redirect("/login");
};

export default Dashboard;
