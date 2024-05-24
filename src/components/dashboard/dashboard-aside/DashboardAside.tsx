import { Logo } from '@/components/ui/logo/Logo'
import Image from 'next/image'
import logoLine from '../../../../public/dashboard-page/Vector 6.png'
import styles from './DashboardAside.module.scss'

export function DashboardAside() {
    return (
        <aside className={styles.root}>
            <div className={styles.logo__wrapper}>
                <Logo />
                <Image width={220} alt="logo underline" src={logoLine} />
            </div>
        </aside>
    )
}
