import { IAuthHeaderMenu } from '@/lists/auth/types'
import Link from 'next/link'
import styles from './HeaderItem.module.scss'

interface IHeaderItemProps {
    link: IAuthHeaderMenu
}
export function HeaderItem({ link }: IHeaderItemProps) {
    return (
        <Link href={link.url} className={styles.root}>
            <div className={styles.icon__wrapper}>
                <link.icon color="white" />
            </div>
            <p>{link.name}</p>
        </Link>
    )
}
