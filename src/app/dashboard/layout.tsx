'use client'

import { DashboardAside } from '@/components/dashboard/dashboard-aside/DashboardAside'
import { DashboardAsideMobile } from '@/components/dashboard/dashboard-aside/DashboardAsideMobile'
import { DashboardFooter } from '@/components/dashboard/dashboard-footer/DashboardFooter'
import { DashboardHeader } from '@/components/dashboard/dashboard-header/DashboardHeader'
import { DashboardSetting } from '@/components/dashboard/dashboard-settings/DashboardSetting'
import { DashboardUIConfigurator } from '@/components/dashboard/dashboard-ui-configurator/DashboardUIConfigurator'
import { type PropsWithChildren } from 'react'
import styles from './Dashboard.module.scss'

export default function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <DashboardAside />
                <DashboardUIConfigurator />
                <div className={styles.mobile}>
                    <DashboardAsideMobile />
                </div>
                <div className={styles.content}>
                    <DashboardHeader />
                    <main className={styles.main}>
                        <DashboardSetting />
                        {children}
                    </main>
                    <DashboardFooter />
                </div>
            </div>
        </div>
    )
}
