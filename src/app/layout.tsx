import ClientProviders from '@/components/providers/ClientProviders'
import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.scss'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], fallback: ['sans-serif'] })

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
        <html lang="en">
            <body  className={plusJakartaSans.className}>
                <ClientProviders>{children}</ClientProviders>
             
            </body>
        </html>
    )
}
