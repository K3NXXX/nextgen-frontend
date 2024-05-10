import { VerificationCode } from '@/components/ui/auth/verification-code/VerificationCode'
import { PAGES } from '@/constants/pages-url.constants'
import { IResetPasswordForm } from '@/types/auth.types'
import { useSignIn } from '@clerk/nextjs'
import { Eye, EyeOff, LockOpen } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { SetStateAction, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styles from './ResetPasswordForm.module.scss'

interface IResetPasswordFormProps {
    setSuccessfulCreation: React.Dispatch<SetStateAction<boolean>>
}
export function ResetPasswordForm({
    setSuccessfulCreation,
}: IResetPasswordFormProps) {
    const resetPasswordFormRef = useRef<HTMLFormElement>(null)
    const { signIn, setActive } = useSignIn()
    const [resetCode, setResetCode] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const { replace } = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IResetPasswordForm>({
        reValidateMode: 'onSubmit',
    })
    const handleGoBack = () => {
        setSuccessfulCreation(false)
    }

    const resetPassword: SubmitHandler<IResetPasswordForm> = async (data) => {
        await signIn
            ?.attemptFirstFactor({
                strategy: 'reset_password_email_code',
                code: resetCode,
                password: data.newPassword,
            })
            .then((result: any) => {
                if (result.status === 'complete') {
                    setActive({ session: result.createdSessionId })
                    replace(PAGES.HOME)
                    toast.success('Password was changed successfully!')
                    reset()
                } else {
                    console.log(result)
                }
            })
            .catch((error) => {
                if (error.errors[0]?.code === 'form_code_incorrect') {
                    toast.error('Invalid reset code!')
                }
                if (error.errors[0]?.code === 'verification_failed') {
                    toast.error(
                        'Too many failed attempts, try again to recieve a reset code'
                    )
                }
                console.error('reset password error', JSON.stringify(error))
            })
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <form
                ref={resetPasswordFormRef}
                className={styles.resetPasswordForm}
                onSubmit={handleSubmit(resetPassword)}
            >
                <LockOpen size={30} color="white" />
                <label htmlFor="password">New password</label>
                <p>Enter your new password</p>
                <div className={styles.password_wrapper}>
                    {showPassword ? (
                        <Eye
                            onClick={handleClickShowPassword}
                            className={styles.eye}
                            color="white"
                        />
                    ) : (
                        <EyeOff
                            onClick={handleClickShowPassword}
                            className={styles.eye}
                            color="white"
                        />
                    )}
                    <input
                        {...register('newPassword', {
                            required: true,
                            minLength: {
                                value: 10,
                                message: 'Password requires min 10 characters',
                            },
                            pattern: {
                                value: /\d/,
                                message: 'Password requires at least one digit',
                            },
                        })}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your new password"
                    />
                </div>
                <p>Enter the code that was sent to your email</p>
                <VerificationCode setResetCode={setResetCode} />
                <button className={styles.onSubmitButton}>
                    Reset password
                </button>
                <button onClick={handleGoBack} className={styles.goBackButton}>
                    Go back
                </button>
            </form>
            <div className={styles.errors}>
                {errors.newPassword?.message &&
                    toast.error(errors.newPassword.message, {
                        toastId: '',
                    })}
            </div>
        </>
    )
}
