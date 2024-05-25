import { GeneralStatistics } from '@/components/dashboard/main/general-statistics/GeneralStatistics'
import styles from "./Dashboard.module.scss"
import { SecondRow } from '@/components/dashboard/main/second-row/SecondRow'

export function Dashboard() {
	return (
		<section className={styles.wrapper}>
			<GeneralStatistics/>
			<SecondRow/>
		</section>
	)
}
