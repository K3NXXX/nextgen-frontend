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
import styles from './LoginForm.module.scss'

export function LoginForm() {
    const [successfulCreation, setSuccessfulCreation] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const [secondFactor, setSecondFactor] = useState(false)
    const [error, setError] = useState('')
    const { signIn, setActive } = useSignIn()
    const { replace } = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IRegisterForm>({ reValidateMode: 'onSubmit' })

    const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
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
    }

    // Send the password reset code to the user's email
    async function forgotPassword(e: React.FormEvent) {
        e.preventDefault()
        await signIn
            ?.create({
                strategy: 'reset_password_email_code',
                identifier: 'xxvolodyax7@gmail.com',
            })
            .then((_) => {
                setSuccessfulCreation(true)
            })
            .catch((err) => {
                console.error('error', err.errors[0].longMessage)
            })
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <p className={styles.register}>Log in with</p>
                <div className={styles.register_ways}>
                    <div className={styles.register_ways_items}>
                        <FaFacebook color="white" size={25} />
                    </div>
                    <div className={styles.register_ways_items}>
                        <FaApple color="white" size={25} />
                    </div>
                    <div className={styles.register_ways_items}>
                        <FaGoogle color="white" size={25} />
                    </div>
                </div>
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
                <p onClick={forgotPassword} className={styles.forgotPassword}>
                    <Link href={''}>Forgot your password?</Link>
                </p>
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

            {!successfulCreation && (
                <>
                    <label htmlFor="email">
                        Please provide your email address
                    </label>
                    <input
                        type="email"
                        placeholder="e.g john@doe.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <button>Send password reset code</button>
                    {error && <p>{error}</p>}
                </>
            )}

            {successfulCreation && (
                <div className={styles.forgotPassword__wrapper}>
                    <form>
                        <label htmlFor="password">
                            Enter your new password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <label htmlFor="password">
                            Enter the password reset code that was sent to your
                            email
                        </label>
                        <input
                            type="text"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />

                        <button>Reset</button>
                        {error && <p>{error}</p>}
                    </form>
                </div>
            )}
        </>
    )
}
