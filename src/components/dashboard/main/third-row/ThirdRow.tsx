'use client'

import { userActivity } from '@/lists/dashboard/main/users.activity.items'
import { AxisConfig, LineChart } from '@mui/x-charts'
import { BarChart } from '@mui/x-charts/BarChart'
import styles from './ThirdRow.module.scss'
import { LinearProgress } from '@mui/material'

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
                        yAxis={[{ data: [100, 200, 300, 400, 500, 600, 700] }]}
                        series={[
                            {
                                data: [
                                    0, 500, 300, 700, 100, 350, 480, 700, 435,
                                    520, 230, 530,
                                ],
                                area: true,
                                color: 'rgb(0, 117, 255)',
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
                                    categoryGapRatio: 0.8,
                                } as AxisConfig<'band'>,
                            ]}
                            series={[
                                {
                                    data: [
                                        254, 400, 560, 330, 400, 360, 140, 200,
                                        950,
                                    ],
                                },
                            ]}
                            width={650}
                            height={300}
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
                                            <item.icon color='white' />
                                        </div>
                                        <p>{item.label}</p>
                                    </div>
                                    <p className={styles.amount}>
                                        {item.amount}
                                    </p>
									<LinearProgress variant="determinate" value={item.progress} />
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
