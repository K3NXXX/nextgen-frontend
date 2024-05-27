import { orders } from '@/lists/dashboard/main/orders.items'
import { projects } from '@/lists/dashboard/main/projects.items'
import { LinearProgress } from '@mui/material'
import Image from 'next/image'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { RxDotsVertical } from 'react-icons/rx'
import styles from './FourthRow.module.scss'

export function FourthRow() {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.projects}>
                    <div className={styles.projects__top}>
                        <div>
                            <h6 className={styles.projects__title}>Projects</h6>
                            <p className={styles.info}>
                                <IoIosCheckmarkCircle
                                    color="#01B574"
                                    size={20}
                                />
                                <span>30 done</span> this month
                            </p>
                        </div>
                        <RxDotsVertical
                            className={styles.dots}
                            color="white"
                            size={20}
                        />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.top__row}>
                            <div className={styles.row__left}>
                                <p>Companies</p>
                            </div>
                            <div className={styles.row__right}>
                                <p>Members</p>
                                <p>Budget</p>
                                <p>Completion</p>
                            </div>
                        </div>
                        <ul className={styles.projects__list}>
                            {projects.map((item) => (
                                <div key={item.id} className={styles.row}>
                                    <div className={styles.row__left}>
                                        <div>
                                            <item.icon
                                                color="green"
                                                size={25}
                                            />
                                            <p>{item.label}</p>
                                        </div>
                                    </div>
                                    <div className={styles.row__right}>
                                        <Image
                                            src={item.members}
                                            alt="members"
                                        />
                                        <p className={styles.budget}>
                                            {item.budget}
                                        </p>
                                        <div>
                                            <p>{item.progress}%</p>
                                            <LinearProgress
                                                className={styles.progress}
                                                variant="determinate"
                                                value={item.progress}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.orders}>
                    <div className={styles.orders__top}>
                        <h6>Orders overview</h6>
                        <p>
                            <IoIosCheckmarkCircle color="#01B574" size={20} />
                            <span>+30%</span> this month
                        </p>
                    </div>
                    <ul className={styles.orders__list}>
                        {orders.map((item) => (
                            <div
                                key={item.id}
                                className={styles.orders__list_item}
                            >
                                <div className={styles.left}>
                                    <item.icon size={20} color="#0075FF" />
                                </div>
                                <div className={styles.right}>
                                    <p className={styles.title}>{item.label}</p>
                                    <p className={styles.date}>{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
