import { ILoginForm } from '@/types/auth.types'
import { FieldErrors } from 'react-hook-form'
import { toast } from 'react-toastify'
import styles from './LoginErrors.module.scss'

interface LoginErrorsProps {
    errors: FieldErrors<ILoginForm>
}

export function LoginErrors({ errors }: LoginErrorsProps) {
    return (
        <div className={styles.errors}>
            {errors.email?.message &&
                toast.error(errors.email.message, {
                    toastId: '',
                })}
            {errors.password?.message &&
                toast.error(errors.password.message, {
                    toastId: '',
                })}
        </div>
    )
}
