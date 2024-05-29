'use client'

import { userActivity } from '@/lists/dashboard/main/users.activity.items'
import { LinearProgress } from '@mui/material'
import { AxisConfig, LineChart } from '@mui/x-charts'
import { BarChart } from '@mui/x-charts/BarChart'
import styles from './ThirdRow.module.scss'
import { Colorswitch } from './abc'

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
                        sx={{
                            '.MuiAreaElement-root': {
                                fill: 'url(#custom_gradient_1)',
                            },
                            ".css-13vdo2f-MuiLineElement-root": {
                                strokeWidth: "4px",
                                
                            },
                            ".css-xglyfy-MuiLineElement-root": { //трабл в тому
                                strokeWidth: "4px",
                                fill: 'url(#custom_gradient_2)',
                            }
                        }}
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
                        yAxis={[
                            {
                         
                                data: [100, 200, 300, 400, 500, 600, 680],
                            },
                        ]}
                        series={[
                            {
                                showMark: false,
                                data: [
                                    0, 500, 300, 680, 400, 450, 530, 680, 505,
                                    600, 300, 530,
                                ],
                                area: true,
                                color:"#18adff"
                            },
                            {
                                data: [
                                    0, 300, 650, 300, 350, 400, 500, 550, 680,
                                    500, 200, 550,
                                ],
                                area: true,
                                showMark: false,
                                color: '#2cd9ff',
                            },
                        ]}
                        grid={{ horizontal: true }}
                    >
                        <Colorswitch />
                    </LineChart>
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
