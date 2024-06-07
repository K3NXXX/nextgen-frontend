import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProfileRoute = createRouteMatcher(['/profile(.*)'])
const isAuthRoute = createRouteMatcher(['/register(.*)', '/login(.*)'])
const isDashboardPage = createRouteMatcher(['/dashboard(.*)'])

export default clerkMiddleware(
    (auth, req) => {
        if (isProfileRoute(req) || isDashboardPage(req)) {
            auth().protect({
                unauthenticatedUrl: 'http://localhost:3000/login',
            })
        }
        if (auth().userId && isAuthRoute(req)) {
            return new NextResponse(null, {
                status: 307,
                headers: {
                    Location: 'http://localhost:3000/dashboard',
                },
            })
        }
    },
    { debug: true }
)

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
