'use client'
import { PAGES } from '@/constants/pages-url.constants'
import type { IRegisterForm } from '@/types/auth.types'
import { Switch } from '@mui/material'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'
import { toast } from 'react-toastify'
import styles from './LoginForm.module.scss'
import { useRouter } from 'next/navigation'

export function LoginForm() {
    const {replace} = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IRegisterForm>({ reValidateMode: 'onSubmit' })

    const onSubmit: SubmitHandler<IRegisterForm> = () => {
        toast.success("Login was successful!")
        replace(PAGES.HOME)
        reset()
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
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
                            message: "Email requires max 100 characters"
                        }
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
                                value: 5,
                                message: 'Password requires min 5 characters',
                            },
                            pattern: {
                                value: /\d/, 
                                message: 'Password requires at least one digit',
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
                Don't have an account? <Link href={PAGES.REGISTER}>Sign up</Link>
            </p>
            <p className={styles.forgotPassword}>
               <Link href={""}>Forgot your password?</Link>
            </p>
            <div className={styles.errors}>
                {errors.password?.message &&
                    toast.error(errors.password.message, {
                        toastId: 'passwordId',
                    })}
                {errors.name?.message &&
                    toast.error(errors.name.message, {
                        toastId: 'nameId',
                    })}
                {errors.email?.message &&
                    toast.error(errors.email.message, { toastId: 'emailId' })}
            </div>
        </form>
    )
}
