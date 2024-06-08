import ClientProviders from '@/components/providers/ClientProviders'
import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.scss'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: '400' })

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
            <body className={plusJakartaSans.className}>
                <ClientProviders>{children}</ClientProviders>
                <script async src="https://js.usechat.ai/widget/689b60c6-3e5d-4d1c-87ae-f0051da07cd9.js"></script><a id="usechat-button"  href="https://app.usechat.ai/widget/689b60c6-3e5d-4d1c-87ae-f0051da07cd9">UseChat</a>
            </body>
        </html>
    )
}
