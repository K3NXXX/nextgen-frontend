import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import { Billing } from './Billing'

export const metadata: Metadata = {
    title: 'Billing',
    ...NO_INDEX_PAGE,
}

export default function BillingPage() {
    return <Billing/>
}
