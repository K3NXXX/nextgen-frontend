"use client"
import type { IRegisterForm } from '@/types/auth.types'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PAGES } from '@/constants/pages-url.constants'
import { Switch } from '@mui/material'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'
import Link from 'next/link'
import styles from './RegisterForm.module.scss'

export function RegisterForm() {
	const {register, handleSubmit, reset} = useForm<IRegisterForm>({mode: "onChange"})

	const onSubmit: SubmitHandler<IRegisterForm> = () => {
		reset()
		alert("OK")
	}
    return (
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
                    <FaGoogle color='white' size={25} />
                </div>
            </div>
			<p className={styles.or}>or</p>
			<div className={styles.input_row}>
				<label>Name</label>
				<input
				{...register("name", {
					minLength: {
						value: 5,
						message: "Name required min 5 characters"
					}
				})}
				type="text" placeholder='Your full name' />
			</div>
			<div className={styles.input_row}>
				<label>Email</label>
				<input
				{...register("email", {
					pattern: {
						value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
						message: "Incorrect email"
					}
				})}
				type="text" placeholder='Your email address' />
			</div>
			<div className={styles.input_row}>
				<label>Password</label>
				<input
				{...register("password", {
					minLength: {
						value: 5,
						message: "Password required min 5 characters"
					}
					
				})}
				type="text" placeholder='Your email address' />
			</div>
			<div className={styles.toggle}>
				<Switch/>
				<p>Remember me</p>
			</div>
			<button className={styles.submitButton}>Sign up</button>
			<p className={styles.haveAccout}>Already have an account? <Link href={PAGES.LOGIN}>Sign in</Link></p>
        </form>
    )
}
