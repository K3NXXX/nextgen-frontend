'use client'

import { PAGES } from '@/constants/pages-url.constants'
import { IVerifyEmailForm } from '@/types/auth.types'
import { useSignUp } from '@clerk/nextjs'
import { Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styles from './VerifyEmailForm.module.scss'
import { useOnClickOutside } from 'usehooks-ts'

interface IVerifyEmailFormProps {
    setPendingVerification: React.Dispatch<React.SetStateAction<boolean>>;
}
export function VerifyEmailForm({setPendingVerification}: IVerifyEmailFormProps) {
    const emailVefiryRef = useRef<HTMLFormElement>(null)
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])
    const { handleSubmit, reset } = useForm<IVerifyEmailForm>()
    const { isLoaded, signUp, setActive } = useSignUp()
    const [code, setCode] = useState('')
    const { replace } = useRouter()

    const onSubmit: SubmitHandler<IVerifyEmailForm> = async () => {
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
                replace(PAGES.HOME)
                toast.success('Registration was successful!')
                reset()
            }
        } catch (error) {
            console.log('on submit error:', error)
        }
    }

    const resendCode = async () => {
        try {
            await signUp?.prepareEmailAddressVerification({
                strategy: 'email_code',
            })
        } catch (error) {
            console.log('resend code error:', error)
        }
    }

    const handleInputChange = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = e.target.value
        setCode((prevCode) => {
            const newCode = prevCode.split('')
            newCode[index] = value
            return newCode.join('')
        })

        if (value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (
        index: number,
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key === 'Backspace' && index > 0 && !e.currentTarget.value) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handleClickOutside = () => {
        setPendingVerification(false)
    }

      useOnClickOutside(emailVefiryRef, handleClickOutside)

    return (
        <div  className={styles.verifiedForm_wrapper}>
            <form ref={emailVefiryRef} onSubmit={handleSubmit(onSubmit)}>
                <Mail size={30} color="white" />
                <label>Email verification</label>
                <p>Enter your verification code we sent you on your email</p>
                <div className={styles.content}>
                    <div className={styles.inputs_row}>
                        {[...new Array(6)].map((_, index) => (
                            <input
                                key={index}
                                value={code[index] || ''}
                                onChange={(e) => handleInputChange(index, e)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                maxLength={1}
                                ref={(el) => {
                                    inputRefs.current[index] = el
                                }}
                            />
                        ))}
                    </div>
                    <button className={styles.submitButton}>
                        Verify Email
                    </button>
                    <p className={styles.problems}>
                        Are you facing any problems with receiving the code?
                    </p>
                    <button
                        onClick={resendCode}
                        className={styles.resendCodeButton}
                    >
                        Resend code
                    </button>
                    <button onClick={handleClickOutside} className={styles.goBackButton}>Go back</button>
                </div>
            </form>
        </div>
    )
}
