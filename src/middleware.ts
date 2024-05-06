import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isRegisterRoute = createRouteMatcher(['/register(.*)'])
const isProfileRoute = createRouteMatcher(['/profile(.*)'])
export default clerkMiddleware((auth, req, res) => {
    if (isProfileRoute(req))
        auth().protect({ unauthenticatedUrl: 'http://localhost:3000/login' })
})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
