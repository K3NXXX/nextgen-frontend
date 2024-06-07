
import { Navigation } from '@/components/dashboard/profile/navigation/Navigation'
import styles from "./Profile.module.scss"
import { ProfileInfo } from '@/components/dashboard/profile/profile-info/ProfileInfo'
import { ProfileSettings } from '@/components/dashboard/profile/profile-settings/ProfileSettings'

export default async function Profile() {
	return (
		<div className={styles.root}>
			<Navigation/>
			<ProfileInfo/>
			<ProfileSettings/>
		</div>
	)

}
