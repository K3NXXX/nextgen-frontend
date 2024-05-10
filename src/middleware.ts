import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProfileRoute = createRouteMatcher(['/profile(.*)'])
const isAuthRoute = createRouteMatcher(['/register(.*)', '/login(.*)'])

export default clerkMiddleware(
    (auth, req) => {
        if (isProfileRoute(req)) {
            auth().protect({
                unauthenticatedUrl: 'http://localhost:3000/login',
            })
        }
        if (auth().userId && isAuthRoute(req)) {
            return new NextResponse(null, {
                status: 307,
                headers: {
                    Location: 'http://localhost:3000',
                },
            })
        }
    },
    { debug: true }
)

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
