import { PAGES } from '@/constants/pages-url.constants'
import { FaFile, FaHome } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa6'
import { IoIosCard, IoIosRocket } from 'react-icons/io'
import { IoStatsChart } from 'react-icons/io5'
import type { IconType } from 'react-icons/lib'

interface IDashboardMenu {
    id: number
    icon: IconType
    label: string
    url: string
}

export const dashboardMenuMainPages: IDashboardMenu[] = [
    {
        id: 1,
        icon: FaHome,
        label: 'Dashboard',
        url: PAGES.DASHBOARD,
    },
    {
        id: 2,
        icon: IoStatsChart,
        label: 'Tables',
        url: PAGES.TABLES,
    },
    {
        id: 3,
        icon: IoIosCard,
        label: 'Billing',
        url: PAGES.BILLING,
    },
]
export const dashboardMenuAccountPages: IDashboardMenu[] = [
    {
        id: 1,
        icon: FaUser,
        label: 'Profile',
        url: PAGES.PROFILE,
    },
    {
        id: 2,
        icon: FaFile,
        label: 'Sign up',
        url: PAGES.REGISTER,
    },
    {
        id: 3,
        icon: IoIosRocket,
        label: 'Log in',
        url: PAGES.LOGIN,
    },
]
