import Image from 'next/image'
import logo from '../../../public/logo.svg'
import styles from './Auth.module.scss'
import Link from 'next/link'
import { PAGES } from '@/constants/pages-url.constants'
import { authHeaderMenu } from '@/lists/auth/auth.header.menu'
import { HeaderItem } from './header-item/HeaderItem'
import { IAuthHeaderMenu } from '@/lists/auth/types'

export function AuthHeader() {
    return (
        <header className={styles.header}>
			<Link href={PAGES.HOME}>
            	<Image width={140} height={25} alt="logo" src={logo} />
			</Link>
            <div className={styles.navigation}>
                {authHeaderMenu.map((link: IAuthHeaderMenu) => (
                    <HeaderItem key={link.id} link = {link}/>
                ))}

			</div>
        </header>
    )
}
