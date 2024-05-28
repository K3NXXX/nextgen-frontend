import { IoMdSettings } from "react-icons/io";
import styles from "./DashboardSettings.module.scss"

export function DashboardSetting() {
	return <div className={styles.root} >
		<IoMdSettings color='white' size={29} />
	</div>
}
