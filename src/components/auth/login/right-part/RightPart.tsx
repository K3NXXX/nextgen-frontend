import { LoginForm } from './login-form/LoginForm'
import styles from './RightPart.module.scss'

export function RightPart() {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <p className={styles.welcome}>Welcome back!</p>
                    <p className={styles.text}>
                        Use this awesome form to log in to your account.
                    </p>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}
