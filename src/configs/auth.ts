import type { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET_ID as string,
        }),
    ],
}
