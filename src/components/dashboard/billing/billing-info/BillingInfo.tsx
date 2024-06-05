import { BsArrowUpCircle } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'
import { HiPencil } from 'react-icons/hi2'
import { IoCalendarSharp } from 'react-icons/io5'
import styles from './BillingInfo.module.scss'

export function BillingInfo() {
    return (
        <div className={styles.root}>
            <div className={styles.billing__info}>
                <h6 className={styles.title}>Billing Information</h6>
                <div className={styles.wrapper}>
                    <div className={styles.info__block}>
                        <div className={styles.info__block_top}>
                            <p className={styles.name}>Oliver Liam</p>
                            <div className={styles.options}>
                                <div className={styles.delete}>
                                    <FaTrash color="rgb(245, 60, 43)" />
                                    <p>Delete</p>
                                </div>
                                <div className={styles.edit}>
                                    <HiPencil color="white" />
                                    <p>Edit</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.info__block_content}>
                            <div className={styles.row}>
                                <div>
                                    <p>Company Name: </p>
                                    <p>Viking Burrito</p>
                                </div>
                                <div>
                                    <p>Email Address: </p>
                                    <p>oliver@burrito.com</p>
                                </div>
                                <div>
                                    <p>VAT Number: </p>
                                    <p>FRB1235476</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.info__block}>
                        <div className={styles.info__block_top}>
                            <p className={styles.name}>Oliver Liam</p>
                            <div className={styles.options}>
                                <div className={styles.delete}>
                                    <FaTrash color="rgb(245, 60, 43)" />
                                    <p>Delete</p>
                                </div>
                                <div className={styles.edit}>
                                    <HiPencil color="white" />
                                    <p>Edit</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.info__block_content}>
                            <div className={styles.row}>
                                <div>
                                    <p>Company Name: </p>
                                    <p>Viking Burrito</p>
                                </div>
                                <div>
                                    <p>Email Address: </p>
                                    <p>oliver@burrito.com</p>
                                </div>
                                <div>
                                    <p>VAT Number: </p>
                                    <p>FRB1235476</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.info__block}>
                        <div className={styles.info__block_top}>
                            <p className={styles.name}>Oliver Liam</p>
                            <div className={styles.options}>
                                <div className={styles.delete}>
                                    <FaTrash color="rgb(245, 60, 43)" />
                                    <p>Delete</p>
                                </div>
                                <div className={styles.edit}>
                                    <HiPencil color="white" />
                                    <p>Edit</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.info__block_content}>
                            <div className={styles.row}>
                                <div>
                                    <p>Company Name: </p>
                                    <p>Viking Burrito</p>
                                </div>
                                <div>
                                    <p>Email Address: </p>
                                    <p>oliver@burrito.com</p>
                                </div>
                                <div>
                                    <p>VAT Number: </p>
                                    <p>FRB1235476</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.transactions}>
                <div className={styles.transactions__top}>
                    <p>Your Transactions</p>
                    <div className={styles.date}>
                        <IoCalendarSharp color="white" />
                        <span>23 - 30 March 2020</span>
                    </div>
                </div>
                <div className={styles.transaction__content}>
                    <p className={styles.newest}>Newest</p>
                    <div className={styles.row__wrapper}>
                        <div className={styles.row}>
                            <div className={styles.left}>
                                <BsArrowUpCircle
                                    color="rgb(1, 181, 116)"
                                    size={35}
                                />
                                <div className={styles.info}>
                                    <p className={styles.name}>Netflix</p>
                                    <p className={styles.date}>
                                        27 March 2020, at 12:30 PM
                                    </p>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <p className={styles.amount}>+$2500</p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.left}>
                                <BsArrowUpCircle
                                    color="rgb(1, 181, 116)"
                                    size={35}
                                />
                                <div className={styles.info}>
                                    <p className={styles.name}>Netflix</p>
                                    <p className={styles.date}>
                                        27 March 2020, at 12:30 PM
                                    </p>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <p className={styles.amount}>+$2500</p>
                            </div>
                        </div>
                    </div>
					<p className={styles.newest}>Yesterday</p>
					<div className={styles.row__wrapper}>
                        <div className={styles.row}>
                            <div className={styles.left}>
                                <BsArrowUpCircle
                                    color="rgb(1, 181, 116)"
                                    size={35}
                                />
                                <div className={styles.info}>
                                    <p className={styles.name}>Netflix</p>
                                    <p className={styles.date}>
                                        27 March 2020, at 12:30 PM
                                    </p>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <p className={styles.amount}>+$2500</p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.left}>
                                <BsArrowUpCircle
                                    color="rgb(1, 181, 116)"
                                    size={35}
                                />
                                <div className={styles.info}>
                                    <p className={styles.name}>Netflix</p>
                                    <p className={styles.date}>
                                        27 March 2020, at 12:30 PM
                                    </p>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <p className={styles.amount}>+$2500</p>
                            </div>
                        </div>
						<div className={styles.row}>
                            <div className={styles.left}>
                                <BsArrowUpCircle
                                    color="rgb(1, 181, 116)"
                                    size={35}
                                />
                                <div className={styles.info}>
                                    <p className={styles.name}>Netflix</p>
                                    <p className={styles.date}>
                                        27 March 2020, at 12:30 PM
                                    </p>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <p className={styles.amount}>+$2500</p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.left}>
                                <BsArrowUpCircle
                                    color="rgb(1, 181, 116)"
                                    size={35}
                                />
                                <div className={styles.info}>
                                    <p className={styles.name}>Netflix</p>
                                    <p className={styles.date}>
                                        27 March 2020, at 12:30 PM
                                    </p>
                                </div>
                            </div>
                            <div className={styles.right}>
                                <p className={styles.amount}>+$2500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
