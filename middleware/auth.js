import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");

  // Kullanıcı giriş yapmışsa login ve register sayfalarına erişimini engelle
  const protectedRoutes = ["/login", "/register"];
  if (token && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url)); // Ana sayfaya yönlendir
  }

  return NextResponse.next();
}


// Middleware'in çalışacağı yollar
export const config = {
  matcher: ["/login", "/register"], // Bu rotalarda middleware çalışacak
};
