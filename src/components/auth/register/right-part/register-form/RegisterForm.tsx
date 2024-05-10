'use client'
import { GlobalLoader } from '@/components/ui/global-loader/GlobalLoader'
import { PAGES } from '@/constants/pages-url.constants'
import type { IRegisterForm } from '@/types/auth.types'
import { useSignUp } from '@clerk/nextjs'
import { Switch } from '@mui/material'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { VerifyEmailForm } from '../verify-email-form/VerifyEmailForm'
import styles from './RegisterForm.module.scss'
import { AuthWayButtons } from '@/components/ui/auth-way-buttons/AuthWayButtons'

export function RegisterForm() {
    const { signUp, isLoaded } = useSignUp()

    const [pendingVerification, setPendingVerification] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
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
        } catch (error: any) {
            if (error.errors[0]?.code === 'form_identifier_exists') {
                toast.error(
                    'This email address is already in use. Please use a different one.'
                )
            }
            console.log(
                'Register onSubmit error: ',
                JSON.stringify(error, null, 2)
            )
        }
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    if (!isLoaded) return <GlobalLoader />

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <p className={styles.register}>Register with</p>
                <AuthWayButtons/>
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
                <VerifyEmailForm
                    setPendingVerification={setPendingVerification}
                />
            )}
        </>
    )
}
