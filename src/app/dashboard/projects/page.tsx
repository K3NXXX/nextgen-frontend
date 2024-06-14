import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import { Projects } from './Projects'


export const metadata: Metadata = {
    title: 'Projects',
    ...NO_INDEX_PAGE,
}

export default function ProjectsPage() {
    return <Projects/>
}
