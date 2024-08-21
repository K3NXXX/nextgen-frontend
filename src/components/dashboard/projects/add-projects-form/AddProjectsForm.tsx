import { Logo } from '@/components/ui/logo/Logo'
import { setOpenProjectAddForm } from '@/redux/slices/globalSlice'
import { AppDispatch, RootState } from '@/redux/store'
import { projectService } from '@/services/projects.services'
import { IAddProjectForm } from '@/types/project.types'
import { Button, Slider, TextField } from '@mui/material'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IoIosArrowForward, IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './AddProjectsForm.module.scss'

export function AddProjectsForm() {
    let [formSections, setFormSections] = useState(0)
    const [projectNameSymbols, setProjectNameSymbols] = useState(0)
    const [projectDescrSymbols, setProjectDescrSymbols] = useState(0)
    const [budgetValue, setBudgetValue] = useState(0)
    const [projectData, setProjectData] = useState<IAddProjectForm | null>(null)
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IAddProjectForm>({ reValidateMode: 'onSubmit' })
    const dispatch = useDispatch<AppDispatch>()

    const onSubmit: SubmitHandler<IAddProjectForm> = (data) => {
        setProjectData(data)
        projectService.createTask(data)
        toast.success("Project added successfully!")
    }

    return (
        <div className={styles.root}>
            <ToastContainer />
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <Logo />
                        <p>Create your project</p>
                    </div>
                    <div className={styles.right}>
                        <IoMdClose
                            onClick={() =>
                                dispatch(setOpenProjectAddForm(false))
                            }
                            className={styles.close}
                            color="white"
                            size={30}
                        />
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <p className={styles.stepNumber}>1</p>
                                <span>Info</span>
                            </div>
                            <IoIosArrowForward color="white" />
                            <div className={styles.step}>
                                <p className={styles.stepNumber}>2</p>
                                <span>Members</span>
                            </div>
                            <IoIosArrowForward color="white" />
                            <div className={styles.step}>
                                <p className={styles.stepNumber}>3</p>
                                <span>Confirm</span>
                            </div>
                        </div>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={styles.addProjectForm}
                        >
                            {formSections === 0 && (
                                <div className={styles.infoBlock}>
                                    <h5 className={styles.title}>
                                        Information
                                    </h5>
                                    <div className={styles.input__block}>
                                        <div
                                            className={styles.input__block_top}
                                        >
                                            <label>
                                                Name <span>*</span>
                                            </label>
                                            <p>{projectNameSymbols}/100</p>
                                        </div>
                                        <TextField
                                            {...register('name', {
                                                required:
                                                    'Name field is required',
                                                minLength: {
                                                    value: 5,
                                                    message:
                                                        'Name field required min 5 characters',
                                                },
                                            })}
                                            inputProps={{ maxLength: 100 }}
                                            onChange={(e) =>
                                                setProjectNameSymbols(
                                                    e.target.value.length
                                                )
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
                                                required:
                                                    'Budget field is required',
                                                valueAsNumber: true,
                                            })}
                                            inputProps={{ min: 0, max: 100000 }}
                                            value={budgetValue}
                                            type="number"
                                            id="outlined-basic"
                                            label="Project budget in $"
                                            variant="outlined"
                                            onChange={(e) => {
                                                let value = parseInt(
                                                    e.target.value,
                                                    10
                                                )

                                                if (value > 1000000)
                                                    value = 1000000
                                                if (value < 0) value = 0

                                                setBudgetValue(value)
                                            }}
                                        />
                                    </div>
                                    <div className={styles.input__block}>
                                        <div
                                            className={styles.input__block_top}
                                        >
                                            <label>
                                                Description <span>*</span>
                                            </label>
                                            <p>{projectDescrSymbols}/500</p>
                                        </div>

                                        <TextField
                                            {...register('description', {
                                                required:
                                                    'Description field is required',
                                            })}
                                            multiline
                                            maxRows={3}
                                            inputProps={{ maxLength: 500 }}
                                            onChange={(e) =>
                                                setProjectDescrSymbols(
                                                    e.target.value.length
                                                )
                                            }
                                            className={styles.textArea}
                                            id="outlined-basic"
                                            label="Project description"
                                            variant="outlined"
                                        />
                                    </div>
                                </div>
                            )}
                            {formSections === 1 && (
                                <div className={styles.membersBlock}>
                                    <h5 className={styles.title}>Members</h5>
                                    <p>Select the count of members</p>
                                    <Slider
                                        className={styles.membersCount}
                                        defaultValue={12}
                                        aria-label="Default"
                                        valueLabelDisplay="auto"
                                    />
                                    <p>Add members to your project</p>
                                    <Button
                                        className={styles.addMembers}
                                        variant="contained"
                                    >
                                        Add members
                                    </Button>
                                </div>
                            )}
                            {formSections === 2 && (
                                <div className={styles.confirmBlock}>
                                    <h5 className={styles.title}>Confirm</h5>
                                    <p>
                                        <span>Project name: </span>
                                        {projectData ? projectData.name : "not set"}
                                    </p>
                                    <p>
                                        <span>Project description: </span>
                                        {projectData ? projectData.description : "not set"}
                                    </p>
                                    <p>
                                        <span>Project budget: </span>
                                        {projectData ? projectData.budget + "$ " : "not set"}
                                    </p>
                                </div>
                            )}
                            <div className={styles.buttons}>
                                {formSections === 2 ? (
                                    <Button
                                        onClick={() =>
                                            isValid &&
                                            dispatch(
                                                setOpenProjectAddForm(false)
                                            )
                                        }
                                        className={styles.confirmButton}
                                        variant="contained"
                                        type={isValid ? 'submit' : 'button'}
                                    >
                                        Confirm
                                    </Button>
                                ) : (
                                    <Button
                                    type='button'
                                        className={styles.continueButton}
                                        onClick={(e) => {
                                            setFormSections(++formSections)
                                        }}
                                        variant="contained"
                                    >
                                        Continue
                                    </Button>
                                )}
                                {(formSections === 1 || formSections === 2) && (
                                    <Button
                                        className={styles.backButton}
                                        onClick={() =>
                                            setFormSections(--formSections)
                                        }
                                        variant="contained"
                                    >
                                        Back
                                    </Button>
                                )}
                            </div>
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
