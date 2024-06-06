import { SetStateAction, useEffect, useRef, useState } from 'react'
import styles from './VerificationCode.module.scss'

interface VerificationCodeProps {
    setVerifyCode?: React.Dispatch<SetStateAction<string>>
    setResetCode?: React.Dispatch<SetStateAction<string>>
}

export function VerificationCode({
    setVerifyCode,
    setResetCode,
}: VerificationCodeProps) {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])
    const [code, setCode] = useState('')

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

    useEffect(() => {
        if (setVerifyCode) setVerifyCode(code)
    }, [code, setVerifyCode])

    useEffect(() => {
        if (setResetCode) setResetCode(code)
    }, [code, setResetCode])

    return (
        <div className={styles.inputs_row}>
            {[...new Array(6)]((_, index) => (
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
    )
}
