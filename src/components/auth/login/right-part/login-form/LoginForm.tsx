'use client'
import { AuthWayButtons } from '@/components/ui/auth/auth-way-buttons/AuthWayButtons'
import { LoginErrors } from '@/components/ui/auth/login-errors/LoginErrors'
import LoginFormSkeleton from '@/components/ui/skeletons/LoginFormSkeleton'
import { PAGES } from '@/constants/pages-url.constants'
import type { ILoginForm } from '@/types/auth.types'
import { useSignIn } from '@clerk/nextjs'
import { Switch } from '@mui/material'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { ForgotPasswordForm } from '../forgot-password-form/ForgotPasswordForm'
import styles from './LoginForm.module.scss'

export function LoginForm() {
    const [clickForgotPassword, setClickForgotPassword] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const { signIn, isLoaded, setActive } = useSignIn()
    const { replace } = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ILoginForm>({ reValidateMode: 'onSubmit' })

    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        try {
            const result = await signIn?.create({
                password: data.password,
                identifier: data.email,
            })
            if (result?.status === 'complete') {
                if (setActive) {
                    await setActive({ session: result.createdSessionId })
                    toast.success('Login was successful!')
                    replace(PAGES.HOME)
                    reset()
                }
            }
        } catch (error: any) {
            if (error.errors[0]?.code === 'form_identifier_not_found') {
                toast.error('Incorrect email or password!')
            }
            console.log('log in submit error: ', JSON.stringify(error))
        }
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    if (!isLoaded) return <LoginFormSkeleton />

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <p className={styles.register}>Log in with</p>
                <AuthWayButtons />
                <p className={styles.or}>or</p>
                <div className={styles.input_row}>
                    <label>Email</label>
                    <input
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Incorrect email',
                            },
                            maxLength: {
                                value: 100,
                                message: 'Email requires max 100 characters',
                            },
                        })}
                        type="text"
                        placeholder="Your email address"
                    />
                </div>
                <div className={styles.input_row}>
                    <label>Password</label>
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
                            {...register('password', {
                                required: true,
                                minLength: {
                                    value: 10,
                                    message:
                                        'Password requires min 10 characters',
                                },
                                pattern: {
                                    value: /\d/,
                                    message:
                                        'Password requires at least one digit',
                                },
                            })}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Your email address"
                        />
                    </div>
                </div>
                <div className={styles.toggle}>
                    <Switch />
                    <p>Remember me</p>
                </div>
                <div className={styles.button__wrapper}>
                    <button type="submit" className={styles.submitButton}>
                        Log in
                    </button>
                </div>
                <p className={styles.haveAccout}>
                    Don't have an account?{' '}
                    <Link href={PAGES.REGISTER}>Sign up</Link>
                </p>
                <button
                    onClick={() => setClickForgotPassword(!clickForgotPassword)}
                    className={styles.forgotPassword}
                >
                    Forgot your password?
                </button>
                <LoginErrors errors={errors} />
            </form>
            {clickForgotPassword && (
                <ForgotPasswordForm
                    setClickForgotPassword={setClickForgotPassword}
                    clickForgotPassword={clickForgotPassword}
                />
            )}
        </>
    )
}
