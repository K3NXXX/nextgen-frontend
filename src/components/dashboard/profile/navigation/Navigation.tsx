import avatar from '@/../public/dashboard-page/profile/avatar.png'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import styles from './Navigation.module.scss'
import { NavigationList } from './NavigationList'

export async function Navigation() {
    const user = await currentUser()
    return (
        <div className={styles.root}>
            <div className={styles.left}>
                <div className={styles.avatar}>
                    <Image src={avatar} alt="avatar" />
                </div>
                <div className={styles.userInfo}>
                    <p className={styles.name}>{user?.fullName}</p>
                    <p className={styles.email}>
                        {user?.primaryEmailAddress?.emailAddress}
                    </p>
                </div>
            </div>
            <nav className={styles.right}>
                <NavigationList />
            </nav>
        </div>
    )
}
