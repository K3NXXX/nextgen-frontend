import Register from './Register'

import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registation',
  description: `${SITE_NAME} registration page`
}

export default function RegisterPage() {
    return <Register/>
}
