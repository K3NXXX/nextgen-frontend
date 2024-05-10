import { IAuthHeaderMenu } from '@/lists/auth/types'
import Link from 'next/link'
import styles from './HeaderItem.module.scss'

interface IHeaderItemProps {
    link: IAuthHeaderMenu
}
export function HeaderItem({ link }: IHeaderItemProps) {
    return (
        <Link href={link.url} className={styles.root}>
            <link.icon color="white" />
            <p>{link.name}</p>
        </Link>
    )
}
