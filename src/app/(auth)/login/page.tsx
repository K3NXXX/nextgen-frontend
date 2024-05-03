
import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import Login from './Login'

export const metadata: Metadata = {
  title: 'Login',
  description: `${SITE_NAME} registration page`
}

export default function LoginPage() {
    return <Login/>
}
