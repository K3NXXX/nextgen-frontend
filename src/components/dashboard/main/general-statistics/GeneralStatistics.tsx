import { generalStatistics } from '@/lists/dashboard/main/general.statistics.items'
import styles from './GeneralStatistics.module.scss'

export function GeneralStatistics() {
    return (
        <div className={styles.root}>
            <ul className={styles.statistics__list}>
                {generalStatistics.map((item) => (
                    <div className={styles.statistics__list_item}>
                        <div key={item.id} className={styles.left}>
                            <p className={styles.label}>{item.label}</p>
                            <p className={styles.amount}>{item.amount}</p>
                        </div>
                        <div className={styles.right}>
                            <div>
                                <item.icon size={22.5} color="white" />
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}
