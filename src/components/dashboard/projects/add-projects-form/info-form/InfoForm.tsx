import { TextField } from '@mui/material'
import { useState } from 'react'
import styles from '../AddProjectsForm.module.scss'

export function InfoForm() {
    const [projectNameSymbols, setProjectNameSymbols] = useState(0)
    const [projectDescrSymbols, setProjectDescrSymbols] = useState(0)
    const [budgetValue, setBudgetValue] = useState(0)
    return (
        <form className={styles.infoForm}>
            <h5 className={styles.title}>Information</h5>
            <div className={styles.input__block}>
                <div className={styles.input__block_top}>
                    <label>
                        Name <span>*</span>
                    </label>
                    <p>{projectNameSymbols}/100</p>
                </div>
                <TextField
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
            
        </form>
    )
}
