import { LoginForm } from '../right-part/login-form/LoginForm'
import styles from './LeftPart.module.scss'

export function LeftPart() {
    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <p className={styles.text}>INSPIRED BY THE FUTURE:</p>
                <p className={styles.text_bold}>THE NEXTGEN DASHBOARD</p>
                <div className={styles.form__wrapper}>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
