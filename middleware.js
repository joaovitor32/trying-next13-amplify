import { NextResponse } from 'next/server';

export function middleware(request) {
  const { headers, geo, ip } = request;

  const requestHeaders = new Headers(headers);
  requestHeaders.set('x-ip', ip);
  requestHeaders.set('x-geo', geo);

  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  return response;
}

export const config = {
  matcher: '/',
};
