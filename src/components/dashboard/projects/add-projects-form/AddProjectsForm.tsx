'use client'

import { Logo } from '@/components/ui/logo/Logo'
import { setOpenProjectAddForm } from '@/redux/slices/globalSlice'
import { Button, Slider } from '@mui/material'
import { useState } from 'react'
import { IoIosArrowForward, IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import styles from './AddProjectsForm.module.scss'
import { InfoForm } from './info-form/InfoForm'

export function AddProjectsForm() {
    const dispatch = useDispatch()
    let [formSections, setFormSections] = useState(0)
    console.log(formSections)

    return (
        <div className={styles.root}>
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
                        <div className={styles.project__content}>
                            {formSections === 0 && <InfoForm />}
                            {formSections === 1 && (
                                <form className={styles.membersForm}>
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
                                </form>
                            )}
                            {formSections === 2 && (
                                <form className={styles.confirmForm}>
                                    <h5 className={styles.title}>Confirm</h5>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Odit itaque ut labore
                                        unde nam quo ipsa nihil nobis!
                                        Voluptates vero error eaque repellat
                                        blanditiis, eos nam quas aspernatur
                                        nobis culpa?
                                    </p>
                                </form>
                            )}
                            <div className={styles.buttons}>
                                <Button
                                    className={styles.continueButton}
                                    onClick={() => {
                                        setFormSections(++formSections)
                                        if (formSections === 3) {
                                            dispatch(
                                                setOpenProjectAddForm(false)
                                            )
                                        }
                                    }}
                                    variant="contained"
                                >
                                    {formSections === 2
                                        ? 'Confirm'
                                        : 'Continue'}
                                </Button>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
