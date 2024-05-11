import { LeftPart } from '@/components/auth/register/left-part/LeftPart'
import { RightPart } from '@/components/auth/register/right-part/RightPart'
import styles from './Register.module.scss'

export default function Register() {
    return (
        <div className={styles.root}>
            <LeftPart />
            <RightPart />
        </div>
    )
}
