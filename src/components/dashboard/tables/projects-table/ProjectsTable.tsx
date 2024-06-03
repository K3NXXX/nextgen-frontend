import { projects } from '@/lists/dashboard/main/projects.items'
import { LinearProgress } from '@mui/material'
import { BsThreeDotsVertical } from 'react-icons/bs'
import styles from './ProjectsTable.module.scss'

export function ProjectsTable() {
    return (
        <div className={styles.root}>
            <div className={styles.projects}>
                <div className={styles.projects__top}>
                    <div>
                        <h6 className={styles.projects__title}>
                            Projects Table
                        </h6>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.top__row}>
                        <div className={styles.row__left}>
                            <p>Author</p>
                        </div>
                        <div className={styles.row__right}>
                            <p>Budget</p>
                            <p>Status</p>
                            <p>Completion</p>
                            <p>Action</p>
                        </div>
                    </div>
                    <ul className={styles.projects__list}>
                        {projects.map((item) => (
                            <div key={item.id} className={styles.row}>
                                <div className={styles.row__left}>
                                    <div>
                                        <item.icon color="green" size={25} />
                                        <div className={styles.info}>
                                            <p className={styles.name}>
                                                {item.label}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.row__right}>
                                    <p className={styles.budget}>
                                        {item.budget}
                                    </p>
                                    <p className={styles.status}>
                                        {item.status}
                                    </p>
                                    <div className={styles.completion__wrapper}>
                                        <p className={styles.completion}>
                                            {item.progress}%
                                        </p>
                                        <LinearProgress
                                            className={styles.progress}
                                            variant="determinate"
                                            value={item.progress}
                                        />
                                    </div>
                                    <div className={styles.dots__wrapper}>
                                        <BsThreeDotsVertical
                                            className={styles.dots}
                                            size={20}
                                            color="rgb(160, 174, 192)"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
