'use client'

import { userActivity } from '@/lists/dashboard/main/users.activity.items'
import { LinearProgress, createTheme } from '@mui/material'
import { AxisConfig, LineChart } from '@mui/x-charts'
import { BarChart } from '@mui/x-charts/BarChart'
import styles from './ThirdRow.module.scss'

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
                    <LineChart
                        className={styles.chart}
                        xAxis={[
                            {
                              
                                data: [
                                    'Jan',
                                    'Feb',
                                    'Mar',
                                    'Apr',
                                    'May',
                                    'Jun',
                                    'Jul',
                                    'Aug',
                                    'Sep',
                                    'Oct',
                                    'Nov',
                                    'Dec',
                                ],
                                scaleType: 'band',
                            },
                        ]}
                        yAxis={[{ 
                            colorMap: {
                                type: 'continuous',
                                color: ['rgb(0, 117, 255)', 'rgba(0, 117, 255, 0.4)'],
                            },
                            data: [100, 200, 300, 400, 500, 600, 700] }]}
                        series={[
                            {

                                showMark:false,
                                data: [
                                    0, 500, 300, 700, 400, 350, 480, 700, 435,
                                    520, 230, 530,
                                ],
                                area: true,
                                // color: 'rgb(0, 117, 255)',
                            },
                            // {
                            //     data: [0, 300, 700, 300, 300, 320, 700, 430, 436, 500, 200, 550],
                            // 	area: true,
                            // 	color: 'rgb(50, 160, 255)'
                            // },
                        ]}
                        width={884}
                        height={370}
                        grid={{ horizontal: true }}
                    />
                </div>
                <div className={styles.usersActivity}>
                    <div className={styles.chart}>
                        <BarChart
                            xAxis={[
                                {
                                    scaleType: 'band',
                                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                                    categoryGapRatio: 0.86,
                                } as AxisConfig<'band'>,
                            ]}
                            series={[
                                {
                                    data: [
                                        254, 300, 340, 410, 480, 210, 110, 160,
                                        320,
                                    ],
                                },
                            ]}
                            width={650}
                            height={250}
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
