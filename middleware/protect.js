import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url)); // Eğer token yoksa login sayfasına yönlendir
  }

  return NextResponse.next(); // Token varsa devam et
}

// Middleware'in çalışacağı yollar
export const config = {
  matcher: ["/dashboard/:path*"], // Dashboard ve alt yollarında çalışacak
};
