'use client'

import { Heading } from '@/components/ui/dashboard/heading/Heading'
import { Bell, Search, Settings, User } from 'lucide-react'
import { usePathname } from 'next/navigation'
import styles from './DashboardHeader.module.scss'

export function DashboardHeader() {
    const pathname = usePathname()
    return (
        <header className={styles.root}>
            <div className={styles.left__part}>
                <div className={styles.pages}>
                    <div className={styles.pages__top}>
                        <p>
                            Pages <span> {pathname}</span>
                        </p>
                    </div>
                    <Heading title="Dashboard" />
                </div>
            </div>
            <div className={styles.right__part}>
                <div className={styles.input__wrapper}>
                    <Search className={styles.search} color='#718096' width={20} />
                    <input placeholder="Type here..." type="text" />
                </div>
                <div className={styles.icons}>
                    <User color='#718096' />
					<Settings color='#718096' />
					<Bell color='#718096' />
                </div>
            </div>
        </header>
    )
}
