import { NextResponse, NextRequest } from 'next/server';

export function middleware(request) {
  const { geo, ip } = request;

  const response = NextResponse.next();

  if (request.nextUrl.pathname.startsWith('/api/ip')) {
    response.headers.set('x-ip', ip);
    response.headers.set('x-geo', JSON.stringify(geo));
  }

  return response;
}
