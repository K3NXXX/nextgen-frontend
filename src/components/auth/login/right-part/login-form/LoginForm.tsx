'use client'
import { PAGES } from '@/constants/pages-url.constants'
import type { IRegisterForm } from '@/types/auth.types'
import { useSignIn } from '@clerk/nextjs'
import { Switch } from '@mui/material'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { ForgotPasswordForm } from '../forgot-password-form/ForgotPasswordForm'
import styles from './LoginForm.module.scss'
import { AuthWayButtons } from '@/components/ui/auth-way-buttons/AuthWayButtons'

export function LoginForm() {
    const { signIn, setActive } = useSignIn()
    const [clickForgotPassword, setClickForgotPassword] = useState(false)
    const { replace } = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IRegisterForm>({ reValidateMode: 'onSubmit' })

    const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
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
            if (error.errors[0]?.code === "form_identifier_not_found") {
                toast.error("Incorrect email or password!")
            }
           console.log("log in submit error: ", JSON.stringify(error))
        }
        
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <p className={styles.register}>Log in with</p>
                <AuthWayButtons/>
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
                <button type="submit" className={styles.submitButton}>
                    Log in
                </button>
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
                <div className={styles.errors}>
                    {errors.password?.message &&
                        toast.error(errors.password.message, {
                            toastId: 'passwordId',
                        })}
                    {errors.email?.message &&
                        toast.error(errors.email.message, {
                            toastId: 'emailId',
                        })}
                </div>
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
