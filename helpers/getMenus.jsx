import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getMenus = async () => {
  let menuItems = [];
  let fetchError

  const storedCookie = await cookies();
  const token = storedCookie.get("accessToken");

  if (!token) {
    fetchError = "No authentication token found.";
  } else {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/menu`,
      {
        cache: "no-store",
        credentials: "include",
        headers: { Cookie: storedCookie.toString() },
      }
    );

    if (!response.ok) {
      fetchError = `Failed to fetch menu: ${response.status} ${response.statusText}`;
    } else {
      menuItems = await response.json();
    }
  }

  return menuItems;
};
