"use client"

import { DashboardHeader } from '@/components/dashboard/dashboard-header/DashboardHeader'
import { DashboardSetting } from '@/components/dashboard/dashboard-settings/DashboardSetting'
import { useEffect, type PropsWithChildren } from 'react'
import styles from './Dashboard.module.scss'
import { DashboardAside } from '@/components/dashboard/dashboard-aside/DashboardAside'
import { DashboardAsideMobile } from '@/components/dashboard/dashboard-aside/DashboardAsideMobile'
import { DashboardUIConfigurator } from '@/components/dashboard/dashboard-ui-configurator/DashboardUIConfigurator'
import { DashboardFooter } from '@/components/dashboard/dashboard-footer/DashboardFooter'

export default function Layout({ children }: PropsWithChildren<unknown>) {
    
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                    <DashboardAside />
                    <DashboardUIConfigurator/>
                <div className={styles.mobile}>
                    <DashboardAsideMobile/>
                </div>
                <main  className={styles.main}>
                    <DashboardHeader />
                    <DashboardSetting />
                    {children}
                <DashboardFooter/>
                </main>
            </div>
      
        </div>
    )
}
