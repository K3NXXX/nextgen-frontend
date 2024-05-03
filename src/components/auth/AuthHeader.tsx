import Image from 'next/image'
import logo from '../../../public/Logo.svg'
import styles from './Auth.module.scss'
import Link from 'next/link'
import { PAGES } from '@/constants/pages-url.constants'

export function AuthHeader() {
    return (
        <header className={styles.header}>
			<Link href={PAGES.HOME}>
            	<Image alt="logo" src={logo} />
			</Link>
            <div className={styles.navigation}>

			</div>
        </header>
    )
}
