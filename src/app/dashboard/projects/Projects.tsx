'use client'

import { useRef } from 'react'
import styles from './Projects.module.scss'
import { CiBookmarkPlus } from "react-icons/ci";

export function Projects() {
    const projectRef = useRef<HTMLDivElement | null>(null)
    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (projectRef.current) {
            projectRef.current.style.transition = ''
            const rect = projectRef.current.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const rotateX = (y / rect.height - 0.5) * 30
            const rotateY = (x / rect.width - 0.5) * -30
            projectRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) `
        }
    }

    const handleMouseLeave = () => {
        if (projectRef.current) {
            projectRef.current.style.transition = 'transform 0.3s ease'
            projectRef.current.style.transform =
                'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
        }
    }
	

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <h6 className={styles.title}>Your projects</h6>
                <div className={styles.content}>
					<div className={styles.addProject}>
						<p>Add new project</p>
						<CiBookmarkPlus color='white' size={50}  />
					</div>
                    <div className={styles.projects__list}>
                        <div
                            ref={projectRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className={styles.project}
                        >
                            <p className={styles.project__name}>
                                Create own website
                            </p>
                            <p className={styles.earning}>Earnings</p>
                            <p className={styles.earning__number}>$1 ,500</p>
                            <button className={styles.viewAll}>View all</button>
                        </div>
						
                    </div>
                </div>
            </div>
        </div>
    )
}
