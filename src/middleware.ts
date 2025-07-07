import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

// Define routes that need authentication
const protectedRoutes = ["/products"]

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  const isProtected = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  if (isProtected && !token) {
    // If not authenticated, redirect to login
    return NextResponse.redirect(new URL('/api/auth/signin', request.url))
  }

  // Allow request to continue
  return NextResponse.next()
}

// Define which routes middleware applies to
export const config = {
  matcher: ['/products/:path*'], // You can add more routes
}
