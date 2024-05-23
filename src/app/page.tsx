import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import { Home } from './Home'

export const metadata: Metadata = {
  title: `Home | ${SITE_NAME}`,
  description: `${SITE_NAME} home page`
}

export default function HomePage() {
    return <main >
        <Home/>
    </main>
}
