'use client'

import { VerificationCode } from '@/components/ui/auth/verification-code/VerificationCode'
import { PAGES } from '@/constants/pages-url.constants'
import { IVerifyEmailForm } from '@/types/auth.types'
import { useSignUp } from '@clerk/nextjs'
import { Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useOnClickOutside } from 'usehooks-ts'
import styles from './VerifyEmailForm.module.scss'

interface IVerifyEmailFormProps {
    setPendingVerification: React.Dispatch<React.SetStateAction<boolean>>
}

export function VerifyEmailForm({
    setPendingVerification,
}: IVerifyEmailFormProps) {
    const emailVefiryRef = useRef<HTMLFormElement>(null)
    const { handleSubmit, reset } = useForm<IVerifyEmailForm>()
    const { isLoaded, signUp, setActive } = useSignUp()
    const [verifyCode, setVerifyCode] = useState('')
    const [showTimer, setShowTimer] = useState(false)
    const [timer, setTimer] = useState(59)
    const { replace } = useRouter()

    const onSubmit: SubmitHandler<IVerifyEmailForm> = async () => {
        if (!isLoaded) {
            return
        }
        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification(
                {
                    code: verifyCode,
                }
            )
            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId })
                replace(PAGES.HOME)
                toast.success('Registration was successful!')
                reset()
            }
        } catch (error: any) {
            if (error.errors[0]?.code === 'form_code_incorrect') {
                toast.error('Invalid reset code!')
            }
            if (error.errors[0]?.code === 'verification_failed') {
                toast.error(
                    'Too many failed attempts, try again to recieve a reset code'
                )
            }
            console.log('on submit error:', error)
        }
    }

    const resendCode = async () => {
        try {
            await signUp?.prepareEmailAddressVerification({
                strategy: 'email_code',
            })
            setTimer(59)
            setShowTimer(true)
        } catch (error) {
            console.log('resend code error:', error)
        }
    }

    const handleClickOutside = () => {
        setPendingVerification(false)
    }

    useOnClickOutside(emailVefiryRef, handleClickOutside)

    useEffect(() => {
        if (showTimer) {
            const intervalId = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1)
            }, 1000)
            return () => clearInterval(intervalId)
        }
    }, [showTimer])

    useEffect(() => {
        if (timer < 1) {
            setShowTimer(false)
            setTimer(59)
        }
    }, [timer])

    return (
        <div className={styles.verifiedForm_wrapper}>
            <form ref={emailVefiryRef} onSubmit={handleSubmit(onSubmit)}>
                <Mail size={30} color="white" />
                <label>Email verification</label>
                <p>Enter your verification code we sent you on your email</p>
                <div className={styles.content}>
                    <VerificationCode setVerifyCode={setVerifyCode} />
                    <button className={styles.submitButton}>
                        Verify Email
                    </button>
                    <p className={styles.problems}>
                        Are you facing any problems with receiving the code?
                    </p>
                    <div className={styles.resendCode_wrapper}>
                        <button
                            onClick={resendCode}
                            style={
                                showTimer
                                    ? { cursor: 'auto', color: '#5e5e61' }
                                    : {}
                            }
                            disabled={showTimer ? true : false}
                            className={styles.resendCodeButton}
                        >
                            Resend code
                        </button>
                        {showTimer && <p>0:{timer} sec</p>}
                    </div>
                    <button
                        onClick={handleClickOutside}
                        className={styles.goBackButton}
                    >
                        Go back
                    </button>
                </div>
            </form>
        </div>
    )
}
