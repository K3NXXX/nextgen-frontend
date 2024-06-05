import { Cards } from '@/components/dashboard/billing/cards/Cards'
import styles from "./Billing.module.scss"
import { BillingInfo } from '@/components/dashboard/billing/billing-info/BillingInfo'

export function Billing() {
	return <div className={styles.root}>
		<Cards/>
		<BillingInfo/>
	</div>
}
