import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import Profile from './Profile'

export const metadata: Metadata = {
  title: 'Profile',
  description: `${SITE_NAME} registration page`
}

export default function ProfilePage() {
    return <Profile/>
}
