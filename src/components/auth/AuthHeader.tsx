import { authHeaderMenu } from '@/lists/auth/auth.header.menu'
import { IAuthHeaderMenu } from '@/lists/auth/types'
import { Logo } from '../ui/logo/Logo'
import styles from './Auth.module.scss'
import { HeaderItem } from './header-item/HeaderItem'

export function AuthHeader() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <Logo />
                <div className={styles.navigation}>
                    {authHeaderMenu.map((link: IAuthHeaderMenu) => (
                        <HeaderItem key={link.id} link={link} />
                    ))}
                </div>
            </header>
        </div>
    )
}
