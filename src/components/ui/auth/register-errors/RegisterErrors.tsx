import { IRegisterForm } from '@/types/auth.types'
import { FieldErrors } from 'react-hook-form'
import { toast } from 'react-toastify'
import styles from './RegisterErrors.module.scss'

interface RegisterErrorsProps {
    errors: FieldErrors<IRegisterForm>
}

export function RegisterErrors({ errors }: RegisterErrorsProps) {
    return (
        <div className={styles.errors}>
            {errors.password?.message &&
                toast.error(errors.password.message, {
                    toastId: '',
                })}
            {errors.firstName?.message &&
                toast.error(errors.firstName.message, {
                    toastId: '',
                })}
            {errors.lastName?.message &&
                toast.error(errors.lastName.message, {
                    toastId: '',
                })}
            {errors.email?.message &&
                toast.error(errors.email.message, {
                    toastId: '',
                })}
        </div>
    )
}
