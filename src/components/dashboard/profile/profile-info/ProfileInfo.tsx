import info from '@/../public/dashboard-page/profile/info.png'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io5'
import styles from './ProfileInfo.module.scss'
import Link from 'next/link'
import { currentUser } from '@clerk/nextjs/server'

export async function ProfileInfo() {
    const user = await currentUser()
    return (
        <div className={styles.root}>
            <div className={styles.welcomeBack}>
                <div className={styles.top}>
                    <p>Welcome back!</p>
                    <span>Nice to see you, {user?.fullName}!</span>
                </div>
                <div className={styles.bottom}>
                    <Link href="https://app.usechat.ai/widget/689b60c6-3e5d-4d1c-87ae-f0051da07cd9">
                        Tap to record
                    </Link>
                    <MoveRight color="white" size={20} />
                </div>
            </div>
            <div className={styles.info}>
                <Image src={info} alt="info" />
            </div>
            <div className={styles.profileInfo}>
                <h6>Profile Informations</h6>
                <p className={styles.shortInfo}>
                    Hi, I’m Mark Johnson, Decisions: If you can’t decide, the
                    answer is no. If two equally difficult paths, choose the one
                    more painful in the short term (pain avoidance is creating
                    an illusion of equality).
                </p>
                <div className={styles.content}>
                    <div>
                        <p>Full Name: </p>
                        <span>{user?.fullName}</span>
                    </div>
                    <div>
                        <p>Mobile: </p>
                        <span>(44) 123 1234 123</span>
                    </div>
                    <div>
                        <p>Location: </p>
                        <span>United States3</span>
                    </div>
                    <div>
                        <p>Social Media: </p>
                        <div className={styles.socials}>
                            <FaFacebook color="white" size={17} />
                            <FaTwitter color="white" size={17} />
                            <IoLogoInstagram color="white" size={17} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
