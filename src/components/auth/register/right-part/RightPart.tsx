import styles from './RightPart.module.scss'
import { RegisterForm } from './register-form/RegisterForm'

export function RightPart() {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <p className={styles.welcome}>Welcome!</p>
                    <p className={styles.text}>
                        Use this awesome form to create new account for free.
                    </p>
                </div>
                <RegisterForm />
            </div>
        </div>
    )
}
