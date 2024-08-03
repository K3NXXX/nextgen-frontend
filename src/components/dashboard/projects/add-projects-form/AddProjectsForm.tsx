'use client'

import { Logo } from '@/components/ui/logo/Logo'
import { setOpenProjectAddForm } from '@/redux/slices/globalSlice'
import { RootState } from '@/redux/store'
import { IoIosArrowForward, IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import styles from './AddProjectsForm.module.scss'
import { InfoForm } from './info-form/InfoForm'
import { MembersForm } from './members-form/MembersForm'

export function AddProjectsForm() {
    const dispatch = useDispatch()
    const { switchAddProjectForm } = useSelector(
        (state: RootState) => state.projectSlice
    )
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
                            {switchAddProjectForm === 'info' && <InfoForm />}
                            {switchAddProjectForm === 'members' && (
                                <MembersForm />
                            )}
                            {switchAddProjectForm === '' && (
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
                            {/* <div className={styles.buttons}>
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
