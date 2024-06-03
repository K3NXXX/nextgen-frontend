import { DashboardHeader } from '@/components/dashboard/dashboard-header/DashboardHeader'
import { DashboardSetting } from '@/components/dashboard/dashboard-settings/DashboardSetting'
import type { PropsWithChildren } from 'react'
import styles from './Dashboard.module.scss'
import { DashboardAside } from '@/components/dashboard/dashboard-aside/DashboardAside'

export default function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <div className={styles.root}>
            <div suppressHydrationWarning className={styles.container}>
                    <DashboardAside />
                <main  className={styles.main}>
                    <DashboardHeader />
                    <DashboardSetting />
                    {children}
                </main>
            </div>
        </div>
    )
}
