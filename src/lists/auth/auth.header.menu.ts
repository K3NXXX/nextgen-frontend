import { PAGES } from '@/constants/pages-url.constants'
import { Box, CircleUserRound, KeyRound, User } from 'lucide-react'
import { IAuthHeaderMenu } from './types'
export const authHeaderMenu: IAuthHeaderMenu[] = [
    {
        id: 1,
        icon: Box,
        name: "DASHBOARD",
        url: PAGES.HOME,
    },
    {
        id: 2,
        icon: User,
        name: "PROFILE",
        url: PAGES.PROFILE,
    },
    {
        id: 3,
        icon: CircleUserRound,
        name: "SIGN UP",
        url: PAGES.REGISTER,
    },
    {
        id: 4,
        icon: KeyRound,
        name: "SIGN IN",
        url: PAGES.LOGIN,
    },
]
