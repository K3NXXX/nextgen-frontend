import { PAGES } from '@/constants/pages-url.constants'
import { Box, CircleUserRound, KeyRound, User } from 'lucide-react'
import { IAuthHeaderMenu } from './types'
export const AuthHeaderMenu: IAuthHeaderMenu[] = [
    {
        id: 1,
        icon: Box,
        link: PAGES.HOME,
    },
    {
        id: 2,
        icon: User,
        link: PAGES.PROFILE,
    },
    {
        id: 3,
        icon: CircleUserRound,
        link: PAGES.REGISTER,
    },
    {
        id: 4,
        icon: KeyRound,
        link: PAGES.LOGIN,
    },
]
