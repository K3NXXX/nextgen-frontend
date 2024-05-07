import { IForgotPasswordForm } from '@/types/auth.types'
import { useSignIn } from '@clerk/nextjs'
import { Lock } from 'lucide-react'
import { SetStateAction, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useOnClickOutside } from 'usehooks-ts'
import { ResetPasswordForm } from '../reset-password-form/ResetPasswordForm'
import styles from './ForgotPasswordForm.module.scss'

interface IForgotPasswordFormProps {
    clickForgotPassword: boolean
    setClickForgotPassword: React.Dispatch<SetStateAction<boolean>>
}
export function ForgotPasswordForm({
    clickForgotPassword,
    setClickForgotPassword
}: IForgotPasswordFormProps) {
    const { signIn } = useSignIn()
    const [successfulCreation, setSuccessfulCreation] = useState(false)
    const forgotPasswordFormRef = useRef<HTMLFormElement>(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForgotPasswordForm>({ reValidateMode: 'onSubmit' })

    const forgotPassword: SubmitHandler<IForgotPasswordForm> = async (data) => {
        await signIn
            ?.create({
                strategy: 'reset_password_email_code',
                identifier: data.email,
            })
            .then((_) => {
                setSuccessfulCreation(true)
                toast.success("We sent you a reset code to your email!")
            })
            .catch((err) => {
                console.error('error', err.errors[0].longMessage)
            })
    }

    const handleClickOutside = () => {
        setClickForgotPassword(false)
    }

    useOnClickOutside(forgotPasswordFormRef, handleClickOutside)

    return (
        <>
            {clickForgotPassword && (
                <div className={styles.form__wrapper}>
                    {!successfulCreation && (
                        <form
                            ref={forgotPasswordFormRef}
                            onSubmit={handleSubmit(forgotPassword)}
                        >
                            <Lock size={30} color="white" />
                            <label htmlFor="email">Forgot password</label>
                            <p>
                                Provide your email address to reset your
                                password
                            </p>
                            <input
                                {...register('email', {
                                    required: true,
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Incorrect email',
                                    },
                                })}
                                placeholder="e.g john@doe.com"
                            />

                            <button className={styles.onSubmitButton}>
                                Send password reset code
                            </button>
                            <button
                                onClick={handleClickOutside}
                                className={styles.goBackButton}
                            >
                                Go back
                            </button>
                        </form>
                    )}

                    {successfulCreation  &&  <ResetPasswordForm 
                    setSuccessfulCreation= {setSuccessfulCreation} />}
                    <div className={styles.errors}>
                        {errors.email?.message &&
                            toast.error(errors.email.message, {
                                toastId: '',
                            })}
                    </div>
                </div>
            )}
        </>
    )
}
