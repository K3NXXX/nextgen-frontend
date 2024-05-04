import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import  "./globals.scss"
import "react-toastify/dist/ReactToastify.css";
import { Plus_Jakarta_Sans } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import { ClerkProvider } from '@clerk/nextjs'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`,
    },
    description: 'NextGen Dashboard',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ClerkProvider>
            <html  lang="en">
                <body className={plusJakartaSans.className}>
                    {children}
                    <ToastContainer  position='bottom-right' />
                    
                    </body>
            </html>
        </ClerkProvider>
    )
}
