/**
 * User Authentication Utilities
 * Handles server-side user verification and data fetching
 * Works with HTTP-only cookies for secure authentication
 */

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Get current logged-in user data
 * Used in server-side page components to verify authentication
 *
 * Process:
 * 1. Read infoToken cookie set during login
 * 2. If no token, user is not authenticated
 * 3. Fetch user profile from backend using token
 * 4. Return user data or null if not authenticated
 *
 * @returns {Promise<Object|null>} User object or null if not authenticated
 */
export const authUser = async () => {
  try {
    // STEP 1: Read cookies from request
    const storeCookies = await cookies();
    const token = storeCookies.get("accessToken");

    // STEP 2: Check if authentication token exists
    if (!token) {
      return redirect("/login");
    }

    // // STEP 3: Fetch user profile from backend
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/profile`,
      {
        method: "GET",
        credentials: "include",
        cache: "no-store", // Don't cache user data
        headers: { Cookie: storeCookies.toString() },
      }
    );

    // // STEP 4: Handle response status
    if (response.status === 401) {
      redirect("/login");
    }

    if (!response.ok) {
      redirect("/login");
    }
    // STEP 5: Extract and return user data
    const data = await response.json();

    console.log(`User authenticated: ${data.email}`);
    return data;
   
  } catch (error) {
    console.error(`Error fetching user data: ${error.message}`);
  }
};
