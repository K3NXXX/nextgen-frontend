import { GeneralStatistics } from '@/components/dashboard/main/general-statistics/GeneralStatistics'
import styles from "./Dashboard.module.scss"
import { SecondRow } from '@/components/dashboard/main/second-row/SecondRow'
import { ThirdRow } from '@/components/dashboard/main/third-row/ThirdRow'
import { FourthRow } from '@/components/dashboard/main/fourth-row/FourthRow'

export function Dashboard() {
	return (
		<section className={styles.wrapper}>
			<GeneralStatistics/>
			<SecondRow/>
			<ThirdRow/>
			{/* <FourthRow/> */}
		</section>
	)
}
