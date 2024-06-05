import card1 from '@/../public/dashboard-page/billing/card1.png'
import mastercard from '@/../public/dashboard-page/billing/mastercard.svg'
import visa from '@/../public/dashboard-page/billing/visa.svg'
import Image from 'next/image'
import { FaFileAlt } from 'react-icons/fa'
import { HiPencil } from 'react-icons/hi2'
import styles from './Cards.module.scss'


export function Cards() {
    return (
        <div className={styles.root}>
            <div className={styles.cards}>
                <div className={styles.cards__top}>
                    <Image src={card1} alt="credit cart" />
                    <Image src={card1} alt="credit cart" />
                </div>
                <div className={styles.payment}>
                    <div className={styles.payment__top}>
                        <h6 className={styles.title}>Payment Method</h6>
                        <div>
                            <button className={styles.addCard}>
                                Add new card
                            </button>
                        </div>
                    </div>
                    <div className={styles.payment__content}>
                        <div className={styles.card__info}>
                            <div className={styles.left}>
                                <Image src={mastercard} alt="master card" />
                                <p>7812 2139 0823 XXXX</p>
                            </div>
                            <div className={styles.right}>
                                <HiPencil
                                    className={styles.edit}
                                    color="white"
                                />
                            </div>
                        </div>
                        <div className={styles.card__info}>
                            <div className={styles.left}>
                                <Image src={visa} alt="master card" />
                                <p>7812 2139 0823 XXXX</p>
                            </div>
                            <div className={styles.right}>
                                <HiPencil
                                    className={styles.edit}
                                    color="white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.invoices}>
                <div className={styles.invoices__top}>
                    <h6 className={styles.title}>Invoices</h6>
                    <div>
                        <button className={styles.viewAll}>view all</button>
                    </div>
                </div>
                <div className={styles.invoices__content}>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <p>March, 01, 2024</p>
                            <span>#MS-415646</span>
                        </div>
                        <div className={styles.right}>
                            <p className={styles.amount}>$250</p>
                            <div className={styles.pdf}>
                                <FaFileAlt color="white" />
                                <span>PDF</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <p>March, 01, 2024</p>
                            <span>#MS-415646</span>
                        </div>
                        <div className={styles.right}>
                            <p className={styles.amount}>$250</p>
                            <div className={styles.pdf}>
                                <FaFileAlt color="white" />
                                <span>PDF</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <p>March, 01, 2024</p>
                            <span>#MS-415646</span>
                        </div>
                        <div className={styles.right}>
                            <p className={styles.amount}>$250</p>
                            <div className={styles.pdf}>
                                <FaFileAlt color="white" />
                                <span>PDF</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <p>March, 01, 2024</p>
                            <span>#MS-415646</span>
                        </div>
                        <div className={styles.right}>
                            <p className={styles.amount}>$250</p>
                            <div className={styles.pdf}>
                                <FaFileAlt color="white" />
                                <span>PDF</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <p>March, 01, 2024</p>
                            <span>#MS-415646</span>
                        </div>
                        <div className={styles.right}>
                            <p className={styles.amount}>$250</p>
                            <div className={styles.pdf}>
                                <FaFileAlt color="white" />
                                <span>PDF</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
