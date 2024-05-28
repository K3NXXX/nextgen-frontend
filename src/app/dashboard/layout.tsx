import { DashboardAside } from '@/components/dashboard/dashboard-aside/DashboardAside'
import { DashboardHeader } from '@/components/dashboard/dashboard-header/DashboardHeader'
import { DashboardSetting } from '@/components/dashboard/dashboard-settings/DashboardSetting'
import type { PropsWithChildren } from 'react'
import styles from './Dashboard.module.scss'

export default function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                    <DashboardAside />
                <main className={styles.main}>
                    <DashboardHeader />
                    <DashboardSetting />
                    {children}
                </main>
            </div>
        </div>
    )
}
