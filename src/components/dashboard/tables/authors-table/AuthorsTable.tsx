import { authorsTablesItems } from '@/lists/dashboard/tables/authors.tables.items'
import Image from 'next/image'
import styles from './AuthorsTable.module.scss'

export function AuthorsTable() {
    return (
        <div className={styles.root}>
            <div className={styles.authors}>
                <div className={styles.authors__top}>
                    <div>
                        <h6 className={styles.authors__title}>Authors Table</h6>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.top__row}>
                        <div className={styles.row__left}>
                            <p>Author</p>
                        </div>
                        <div className={styles.row__right}>
                            <p>Function</p>
                            <p>Status</p>
                            <p>Employed</p>
                            <p>Action</p>
                        </div>
                    </div>
                    <ul className={styles.authors__list}>
                        {authorsTablesItems.map((item) => (
                            <div key={item.id} className={styles.row}>
                                <div className={styles.row__left}>
                                    <div>
                                        <Image src={item.avatar} alt="avatar" />
                                        <div className={styles.info}>
                                            <p className={styles.name}>
                                                {item.name}
                                            </p>
                                            <p className={styles.email}>
                                                {item.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.row__right}>
                                    <p className={styles.function}>
                                        {item.function}
                                    </p>
                                    <p className={styles.status}>
                                        {item.status}
                                    </p>
                                    <p className={styles.employed}>
                                        {item.employed}
                                    </p>
                                    <p className={styles.edit}>Edit</p>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
