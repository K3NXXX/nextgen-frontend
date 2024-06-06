import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import Profile from './Profile'

export const metadata: Metadata = {
    title: 'Profile',
    ...NO_INDEX_PAGE,
}

export default function ProfilePage() {
    return <Profile />
}
