
import { Navigation } from '@/components/dashboard/profile/navigation/Navigation'
import styles from "./Profile.module.scss"
import { ProfileInfo } from '@/components/dashboard/profile/profile-info/ProfileInfo'

export default async function Profile() {
	return (
		<div className={styles.root}>
			<Navigation/>
			<ProfileInfo/>
		</div>
	)

}
