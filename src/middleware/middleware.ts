import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith('/auth')) {
    res.cookies.set('auth-page', 'true', { path: '/', maxAge: 3600 });
  } else {
    res.cookies.delete('auth-page');
  }

  return res;
}

export const config = {
  matcher: ['/', '/auth/Signup', '/auth/Login'],
};
