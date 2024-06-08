import { CircularProgress } from '@mui/material'
import { MoveRight } from 'lucide-react'
import { IoIosHappy } from 'react-icons/io'
import { RxDotsHorizontal } from 'react-icons/rx'
import styles from './SecondRow.module.scss'
import Image from 'next/image'
import satisfactionProgress from "../../../../../public/dashboard-page/main/satisfaction-progress.webp"
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'

export async function SecondRow() {
    const user = await currentUser()
    
    return (
        <div className={styles.root}>
            <div className={styles.ai__wrapper}>
                <p className={styles.welcomeBack}>Welcome back,</p>
                <p className={styles.user__name}>{user?.fullName}</p>
                <p className={styles.gladToSee}>
                    Glad to see you again!
                    <br /> Ask me anything.
                </p>
                <div className={styles.record}>
                    <Link href="https://app.usechat.ai/widget/689b60c6-3e5d-4d1c-87ae-f0051da07cd9">Tap to record</Link>
                    <MoveRight color="white" />
                </div>
            </div>
            <div className={styles.satisfaction}>
                <p className={styles.rate}>Satisfaction Rate</p>
                <p className={styles.allProjects}>From all projects</p>
                <div className={styles.chart}>
                    <div className={styles.chart__wrapper}>
                        <Image className={styles.progress} src={satisfactionProgress} alt='satisfaction progress'/>
                        <div>
                            <IoIosHappy size={30} color="white" />
                        </div>
                    </div>
                    <div className={styles.chart__stats}>
                        <p className={styles.min}>0%</p>
                        <div className={styles.total__wrapper}>
                            <p className={styles.total}>95%</p>
                            <p className={styles.additional_info}>
                                Based on likes
                            </p>
                        </div>
                        <p className={styles.max}>100%</p>
                    </div>
                </div>
            </div>
            <div className={styles.referral}>
                <div className={styles.referral__top}>
                    <p>Referral Tracking</p>
                    <div>
                        <RxDotsHorizontal size={25} color="#0075ff" />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={styles.invited}>
                            <p>Invited</p>
                            <span>145 people</span>
                        </div>
                        <div className={styles.bonus}>
                            <p>Bonus</p>
                            <span>1,465</span>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.right__wrapper}>
                            <CircularProgress
                                className={styles.progress}
                                variant="determinate"
                                value={90}
                                size={210}
                                color="primary"
                            />
                            <div className={styles.info}>
                                <p>Safety</p>
                                <span>9.3</span>
                                <p>Total Score</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
