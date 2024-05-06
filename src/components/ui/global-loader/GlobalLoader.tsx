import { CircularProgress } from '@mui/material'
import styles from "./GlobalLoader.module.scss"

export function GlobalLoader() {
	return <div className={styles.root}>
		<CircularProgress />
	</div>
}
