import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname === "/foobar") {
    return NextResponse.redirect(new URL("/redirected", request.url));
  }
}
