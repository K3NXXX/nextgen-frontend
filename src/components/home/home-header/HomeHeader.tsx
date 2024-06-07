'use client'

import { Logo } from '@/components/ui/logo/Logo'
import { PAGES } from '@/constants/pages-url.constants'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import styles from './HomeHeader.module.scss'

export function HomeHeader() {
    return (
        <header className={styles.root}>
            <Logo />
            <nav className={styles.navigation}>
                <ul className={styles.navigation__list}>
                    <ScrollLink to="features" smooth={true} duration={1000}>
                        <li>Features</li>
                    </ScrollLink>
                    <ScrollLink to="news" smooth={true} duration={1000}>
                        <li>News</li>
                    </ScrollLink>
                    <ScrollLink to="features" smooth={true} duration={1000}>
                        <li>Features</li>
                    </ScrollLink>
                    <ScrollLink to="news" smooth={true} duration={1000}>
                        <li>News</li>
                    </ScrollLink>
                </ul>
            </nav>
            <div className={styles.buttons}>
                <SignedIn>
                    <Link href={PAGES.DASHBOARD}>Go to dashboard</Link>
                </SignedIn>
                <SignedOut>
                    <Link href={PAGES.LOGIN}>Log in</Link>
                    <Link href={PAGES.REGISTER}>Sign up</Link>
                </SignedOut>
            </div>
        </header>
    )
}
