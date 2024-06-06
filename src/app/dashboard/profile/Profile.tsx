
import { Navigation } from '@/components/dashboard/profile/navigation/Navigation'
import styles from "./Profile.module.scss"

export default async function Profile() {
	return (
		<div className={styles.root}>
			<Navigation/>
		</div>
	)

}
