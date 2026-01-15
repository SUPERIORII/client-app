import "@/app/globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecorise Global Initiative",
  description: "An Eco and healthy environment website",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const RootLayout = async ({ children }) => {
  // const cookie = await cookies();
  // const token = cookie.get("infoToken");

  // if (!token) return redirect("/login");

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-800 pt-32 px-8`}
    >
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
