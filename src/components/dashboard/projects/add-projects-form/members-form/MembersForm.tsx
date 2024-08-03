import { Button, Slider } from '@mui/material'
import styles from '../AddProjectsForm.module.scss'
import { useDispatch } from 'react-redux'
import { setSwitchAddProjectForm } from '@/redux/slices/projectSlice'

export function MembersForm() {
	const dispatch = useDispatch()
    return (
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
            <Button className={styles.addMembers} variant="contained">
                Add members
            </Button>
            <div className={styles.buttons}>
                <Button  className={styles.addMembers} variant="contained">
                    Continue
                </Button>
                <Button onClick={() => dispatch(setSwitchAddProjectForm("info"))} className={styles.backButton} variant="contained">
                    Back
                </Button>
            </div>
        </form>
    )
}
