import type { PropsWithChildren } from 'react'

import { AuthHeader } from '@/components/auth/AuthHeader'
import styles from '../../components/auth/Auth.module.scss'

export default function AuthLayout({ children }: PropsWithChildren<unknown>) {
    return (
        <div className={styles.root}>
            <AuthHeader />
            {children}
        </div>
    )
}
