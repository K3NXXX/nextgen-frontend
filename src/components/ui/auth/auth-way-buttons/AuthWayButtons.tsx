import { PAGES } from '@/constants/pages-url.constants'
import { useSignIn } from '@clerk/nextjs'
import { OAuthStrategy } from '@clerk/types'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'
import styles from './AuthWayButtons.module.scss'

export function AuthWayButtons() {
    const { signIn } = useSignIn()

    const signInWith = async (strategy: OAuthStrategy) => {
        try {
            await signIn?.authenticateWithRedirect({
                strategy,
                redirectUrl: '/sso-callback',
                redirectUrlComplete: PAGES.DASHBOARD,
            })
        } catch (error) {
            console.log('Socials sign in error: ', JSON.stringify(error))
        }
    }
    return (
        <div className={styles.register_ways}>
            <div
                onClick={() => signInWith('oauth_facebook')}
                className={styles.register_ways_items}
            >
                <FaFacebook color="white" size={25} />
            </div>
            <div
                onClick={() => signInWith('oauth_apple')}
                className={styles.register_ways_items}
            >
                <FaApple color="white" size={25} />
            </div>
            <div
                onClick={() => signInWith('oauth_google')}
                className={styles.register_ways_items}
            >
                <FaGoogle color="white" size={25} />
            </div>
        </div>
    )
}
