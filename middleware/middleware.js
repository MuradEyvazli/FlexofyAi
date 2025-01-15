import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token');

  if (!token && req.nextUrl.pathname === '/dashboard') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard'], // Middleware'in çalışacağı rotalar
};