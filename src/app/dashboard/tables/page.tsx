import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import { Tables } from './Tables'

export const metadata: Metadata = {
    title: 'Tables',
    ...NO_INDEX_PAGE,
}

export default function TablesPage() {
    return <Tables/>
}
