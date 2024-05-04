'use client'
import { PAGES } from '@/constants/pages-url.constants'
import type { IRegisterForm } from '@/types/auth.types'
import { useSignUp } from '@clerk/nextjs'
import { Switch } from '@mui/material'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'
import { toast } from 'react-toastify'
import styles from './RegisterForm.module.scss'

export function RegisterForm() {
    const { isLoaded, signUp, setActive } = useSignUp()
    const [code, setCode] = useState('')
    const [pendingVerification, setPendingVerification] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const { replace } = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IRegisterForm>({ reValidateMode: 'onSubmit' })

    const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
        try {
            await signUp?.create({
                emailAddress: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
            })
            await signUp?.prepareEmailAddressVerification({
                strategy: 'email_code',
            })
            setPendingVerification(true)
        } catch (error) {
            console.log('Register onSubmit error: ', error)
        }
    }

    const onPressVerify = async (e: any) => {
        e.preventDefault()
        if (!isLoaded) {
            return
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification(
                {
                    code,
                }
            )
            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId })
                toast.success('Registration was successful!')
                replace(PAGES.HOME)
                reset()
            }
        } catch (error) {
            console.error(error)
        }
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <p className={styles.register}>Register with</p>
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
                    <label>First name</label>
                    <input
                        {...register('firstName', {
                            required: true,
                            minLength: {
                                value: 3,
                                message: 'First name requires min 3 characters',
                            },
                            maxLength: {
                                value: 50,
                                message:
                                    'First name requires max 50 characters',
                            },
                            pattern: {
                                value: /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+$/,
                                message:
                                    'Only letters are allowed in the first name',
                            },
                        })}
                        type="text"
                        placeholder="Your first name"
                    />
                </div>
                <div className={styles.input_row}>
                    <label>Last name</label>
                    <input
                        {...register('lastName', {
                            required: true,
                            minLength: {
                                value: 3,
                                message: 'Last name requires min 3 characters',
                            },
                            maxLength: {
                                value: 50,
                                message: 'Last name requires max 50 characters',
                            },
                            pattern: {
                                value: /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ]+$/,
                                message:
                                    'Only letters are allowed in the last name',
                            },
                        })}
                        type="text"
                        placeholder="Your last name"
                    />
                </div>
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
                            placeholder="Your password"
                        />
                    </div>
                </div>
                <div className={styles.toggle}>
                    <Switch />
                    <p>Remember me</p>
                </div>
                <button type="submit" className={styles.submitButton}>
                    Sign up
                </button>
                <p className={styles.haveAccout}>
                    Already have an account?{' '}
                    <Link href={PAGES.LOGIN}>Sign in</Link>
                </p>
                <div className={styles.errors}>
                    {errors.password?.message &&
                        toast.error(errors.password.message, {
                            toastId: 'passwordId',
                        })}
                    {errors.firstName?.message &&
                        toast.error(errors.firstName.message, {
                            toastId: 'nameId',
                        })}
                    {errors.lastName?.message &&
                        toast.error(errors.lastName.message, {
                            toastId: 'nameId',
                        })}
                    {errors.email?.message &&
                        toast.error(errors.email.message, {
                            toastId: 'emailId',
                        })}
                </div>
            </form>
            {pendingVerification && (
                <div className={styles.verifiedForm_wrapper}>
                    <div>
                        <form>
                            <label>Email verification</label>
                            <p>We sent you a code on your email</p>
                            <input
                                value={code}
                                placeholder="Your verification code..."
                                onChange={(e) => setCode(e.target.value)}
                            />
                            <button onClick={onPressVerify}>
                                Verify Email
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}
