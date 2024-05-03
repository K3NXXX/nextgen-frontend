import styles from './Login.module.scss'
import { LeftPart } from '@/components/auth/login/left-part/LeftPart'
import { RightPart } from '@/components/auth/login/right-part/RightPart'

export default function Login() {
    return (
        <div className={styles.root}>
            <LeftPart/>
            <RightPart/>
        </div>
    )
}
