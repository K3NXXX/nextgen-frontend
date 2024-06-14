import { ProjectsConfigurator } from '@/components/dashboard/projects/projects-configurator/ProjectsConfigurator'
import styles from "./Projects.module.scss"
import { AddProjectsForm } from '@/components/dashboard/projects/add-projects-form/AddProjectsForm'

export function Projects() {
	return <div className={styles.root}>
		<ProjectsConfigurator/>
		<AddProjectsForm/>
	</div>
}
