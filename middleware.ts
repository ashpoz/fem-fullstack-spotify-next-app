// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextResponse } from "next/server";

export default function middleware(req) {
  const token = req.cookies.get("TRAX_ACCESS_TOKEN");

  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
}

export const config = {
  matcher: ["/", "/playlist", "/library"],
};
