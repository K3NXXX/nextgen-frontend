import { FaFacebook, FaApple, FaGoogle } from 'react-icons/fa'
import { OAuthStrategy } from '@clerk/types'
import { useSignIn } from '@clerk/nextjs'
import styles from  "./AuthWayButtons.module.scss"

export function AuthWayButtons() {
	const { signIn } = useSignIn()

	const signInWith = (strategy: OAuthStrategy) => {
        return signIn?.authenticateWithRedirect({
            strategy,
            redirectUrl: '/sso-callback',
            redirectUrlComplete: '/',
        })
    }
	return  <div className={styles.register_ways}>
	<div
		onClick={() => signInWith('oauth_facebook')}
		className={styles.register_ways_items}
	>
		<FaFacebook color="white" size={25} />
	</div>
	<div  onClick={() => signInWith('oauth_apple')} className={styles.register_ways_items}>
		<FaApple color="white" size={25} />
	</div>
	<div
		onClick={() => signInWith('oauth_google')}
		className={styles.register_ways_items}
	>
		<FaGoogle color="white" size={25} />
	</div>
</div>
}
