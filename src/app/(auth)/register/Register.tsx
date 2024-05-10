import styles from './Register.module.scss'
import { LeftPart } from '@/components/auth/register/left-part/LeftPart'
import { RightPart } from '@/components/auth/register/right-part/RightPart'
import { auth } from '@clerk/nextjs/server'

export default function Register() {
    
    return (
        <div className={styles.root}>
            <LeftPart/>
            <RightPart/>
        </div>
    )
}
