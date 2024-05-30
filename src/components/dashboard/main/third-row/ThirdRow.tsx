'use client'

import { salesData } from '@/data/charts.data/sales.data'
import { userActivity } from '@/lists/dashboard/main/users.activity.items'
import { LinearProgress } from '@mui/material'
import { AxisConfig, LineChart } from '@mui/x-charts'
import { BarChart } from '@mui/x-charts/BarChart'
import { LinearChartGradient } from './LinearChartGradient'
import styles from './ThirdRow.module.scss'
import { userActivityData } from '@/data/charts.data/user.activity.data'

export function ThirdRow() {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.salesOverview}>
                    <div className={styles.salesOverview__top}>
                        <p className={styles.sales}>Sales overview</p>
                        <p className={styles.stats}>
                            <span>(+5) more</span> in 2021
                        </p>
                    </div>
                    {/*@ts-ignore */}
                    <LineChart className={styles.chart} {...salesData}>
                        <LinearChartGradient />
                    </LineChart>
                </div>
                <div className={styles.usersActivity}>
                    <div className={styles.chart}>
                        <BarChart
                            {...userActivityData}
                        />
                    </div>
                    <div className={styles.content}>
                        <p className={styles.active}>Active Users</p>
                        <p className={styles.info}>
                            <span>(+23)</span> than last week
                        </p>
                        <ul className={styles.userActivity__list}>
                            {userActivity.map((item) => (
                                <div className={styles.userActivity__list_item}>
                                    <div className={styles.top}>
                                        <div>
                                            <item.icon color="white" />
                                        </div>
                                        <p>{item.label}</p>
                                    </div>
                                    <p className={styles.amount}>
                                        {item.amount}
                                    </p>
                                    <LinearProgress
                                        variant="determinate"
                                        value={item.progress}
                                    />
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
