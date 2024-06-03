import { AuthorsTable } from '@/components/dashboard/tables/authors-table/AuthorsTable'
import styles from "./Tables.module.scss"
import { ProjectsTable } from '@/components/dashboard/tables/projects-table/ProjectsTable'

export function Tables() {
	return <div className={styles.root}>
		<AuthorsTable/>
		<ProjectsTable/>
	</div>
}
