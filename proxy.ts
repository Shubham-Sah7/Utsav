import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/puja/(.*)',
  '/pujas',
  '/bhet',
  '/design-system',
  '/panchang',
  '/siddha-store',
  '/gyan',
  '/rashifal',
  '/temples',
  '/api/(.*)'
]);

export default function middleware(req: any, evt: any) {
  // If Clerk publishable key is not set, bypass middleware safely to prevent 500 Internal Server Error
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return NextResponse.next();
  }

  return clerkMiddleware(async (auth, request) => {
    if (isPublicRoute(request)) return;
  })(req, evt);
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};