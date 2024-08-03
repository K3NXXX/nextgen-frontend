import type { InfoForm } from '@/types/project.types'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import styles from '../AddProjectsForm.module.scss'
import { useDispatch } from 'react-redux'
import { setSwitchAddProjectForm } from '@/redux/slices/projectSlice'

export function InfoForm() {
    const [projectNameSymbols, setProjectNameSymbols] = useState(0)
    const [projectDescrSymbols, setProjectDescrSymbols] = useState(0)
    const [budgetValue, setBudgetValue] = useState(0)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InfoForm>({ reValidateMode: 'onSubmit' })
    const dispatch = useDispatch()

    const onSubmit: SubmitHandler<InfoForm> = (data) => {
        dispatch(setSwitchAddProjectForm("members"))
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.infoForm}>
                <h5 className={styles.title}>Information</h5>
                <div className={styles.input__block}>
                    <div className={styles.input__block_top}>
                        <label>
                            Name <span>*</span>
                        </label>
                        <p>{projectNameSymbols}/100</p>
                    </div>
                    <TextField
                        {...register('name', {
                            required: true,
                            minLength: {
                                value: 5,
                                message: 'Name field required min 5 characters',
                            },
                        })}
                        inputProps={{ maxLength: 100 }}
                        onChange={(e) =>
                            setProjectNameSymbols(e.target.value.length)
                        }
                        id="outlined-basic"
                        label="Project name"
                        variant="outlined"
                    />
                </div>

                <div className={styles.input__block}>
                    <label>
                        Budget, $ <span>*</span>
                    </label>
                    <TextField
                        {...register('budget', {
                            required: {
                                value: true,
                                message: 'Budget field is required',
                            },
                        })}
                        inputProps={{ min: 0, max: 100000 }}
                        value={budgetValue}
                        type="number"
                        id="outlined-basic"
                        label="Project budget in $"
                        variant="outlined"
                        onChange={(e) => {
                            let value = parseInt(e.target.value, 10)

                            if (value > 1000000) value = 1000000
                            if (value < 0) value = 0

                            setBudgetValue(value)
                        }}
                    />
                </div>
                <div className={styles.input__block}>
                    <div className={styles.input__block_top}>
                        <label>
                            Description <span>*</span>
                        </label>
                        <p>{projectDescrSymbols}/500</p>
                    </div>

                    <TextField
                        {...register('description', {
                            required: true,
                            minLength: {
                                value: 20,
                                message:
                                    'Description field required min 20 characters',
                            },
                        })}
                        multiline
                        maxRows={3}
                        inputProps={{ maxLength: 500 }}
                        onChange={(e) =>
                            setProjectDescrSymbols(e.target.value.length)
                        }
                        className={styles.textArea}
                        id="outlined-basic"
                        label="Project description"
                        variant="outlined"
                    />
                </div>
                <Button
                    className={styles.continueButton}
                    type="submit"
                    variant="contained"
                >
                    Continue
                </Button>
            </form>
            <div className={styles.errors}>
                {errors.name?.message &&
                    toast.error(errors.name.message, {
                        toastId: '',
                    })}
                {errors.description?.message &&
                    toast.error(errors.description.message, {
                        toastId: '',
                    })}
                {errors.budget?.message &&
                    toast.error(errors.budget.message, {
                        toastId: '',
                    })}
            </div>
        </>
    )
}
