import { Switch } from '@mui/material'
import Image from 'next/image'
import project1 from "@/../public/dashboard-page/profile/project1.png"
import project2 from "@/../public/dashboard-page/profile/project2.png"
import project3 from "@/../public/dashboard-page/profile/project3.png"
import styles from './ProfileSettings.module.scss'

export function ProfileSettings() {
    return (
        <div className={styles.root}>
            <div className={styles.settings}>
                <h6>Platform Settings</h6>
                <div className={styles.content}>
                    <p className={styles.account}>Account</p>
                    <div className={styles.settings__wrapper}>
                        <div>
                            <Switch />
                            <p>Email me when someone follows me</p>
                        </div>
                        <div>
                            <Switch />
                            <p>Email me when someone answers to me</p>
                        </div>
                        <div>
                            <Switch />
                            <p>Email me when someone mentions me</p>
                        </div>
                    </div>
                    <p className={styles.application}>APPLICATION</p>
					<div className={styles.settings__wrapper}>
                        <div>
                            <Switch />
                            <p>New launches and projects</p>
                        </div>
                        <div>
                            <Switch />
                            <p>Monthly product updates</p>
                        </div>
                        <div>
                            <Switch />
                            <p>Subscribe to newsletter</p>
                        </div>
					
                    </div>
                </div>
            </div>
			<div className={styles.projects}>
				<h6>Projects</h6>
				<p className={styles.descr}>Architects design houses</p>
				<div className={styles.content}>
					<div className={styles.project}>
						<Image src={project1} alt='project'/>
						<p className={styles.project__number}>Project #1</p>
						<p className={styles.project__name}>Modern</p>
						<p className={styles.project__descr}>As Uber works through a huge amount of internal
						management turmoil.</p>
						<button className={styles.viewAll}>View all</button>
					</div>
					<div className={styles.project}>
						<Image src={project2} alt='project'/>
						<p className={styles.project__number}>Project #2</p>
						<p className={styles.project__name}>Scandinavian</p>
						<p className={styles.project__descr}>Music is something that every person has his or her own
						specific opinion about.</p>
						<button className={styles.viewAll}>View all</button>
					</div>
					<div className={styles.project}>
						<Image src={project3} alt='project'/>
						<p className={styles.project__number}>Project #3</p>
						<p className={styles.project__name}>Minimalist</p>
						<p className={styles.project__descr}>Different people have different taste, and various
						types of music.</p>
						<button className={styles.viewAll}>View all</button>
					</div>
				</div>
			</div>
        </div>
    )
}
