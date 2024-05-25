'use client'
import { CircularProgress } from '@mui/material'
import { MoveRight } from 'lucide-react'
import styles from './SecondRow.module.scss'

export function SecondRow() {
    return (
        <div className={styles.root}>
            <div className={styles.ai__wrapper}>
                <p className={styles.welcomeBack}>Welcome back,</p>
                <p className={styles.user__name}>Mark Johnson</p>
                <p className={styles.gladToSee}>
                    Glad to see you again!
                    <br /> Ask me anything.
                </p>
                <div className={styles.record}>
                    <p>Tap to record</p>
                    <MoveRight color="white" />
                </div>
            </div>
            <div className={styles.satisfaction}>
                <p className={styles.rate}>Satisfaction Rate</p>
                <p className={styles.allProjects}>From all projects</p>
                <div className={styles.chart}>
                    <CircularProgress   className={styles.progress} variant="determinate" 	  value={30} size={195} color='primary' />
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
        </div>
    )
}
