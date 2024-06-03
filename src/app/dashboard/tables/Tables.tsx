import { AuthorsTable } from '@/components/dashboard/tables/authors-table/AuthorsTable'
import styles from "./Tables.module.scss"

export function Tables() {
	return <div className={styles.root}>
		<AuthorsTable/>
	</div>
}
