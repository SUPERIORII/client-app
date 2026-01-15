import { NextResponse } from "next/server";

export const proxy = (request) => {
  const accessToken = request.cookies.get("accessToken");

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard/:path*"],
};
