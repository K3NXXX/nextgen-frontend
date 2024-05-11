import { PAGES } from '@/constants/pages-url.constants'
import { authHeaderMenu } from '@/lists/auth/auth.header.menu'
import { IAuthHeaderMenu } from '@/lists/auth/types'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo.svg'
import styles from './Auth.module.scss'
import { HeaderItem } from './header-item/HeaderItem'

export function AuthHeader() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Link href={PAGES.HOME}>
                    <Image width={140} height={25} alt="logo" src={logo} />
                </Link>
                <div className={styles.navigation}>
                    {authHeaderMenu.map((link: IAuthHeaderMenu) => (
                        <HeaderItem key={link.id} link={link} />
                    ))}
                </div>
            </header>
        </div>
    )
}
